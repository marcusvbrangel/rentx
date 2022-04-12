import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

// https://github.com/prettier/eslint-plugin-prettier#options
// eslint-disable-next-line prettier/prettier
export const createCourse = (request: Request, response: Response): Response => {
  CreateCourseService.execute({
    name: "Nodejs",
    educator: "Nemarvin",
    duration: 10,
  });

  return response.send();
};
