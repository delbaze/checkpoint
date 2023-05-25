import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Continent, { CreateContinent } from "../entities/Continent";
import ContinentService from "../services/continent.service";
@Resolver()
export default class ContinentResolver {
  @Query(() => [Continent])
  async continents() {
    return await new ContinentService().listContinents();
  }

  @Query(() => Continent)
  async findContinentByCode(@Arg("code") code: string) {
    return await new ContinentService().findContinentByCode(code);
  }

  @Mutation(() => Continent)
  async createContinent(
    @Arg("createContinent") { code, name }: CreateContinent
  ) {
    return await new ContinentService().createContinent({ name, code });
  }
}
