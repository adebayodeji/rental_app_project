import { useState } from "react";
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
  const imageUrls = [
    "https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1665391837905-74d250172dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400",
    "https://i.pinimg.com/564x/1f/fc/68/1ffc6846d7cad8493b724d4152b38e64.jpg",
    "https://images.unsplash.com/photo-1666303349374-c4cf8bc9eaaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  const hasMultipleImages = imageUrls.length > 1;

  return (
    <div className="group col-span-1 cursor-pointer p-2 m-1 relative">
      <div className="relative w-full" data-carousel="slide">
        <div className="relative w-60 h-60 md:h-70 overflow-hidden rounded-lg mb-4">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? "block" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item={index === activeIndex ? "active" : ""}
            >
              <Image
                layout="fill"
                objectFit="cover"
                src={url}
                alt={`Property Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Slider controls */}
        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="absolute top-1/2 start-4 z-30 flex items-center justify-center h-10 w-10 bg-black bg-opacity-30 dark:bg-gray-800/30 hover:bg-opacity-50 dark:hover:bg-gray-800/50 rounded-full cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={prevImage}
            >
              {"<"}
            </button>
            <button
              type="button"
              className="absolute top-1/2 end-4 z-30 flex items-center justify-center h-10 w-10 bg-black bg-opacity-30 dark:bg-gray-800/30 hover:bg-opacity-50 dark:hover:bg-gray-800/50 rounded-full cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={nextImage}
            >
              {/* Next button content */}
              {">"}
            </button>
          </>
        )}
      </div>

      <div className="text-content mt-4">
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
