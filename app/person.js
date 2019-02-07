import {addToDom} from "./helpers";

export class Person {
    constructor(name){
        this.name = name;
    }


    speak(text){
        addToDom(`${this.name} Says: ${text}`);
    }

    greet(){
        this.speak(`Hello, I am ${this.name}`);
    }
}

export class SuperPerson extends Person {
        constructor(name, superpower){
            super(name);

            this.superpower = superpower;
        }
    saySuperpower(){
        this.speak(`My superpower is being ${this.superpower}`);
    }
}