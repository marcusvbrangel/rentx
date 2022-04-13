import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesReposiory";
import { CreateCategoryService } from "../services/categories/CreateCategoryService";
import { ListCategoryService } from "../services/categories/ListCategoryService";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const listCategoryService = new ListCategoryService(categoriesRepository);

  const categories = listCategoryService.execute();
  return response.json(categories);
});

export { categoriesRoutes };
