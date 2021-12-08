import { Express, Request, Response, NextFunction } from "express";
import { DiscountController } from "../../../controller/discount";

export class getByIdRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await new DiscountController().getById(req.params.id);
      console.log("Result");
      console.log(result);
      res.status(200).send(result);
    } catch (e) {}
  };

  public configureEndPoints(baseUrl: string) {
    this.server.get(`${baseUrl}discount/:id`, this.getById);
  }
}
