import { IconType } from "react-icons";
import { User } from "../types";
import { RxAvatar } from "react-icons/rx";
import Avatar from "./Avatar";

interface PropertyInfoProps {
  user: User;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}
const PropertyInfo: React.FC<PropertyInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  return (
    <div
      className="
    col-span-4 flex flex-col gap-8
  "
    >
      <div className="flex flex-row items-center gap-2 text-xl font-semibold">
        {/* Listed by {user?.name}
         */}
         Listed by Abass
        <Avatar src={user?.image} />
      </div>
      <div
        className="
      flex
      flex-row
      items-center
      gap-4
      font-light
      text-neutral-500"
      >
        <div>
          {guestCount > 1 ? `${guestCount} guests` : `${guestCount} guest`}
        </div>
        <div>{roomCount > 1 ? `${roomCount} rooms` : `${roomCount} room`}</div>
        <div>
          {bathroomCount > 1
            ? `${bathroomCount} bathrooms`
            : `${bathroomCount} bathroom`}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PropertyInfo;
