import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";

const createShorts = async (data: any) => {

//if you wanna add logic here
    const result = await prisma.shorts.create({ data });
    return result;
};

const getAllShortss = async (query: Record<string, any>) => {
    const result = await prisma.shorts.findMany();
    return result;
};

const getSingleShorts = async (id: string) => {
    const result = await prisma.shorts.findUnique({ where: { id } });
    if(!result){
     throw new ApiError(httpStatus.NOT_FOUND, "Shorts not found..!!")
    }
    return result;
};

const updateShorts = async (id: string, data: any) => {
    const existingShorts = await prisma.shorts.findUnique({ where: { id } });
    if (!existingShorts) {
        throw new ApiError(httpStatus.NOT_FOUND, "Shorts not found..!!");
    }
    const result = await prisma.shorts.update({ where: { id }, data });
    return result;
};

const deleteShorts = async (id: string) => {
 const existingShorts = await prisma.shorts.findUnique({ where: { id } });
    if (!existingShorts) {
        throw new ApiError(httpStatus.NOT_FOUND, "Shorts not found..!!");
    }
    const result = await prisma.shorts.delete({ where: { id } });
    return null;
};

export const shortsService = {
    createShorts,
    getAllShortss,
    getSingleShorts,
    updateShorts,
    deleteShorts,
};
