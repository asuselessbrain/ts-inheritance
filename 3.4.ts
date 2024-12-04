{
    // guard using instance

    class Animal{
        name: string;
        species: string;

        constructor(name: string, species: string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log('I am talking')
        }
    }

    class Dog extends Animal{

        constructor(name: string, species: string){
            super(name, species);
        }
        bark(){
            console.log('Woof woof')
        }
    }

    class Cat extends Animal{

        constructor(name: string, species: string){
            super(name, species);
        }

        meow(){
            console.log('Meow meow')
        }
    }

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const idCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }
    const result = (animal: Animal) =>{

        if(idCat(animal)){
            animal.meow();
        }

        else if(isDog(animal)){
            animal.bark();
        }
    }

    const dog = new Dog("Jarman Shifard", "Dog")
    const cat = new Cat("Arfan", "cat")

    result(cat);



    // 
}