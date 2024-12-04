{
    // oop class 

    class Animal {
        // name: string;
        // species: string;
        // sound: string;

        constructor(public name:string, public species:string, public sound: string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound(){
            console.log(`The animal is ${this.name} and its sound is ${this.sound}`)
        }
    }

    const dog = new Animal("Jarman Shifard", "Dog", "Ghew ghew");
    const dogName = dog.name
    dog.makeSound()
    console.log(dogName);

    // 
}