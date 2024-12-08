{
    // Access modifiers public, private, protected

    // main difference between private and protected is private cannot be accessed out of the class but protected is accessible in child classes

    class BankAccount{
        public readonly id: number;
        name: string;
        private balance: number;
        protected interestRate: number;

        constructor(id: number, name: string, balance: number, interestRate: number){
            this.id = id;
            this.name = name;
            this.balance = balance;
            this.interestRate = interestRate;
        }

        public deposit(amount: number){
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.balance}`);
        }

        public getBalance(){
            return this.balance;
        }
    }


    class StudentAccount extends BankAccount{
        constructor(id: number, name: string, balance: number, interestRate: number){
            super(id, name, balance, interestRate);
        }

        public interestRate(){
            this.interestRate = this.interestRate
        }
    }

    const myAccount = new BankAccount(2222, "Arfan Ahmed", 3333, 22)

    myAccount.deposit(3333)
    console.log(myAccount.getBalance())
    // 
}