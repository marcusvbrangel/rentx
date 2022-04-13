import { Router } from "express";

import { SpecificationsRepository } from "../repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../services/specifications/CreateSpecificationService";
import { ListSpecificationService } from "../services/specifications/ListSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

specificationsRoutes.get("/", (request, response) => {
  const listSpecificationService = new ListSpecificationService(
    specificationsRepository
  );

  const specifications = listSpecificationService.execute();
  return response.json(specifications);
});

export { specificationsRoutes };
