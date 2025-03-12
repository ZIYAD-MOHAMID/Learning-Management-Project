import { Request, Response } from "express";
import Course from "../models/courseModel";

export const listCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { category } = req.query;
  try {
    const courses =
      category && category !== "all"
        ? await Course.scan("category").eq(category).exec()
        : await Course.scan().exec();

    res
      .status(200)
      .json({ message: "Course retrieves suxxessfully", data: courses });
  } catch (err) {
    res.status(500).json({ message: "Error retrieves courses", err });
  }
};
