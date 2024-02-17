"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import { User } from "@/app/types";
import { IconType } from "react-icons";
import { useState } from "react";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}
interface HeartButtonProps {
  propertyId: string;
  currentUser?: User | null;
}

interface ShareButtonProps extends Omit<HeartButtonProps, "currentUser"> {}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        w-full
        rounded-lg
        transition
        hover:opacity-80
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
  );
};

export const HeartButton: React.FC<HeartButtonProps> = ({
  propertyId,
  currentUser,
}) => {
  const [hasFavorited, toggleFavorite] = useState(false);
  return (
    // later on we will use the propertyId and currentUser to manage
    <div
      className="
        relative
        cursor-pointer  
        transition
        hover:opacity-80
    "
    >
      <FavoriteIcon
        fontSize="inherit"
        className="text-red-600"
        onClick={() => toggleFavorite(!hasFavorited)}
      />
    </div>
  );
};

export const ShareButton: React.FC<ShareButtonProps> = ({ propertyId }) => {
  return (
    <div
      className="
        relative
        cursor-pointer  
        transition
        hover:opacity-80
    "
    >
      <IosShareIcon
        fontSize="inherit"
        onClick={() => {
          console.log(`property id is ${propertyId}`);
        }}
      />
    </div>
  );
};
