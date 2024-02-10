import { Property, User } from "@/app/types";
import Container from "@/app/components/Container";
import React from "react";
import PropertyHead from "@/app/components/properties/PropertyHead";
import PropertyInfo from "@/app/components/PropertyInfo";

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
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col gap-6">
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
          mt-6
          grid
          grid-cols-1
          md:grid-cols-7
          md:gap-10"
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
