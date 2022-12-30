import { checkYear, roundCheck } from "../lib/utils";
import { F1 } from "./data-source";

export class RacesData extends F1 {
  constructor() {
    super();
  }

  async getRacesByYear(year: string) {
    year = checkYear(year);

    return await this.get(`${year}.json`, {
      cacheOptions: { ttl: 60 }
    });
  }

  async getRaceByYearAndRound(year: string, round: number) {
    year = checkYear(year);
    round = roundCheck(round);

    return await this.get(`${year}/${round}.json`, {
      cacheOptions: { ttl: 60 }
    });
  }
}