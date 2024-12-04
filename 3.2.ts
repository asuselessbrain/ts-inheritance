{
    // inheritance

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {   
            this.name = name;
            this.age = age;
            this.address = address;
        }

        timeOfSleep(time: number){
            console.log(`${this.name} will be sleep ${time} hours`);
        }
    }

    class Student extends Person {


        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);     // Call the constructor of the parent class (Person)
            this.designation = designation;
        }

        timeOfSleep(time: number){
            console.log(`${this.name} will sleep ${time} hours`);
        }

        teachSubject(subject: string){
            console.log(`${this.name} is teaching ${subject}`);
        }
    
    }

    const student = new Student('Arfan Ahmed', 22, "Dumki")
    student.timeOfSleep(8)

    const teacher  = new Teacher('Mahbubur Rahman', 40, "Barisal", "Assistant Professor")
    teacher.timeOfSleep(7)
    teacher.teachSubject("CSIT")
    
    // 
}