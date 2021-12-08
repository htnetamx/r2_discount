import { DiscountRepository } from "../../../application/contracts";
import { Credential } from "../../../application/domain/credential";
import { DiscountBaseModel } from "data/entities";
import { DiscountMapperMySQL } from "./mappers";
import { Connection } from "../../../connections/connection";

export class RepositoryMySQL implements DiscountRepository {
  private userMapper: DiscountMapperMySQL;
  constructor() {
    this.userMapper = new DiscountMapperMySQL();
  }

  async getAll(params: any): Promise<Array<DiscountBaseModel | null> | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query(
          "SELECT * from netamx.Discount;"
      );
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let result = data.map<DiscountBaseModel>((r) => {
        return new DiscountMapperMySQL().mapFrom(r as any);
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getById(id: any): Promise<DiscountBaseModel | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: "SELECT * from netamx.Discount where id=" + id + ";",
      });
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let entity = new DiscountMapperMySQL().mapFrom(data[0] as any);
      console.log(entity);
      return entity;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
