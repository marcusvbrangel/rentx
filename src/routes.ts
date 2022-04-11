import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export const createCourse = (req: Request, res: Response) => {

  CreateCourseService.execute({
    name: "Nodejs",
    educator: "Nemarvin",
    duration: 10
  });

  return res.send();

}
