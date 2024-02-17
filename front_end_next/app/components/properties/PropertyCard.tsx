"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, HeartButton } from "../partials/Button";
import { Property } from "@/app/types";
interface propertyCardProps {
  data: Property;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const PropertyCard: React.FC<propertyCardProps> = ({
  data,
  onAction,
  disabled,
  actionId,
  actionLabel,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/properties/${data.id}`)}
      className="group col-span-1 cursor-pointer"
    >
      <div className="flex w-full flex-col gap-2">
        <div
          className="
                relative 
                aspect-square 
                w-full 
                overflow-hidden 
                rounded-xl
              "
        >
          <Image
            fill
            className="
                  h-full 
                  w-full
                  object-cover 
                  transition
                  group-hover:scale-110 
                "
            src={data.image}
            alt="Property"
          />
          <div
            className="
                absolute
                right-3
                top-3
              "
          >
            <HeartButton propertyId={data.id} />
          </div>
        </div>
        <div className="text-lg font-semibold">
          {"Gasabo"}, {"Kigali"}
        </div>
        <div className="font-light text-neutral-500">{data.type}</div>
        <div className="font-light">Agent: Abass Adamo</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">RWF {50000}</div>
          <div className="font-light">/month</div>
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={() => {
              console.log("write the handle click function");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
