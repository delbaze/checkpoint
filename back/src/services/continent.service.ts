import { Repository } from "typeorm";
import Continent from "../entities/Continent";
import datasource from "../lib/datasource";

export default class ContinentService {
  db: Repository<Continent>;

  constructor() {
    this.db = datasource.getRepository("Continent");
  }

  async createContinent({ name, code }: any) {
    return await this.db.save({ name, code });
  }

  async listContinents() {
    return await this.db.find();
  }
  async findContinentByCode(code: string) {
    return await this.db.findOneBy({ code });
  }
}
