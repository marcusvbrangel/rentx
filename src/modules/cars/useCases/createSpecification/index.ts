import { SpecificationsRepositoryMemory } from "../../repositories/inMemory/SpecificationsRepositoryMemory";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecificationsRepository = new SpecificationsRepositoryMemory();

const createSpecificationUseUseCase = new CreateSpecificationUseCase(
  createSpecificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseUseCase
);

export { createSpecificationController };
