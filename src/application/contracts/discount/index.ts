import { DiscountBaseModel } from "../../../data/entities";
export interface DiscountRepository {
  getAll(params: any): Promise<Array<DiscountBaseModel | null> | null>;
  getById(id: Number): Promise<DiscountBaseModel | null>;
}
