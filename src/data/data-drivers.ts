import { F1 } from "./data-source";

export class DriversData extends F1 {
  constructor() {
    super();
  }

  async getDrivers(size: number = -1, page: number = 1) {
    if (size === -1) {
      return await this.get("drivers.json?limit=1000", {
        cacheOptions: { ttl: 60 },
      });
    }

    const offset = (page - 1) * size;
    const limit = size;

    return await this.get(`drivers.json?limit=${limit}&offset=${offset}`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
