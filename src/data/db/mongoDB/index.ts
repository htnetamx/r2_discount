import { DiscountRepository } from "../../../application/contracts";
import { Credential } from "../../../application/domain";
import { DiscountBaseModel } from "../../entities";
import { DiscountMapperMongoDB } from "./mappers";

export class RepositoryMongoDB implements DiscountRepository {
  private static instance: RepositoryMongoDB = new RepositoryMongoDB();
  private userMapper: DiscountMapperMongoDB;

  constructor() {
    this.userMapper = new DiscountMapperMongoDB();
  }

  async getAll(): Promise<Array<DiscountBaseModel | null> | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }

  async getById(params: any): Promise<DiscountBaseModel | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }
}
