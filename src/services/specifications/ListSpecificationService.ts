import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/interface/ISpecificationsRepository";

class ListSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationService };
