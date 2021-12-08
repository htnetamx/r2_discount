import { DiscountInputModel } from "../../application/domain";

export interface DiscountBaseModel {
  id: string;
  name: string;
}

export class Discount implements DiscountBaseModel {
  public id: string;
  public name: string;

  constructor(data: DiscountInputModel) {
    this.id = data.Id;
    this.name = data.Name;
  }
}
