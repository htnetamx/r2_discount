import { DiscountBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ITokenGenerator } from "../../../contracts/token";
import { Credential } from "../../../domain";
import { DiscountService } from "../../entities/discount";

export class getAllUseCase
  implements UseCase<any, Array<DiscountBaseModel | null> | null>
{
  private _DiscountService: DiscountService;

  constructor() {
    this._DiscountService = new DiscountService();
  }

  public async execute(
    params: any
  ): Promise<Array<DiscountBaseModel | null> | null> {
    const result = await this._DiscountService.getAll(params);
    return result;
  }
}
