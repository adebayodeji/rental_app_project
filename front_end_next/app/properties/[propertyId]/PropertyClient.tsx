import { Property, User } from "@/app/types";
import Container from "@/app/components/partials/Container";
import React from "react";
import PropertyHead from "@/app/components/properties/PropertyHead";
import PropertyInfo from "@/app/components/properties/PropertyInfo";

interface PropertyClientProps {
  property: Property & {
    user: User;
  };
  currentUser?: User | null;
}
const PropertyClient: React.FC<PropertyClientProps> = ({
  property,
  currentUser,
}) => {
  return (
    <Container>
      <div className="mx-auto max-w-screen-lg lg:max-w-screen-2xl h-full">
        <div className="flex flex-col gap-6 h-full">
          <PropertyHead
            name={property.name}
            address={property.address}
            locationValue={property.address}
            id={property.id}
            imageSrc={property.image}
            currentUser={currentUser}
          />
        </div>
        <div
          className="
          "
        >
          <PropertyInfo
            user={property.user}
            description={property.description}
            roomCount={property.roomCount}
            guestCount={property.guestCount}
            bathroomCount={property.bathroomCount}
            locationValue={property.address}
          />
        </div>
      </div>
    </Container>
  );
};

export default PropertyClient;
