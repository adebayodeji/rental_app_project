import { properties } from "@/app/actions/property";
import PropertyClient from "./PropertyClient";

interface IParams {
  propertyId?: string;
}

const PropertyPage = async ({ params }: { params: IParams }) => {
  const property = await properties.getPropertyById(params);
  return <PropertyClient property={property} />;
};

export default PropertyPage;
