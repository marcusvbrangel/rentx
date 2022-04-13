import { SpecificationsRepositoryMemory } from "../../repositories/inMemory/SpecificationsRepositoryMemory";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = new SpecificationsRepositoryMemory();

const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
