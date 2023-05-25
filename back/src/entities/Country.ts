import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Field, InputType, ObjectType } from "type-graphql";
import Continent, { FilterContinent } from "./Continent";

@ObjectType()
@Entity()
export default class Country {
  @PrimaryColumn()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji: string;

  @Field(() => Continent)
  @ManyToOne(() => Continent, { eager: true })
  @JoinColumn()
  continent: Continent;
}

@InputType()
export class CreateCountry {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;

  @Field()
  continentCode: string;
}

@InputType()
export class FilterCountries {
  @Field({ nullable: true })
  continent?: FilterContinent;
}
