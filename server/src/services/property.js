import { prisma } from '../../index'
export const saveProperty = async (data) => {
    const newProperty = await prisma.tbl_property.create({ data })
    return newProperty
}

export const getProperty = async (propertyId) => {
    const property = await prisma.tbl_property.findUnique({
        where: { id: propertyId },
    })
    return property
}
