import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  const specifications = listCategoriesController.handle(request, response);
  return response.json(specifications);
});

export { specificationsRoutes };
