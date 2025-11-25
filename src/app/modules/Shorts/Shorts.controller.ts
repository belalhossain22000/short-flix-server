// Shorts.controller: Module file for the Shorts.controller functionality.

import httpStatus from "http-status";
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ShortsService } from "./Shorts.service";
import sendResponse from "../../../shared/sendResponse";
import { GetShortsOptions } from "./Shorts.interface";

const addNewShorts = catchAsync(async (req: Request, res: Response) => {
  const result = await ShortsService.addNewShorts(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Shorts Created successfully!",
    data: result,
  });
});

// Controller to handle GET /shorts
export const getAllShorts = catchAsync(async (req: Request, res: Response) => {
  const { page = "1", limit = "10", search = "", tag = "" } = req.query;

  const options: GetShortsOptions = {
    page: Number(page),
    limit: Number(limit),
    search: String(search),
    tag: String(tag),
  };

  const result = ShortsService.getAllShorts(options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shorts retrieved successfully!",
    data: result,
  });
});

//get short by id
const getShortById = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = ShortsService.getShortById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shorts retrieved successfully!",
    data: result,
  });
});

export const ShortsController = {
  addNewShorts,
  getAllShorts,
  getShortById,
};
