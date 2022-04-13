import { SpecificationsRepositoryMemory } from "../../repositories/inMemory/SpecificationsRepositoryMemory";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecificationsRepository = SpecificationsRepositoryMemory.getInstance();

const createSpecificationUseUseCase = new CreateSpecificationUseCase(
  createSpecificationsRepository
);

const createSpecificationsController = new CreateSpecificationController(
  createSpecificationUseUseCase
);

export { createSpecificationsController };
