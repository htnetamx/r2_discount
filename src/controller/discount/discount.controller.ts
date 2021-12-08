import { DiscountInputModel } from "../../application/domain";
import { getByIdUseCase } from "../../application/services/useCases/discount/getById";
import { Token } from "../../token";
import { getAllUseCase } from "../../application/services/useCases/discount/getAll";
import { DiscountBaseModel } from "data/entities/discount";

export class DiscountController {
  async getAll(params: any): Promise<Array<DiscountBaseModel | null> | null> {
    const useCase = new getAllUseCase();
    const data = useCase.execute(params);
    return data;
  }

  async getById(id: any): Promise<DiscountBaseModel | null> {
    const useCase = new getByIdUseCase();
    const data = useCase.execute(id);
    console.log(data);
    return data;
  }
}
