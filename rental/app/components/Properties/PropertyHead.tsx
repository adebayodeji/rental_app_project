"use client";

import { User } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";
import { HeartButton } from "../partials/Button";

interface PropertyHeadProps {
  name: string;
  address: string;
  imageSrc: string;
  id: string;
  currentUser: User | null;
}

const PropertyHead: React.FC<PropertyHeadProps> = ({
  name,
  address,
  imageSrc,
  id,
  currentUser,
}) => {
  return (
    <>
      <Heading title={name} subtitle={address} />
      <div
        className="
        rouded-xl
        relative
        h-[60vh]
        w-full
        overflow-hidden
        "
      >
        <Image
          alt="Image"
          src={imageSrc}
          fill
          className="object-cover-w-full"
        />
        <div className="absolute right-5 top-5">
          <HeartButton propertyId={id} currentUser={currentUser | null} />
        </div>
      </div>
    </>
  );
};

export default PropertyHead;
