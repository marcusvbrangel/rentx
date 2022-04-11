import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export const createCourse = (
  request: Request,
  response: Response
): Response => {
  CreateCourseService.execute({
    name: "Nodejs",
    educator: "Nemarvin",
    duration: 10,
  });

  return response.send();
};
