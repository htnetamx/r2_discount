"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountMapperMongoDB = void 0;
const base_1 = require("../../../../application/base");
const models_1 = require("../models");
class DiscountMapperMongoDB extends base_1.Mapper {
    mapFrom(param) {
        return {
            id: "",
            name: "",
        };
    }
    mapTo(param) {
        return new models_1.Discount({});
    }
}
exports.DiscountMapperMongoDB = DiscountMapperMongoDB;
