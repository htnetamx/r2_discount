import { Mapper } from "../../../../application/base";
import { DiscountBaseModel } from "../../../entities";
import { Discount, DiscountMongoDB } from "../models";

export class DiscountMapperMongoDB extends Mapper<
  DiscountMongoDB,
  DiscountBaseModel
> {
  mapFrom(param: DiscountMongoDB): DiscountBaseModel {
    return {
      id: "",
      name: "",
    };
  }
  mapTo(param: DiscountBaseModel): DiscountMongoDB {
    return new Discount({});
  }
}
