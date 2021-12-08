import { Mapper } from "../../../../application/base";
import { DiscountBaseModel } from "../../../entities";
import { DiscountMySQL } from "../models";

export class DiscountMapperMySQL extends Mapper<
  DiscountMySQL,
  DiscountBaseModel
> {
  mapFrom(param: DiscountMySQL): DiscountBaseModel {
    return {
      id: param.Id.toString(),
      name: param.Name.toString(),
    };
  }
  mapTo(param: DiscountBaseModel): DiscountMySQL {
    return {
      Id: param.id.toString(),
      Name: param.name.toString()
    };
  }
}
