{
  // typescript type guard

  type StringOrNumber = string | number;

  const add = (
    number1: StringOrNumber,
    number2: StringOrNumber
  ): StringOrNumber => {
    if (typeof number1 === "number" && typeof number2 === "number") {
      return number1 + number2;
    } else {
      number1 = number1.toString();
      number2 = number2.toString();

      return number1 + number2;
    }
  };

  const result = add("2", 3);
  console.log(result);

  //typescript guard in guard

  type NormalUser = {
    name: string,
  }

  type AdminUser = {
    name: string,
    role: "admin",
  }
    
  const user = (user: NormalUser | AdminUser) =>{
    if("role" in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`);
    }
    else{
        console.log(`My name is ${user.name}`);
    }
  }

  const normalUser:NormalUser = {
    name: "normal user",
  }

  const adminUser:AdminUser = {
    name: "admin user",
    role: "admin",
  }

  user(normalUser);
  user(adminUser);

  //
}
