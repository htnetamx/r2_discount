"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountMapperMySQL = void 0;
const base_1 = require("../../../../application/base");
class DiscountMapperMySQL extends base_1.Mapper {
    mapFrom(param) {
        return {
            id: param.Id.toString(),
            name: param.Name.toString(),
        };
    }
    mapTo(param) {
        return {
            Id: param.id.toString(),
            Name: param.name.toString()
        };
    }
}
exports.DiscountMapperMySQL = DiscountMapperMySQL;
