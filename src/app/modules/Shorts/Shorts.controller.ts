import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { shortsService } from "./Shorts.service";

const createShorts = catchAsync(async (req: Request, res: Response) => {
    const result = await shortsService.createShorts(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Shorts created successfully",
        data: result,
    });
});

const getAllShortss = catchAsync(async (req: Request, res: Response) => {
    const results = await shortsService.getAllShortss(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Shortss retrieved successfully",
        data: results,
    });
});

const getSingleShorts = catchAsync(async (req: Request, res: Response) => {
    const result = await shortsService.getSingleShorts(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Shorts retrieved successfully",
        data: result,
    });
});

const updateShorts = catchAsync(async (req: Request, res: Response) => {
    const result = await shortsService.updateShorts(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Shorts updated successfully",
        data: result,
    });
});

const deleteShorts = catchAsync(async (req: Request, res: Response) => {
    const result = await shortsService.deleteShorts(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Shorts deleted successfully",
        data: result,
    });
});

export const shortsController = {
    createShorts,
    getAllShortss,
    getSingleShorts,
    updateShorts,
    deleteShorts,
};
