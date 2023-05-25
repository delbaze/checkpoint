import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Field, InputType, ObjectType } from "type-graphql";
import Country from "./Country";

@ObjectType()
@Entity()
export default class Continent {
  @Field()
  @PrimaryColumn()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field(() => [Country])
  @OneToMany(() => Country, (country) => country.continent)
  countries: Country[];
}

@InputType()
export class CreateContinent {
  @Field()
  name: string;

  @Field()
  code: string;
}

@InputType()
export class FilterContinent {
  @Field({nullable: true})
  code: string;

  @Field({nullable: true})
  name: string;
}
