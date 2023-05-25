import { DataSource } from "typeorm";
import Country from "../entities/Country";
import Continent from "../entities/Continent";

export default new DataSource({
  type: "sqlite",
  database: "./demo.sqlite",
  synchronize: true,
  logging: ["query", "error"],
  entities: [Country, Continent],
});
