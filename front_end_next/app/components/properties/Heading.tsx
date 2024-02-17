"use client";
import { Property } from "../../types";
import { HeartButton, ShareButton } from "../partials/Button";
interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  property?: Property;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  property,
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="flex flex-row items-center justify-between">
        <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
        <div className="flex flex-row space-x-4">
          <div className="flex flex-row items-center space-x-2">
            <ShareButton propertyId={property?.id} currentUser={null} />
            <span>Share</span>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <HeartButton propertyId={property?.id} currentUser={null} />
            <span>Favorite</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
