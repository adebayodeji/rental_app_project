import { IconType } from "react-icons";
import { User } from "../../types";
import dynamic from "next/dynamic";
import Avatar from "@/app/components/partials/Avatar";
import {
  Person2 as Person2Icon,
  Message,
  Phone as PhoneIcon,
} from "@mui/icons-material";

const Map = dynamic(() => import("../../components/partials/Map"), {
  ssr: false,
});
interface PropertyInfoProps {
  user: User;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  coordinates?: number[];
  description: string;
  guestCount: number;
  locationValue: string;
  price: number;
  roomCount: number;
}
const PropertyInfo: React.FC<PropertyInfoProps> = ({
  bathroomCount,
  category,
  coordinates,
  description,
  guestCount,
  locationValue,
  price,
  roomCount,
  user,
}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-row items-center gap-2 text-xl font-semibold">
        Listed by Abass
        <Avatar src={user?.image} />
      </div>
      <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
        <div>{`${guestCount} ${guestCount > 1 ? "guests" : "guest"}`}</div>
        <div>{`${roomCount} ${roomCount > 1 ? "rooms" : "room"}`}</div>
        <div>{`${bathroomCount} ${
          bathroomCount > 1 ? "bathrooms" : "bathroom"
        }`}</div>
      </div>
      <hr />
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-3/5">
          <h3 className="text-lg font-bold">About this home</h3>
          <p className="text-lg font-light text-neutral-400">{description}</p>
        </div>
        <div className="md:w-2/5">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Rent Price</h3>
            <h2 className="text-2xl font-bold text-primary">{`RWF 50000`}</h2>
            <button className="bg-ligthBlue">Request call back</button>
            <hr />
          </div>
          <div className="flex flex-row items-start">
            <Person2Icon className="mr-2 text-5xl" />
            <div>
              <span className="text-lg font-bold">Abass</span>
              <p className="italic hover:not-italic text-sm">
                Typically replies within 1 hour
              </p>
              <p className="flex items-center text-sm">7 years on Restfuul </p>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="mb-4 bg-deepBlue flex items-center justify-center">
              <PhoneIcon className="mr-2" />
              Show contact
            </button>
            <button className="bg-chatGreen flex items-center justify-center">
              <Message className="mr-2" />
              Start chat
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="map-container md:w-full">
        <Map center={coordinates} />
      </div>
    </div>
  );
};

export default PropertyInfo;
