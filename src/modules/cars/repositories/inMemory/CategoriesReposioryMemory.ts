import { Category } from "../../../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesReposioryMemory implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesReposioryMemory;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesReposioryMemory {
    if (!CategoriesReposioryMemory.INSTANCE) {
      CategoriesReposioryMemory.INSTANCE = new CategoriesReposioryMemory();
    }

    return CategoriesReposioryMemory.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesReposioryMemory };
