import { Repository } from "typeorm";
import Country from "../entities/Country";
import datasource from "../lib/datasource";
import ContinentService from "./continent.service";
import { GraphQLError } from "graphql";
export default class CountryService {
  db: Repository<Country>;
  constructor() {
    this.db = datasource.getRepository("Country");
  }

  async createCountry({ emoji, name, code, continentCode }: any) {
    const continent = await new ContinentService().findContinentByCode(
      continentCode
    );
    if (!continent) {
      throw new GraphQLError("Le continent n'existe pas");
    }

    return await this.db.save({
      emoji,
      name,
      code,
      continent,
    });
  }

  async listCountries(filter: any) {
    console.log("FILTER======+>", filter);
    return await this.db.find({ where: { ...filter } });
    // return await this.db.find({where: {continent: {code: "AF"}}});
  }

  async findCountryByCode(code: string) {
    return await this.db.findOneBy({ code });
  }
}
