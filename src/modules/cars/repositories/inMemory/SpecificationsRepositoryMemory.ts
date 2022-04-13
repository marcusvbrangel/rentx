import { Specification } from "../../../../model/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepositoryMemory implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepositoryMemory;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepositoryMemory {
    if (!SpecificationsRepositoryMemory.INSTANCE) {
      SpecificationsRepositoryMemory.INSTANCE = new SpecificationsRepositoryMemory();
    }

    return SpecificationsRepositoryMemory.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
}

export { SpecificationsRepositoryMemory };
