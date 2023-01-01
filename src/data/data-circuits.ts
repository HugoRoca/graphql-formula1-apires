import { paginationParams } from "../lib/utils";
import { F1 } from "./data-source";

export class CircuitsData extends F1 {
  constructor() {
    super();
  }

  async getCircuits(size: number = -1, page: number = 1) {
    if (size === -1) {
      return await this.get("circuits.json?limit=1000", {
        cacheOptions: { ttl: 60 },
      });
    }

    return await this.get(`circuits.json?${paginationParams(page, size)}`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getCircuit(id: string) {
    return await this.get(`circuits/${id}.json`, { cacheOptions: { ttl: 60 } });
  }
}