import { Specification } from "../../../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationsUseCase };
