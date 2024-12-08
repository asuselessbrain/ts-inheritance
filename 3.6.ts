{
    // getter and setter functions

    class BankAccount{
        public readonly id: number;
        name: string;
        private _balance: number;
        protected interestRate: number;

        constructor(id: number, name: string, _balance: number, interestRate: number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
            this.interestRate = interestRate;
        }

        set deposit(amount: number){
            this._balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this._balance}`);
        }

        get balance(){
            return this._balance;
        }
    }

    const myAccount = new BankAccount(2222, "Arfan Ahmed", 3333, 22)

    // myAccount.deposit(3333)

    myAccount.deposit = 3333;
    // const balance = myAccount.balance
    console.log(myAccount.balance);

    // 
}