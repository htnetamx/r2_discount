import { DiscountBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ITokenGenerator } from "../../../contracts/token";
import { Credential } from "../../../domain";
import { DiscountService } from "../../entities/discount";

export class getByIdUseCase implements UseCase<any, DiscountBaseModel | null> {
  private _DiscountService: DiscountService;

  constructor() {
    this._DiscountService = new DiscountService();
  }

  public async execute(params: any): Promise<DiscountBaseModel | null> {
    const result = await this._DiscountService.getById(parseInt(params));
    console.log("useCase: ", result);
    return result;
  }
}
