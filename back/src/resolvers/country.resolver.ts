import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Country, { CreateCountry, FilterCountries } from "../entities/Country";
import CountryService from "../services/country.service";

@Resolver()
export default class CountryResolver {
  @Query(() => [Country])
  async countries(@Arg("filter") filter: FilterCountries) {
    console.log("filter")
    return await new CountryService().listCountries(filter);
  }

  @Query(() => Country)
  async findCountry(@Arg("code") code: string) {
    return await new CountryService().findCountryByCode(code);
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg("createCountry") { code, emoji, name, continentCode }: CreateCountry
  ) {
    return await new CountryService().createCountry({
      code,
      emoji,
      name,
      continentCode,
    });
  }
}
