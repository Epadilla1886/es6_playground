import {Person, SuperPerson} from "./person";

const hawkeye = new Person('hawkeye');
const captainAmerica = new SuperPerson('steve', 'American AF');

hawkeye.greet();

captainAmerica.greet();

captainAmerica.saySuperpower();