import { SpecificationsRepository } from "../../repositories/inMemory/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecificationsRepository = new SpecificationsRepository();

const createSpecificationUseUseCase = new CreateSpecificationUseCase(
  createSpecificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseUseCase
);

export { createSpecificationController };
