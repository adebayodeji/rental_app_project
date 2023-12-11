import { prisma } from "../../index";
export const createProperty = async (data) => {
  try {
    const newProperty = await prisma.tbl_property.create({
      data,
    });
    return newProperty;
  } catch (error) {}
};
