"use client";

import { User } from "@/app/types";
import Heading from "@/app/components/properties/Heading";
import Image from "next/image";
import { HeartButton } from "../partials/Button";

interface PropertyHeadProps {
  name: string;
  address: string;
  imageSrc: string[];
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
  const totalCount = imageSrc.length;

  return (
    <>
      <Heading title={name} subtitle={address} />
      <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-white">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1">
            <Image
              src={imageSrc[0]}
              layout="responsive"
              width={400}
              height={600}
              alt={`Image 1`}
              className={`object-cover rounded-l-lg h-full`} // Adjust as needed
            />
          </div>
          <div className="flex flex-1 md:flex-col gap-2">
            {imageSrc.slice(1, 4).map((src, index) => (
              <div key={index} className="flex-1">
                <Image
                  src={src}
                  layout="responsive"
                  width={100}
                  height={150}
                  alt={`Image ${index + 2}`} // Adjust as needed
                  className={`object-cover h-full ${
                    index === 0 ? "rounded-tr-lg" : ""
                  }`}
                />
              </div>
            ))}
            <div className="flex-1">
              <Image
                src={imageSrc[4]}
                layout="responsive"
                width={100}
                height={150}
                alt={`Image 5`}
                className={`object-cover h-full rounded-br-lg`} // Adjust as needed
              />
              {totalCount > 1 && (
                <div className="absolute right-5 bottom-5 text-white">
                  1/{totalCount}
                  <div className="absolute right-5 top-5">
                    <HeartButton propertyId={id} currentUser={currentUser} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyHead;
