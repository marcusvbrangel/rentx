import { ISpecificationsRepository } from "../../repositories/interface/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationsAlreadyExists = this.specificationsRepository.findByName(
      name
    );

    if (specificationsAlreadyExists) {
      throw new Error("Specification Already Exists!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
