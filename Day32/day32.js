//Person Class 

let age = document.getElementById("age").value
let person_name = document.getElementById("person_name").value
let occupation = document.getElementById("occupation").value

if(age === "" || person_name === "" || occupation === "")
{
    document.getElementById("person_class").innerHTML += "Enter Valid Age, Name Or Occupation"
}
else
{
    class Person
    {
        getAge(age)
        {
            return age
        }
        getName(person_name)
        {
            return person_name
        }
        getOccupation(occupation)
        {
            return occupation
        }
    }
    let person_obj = new Person()
    document.getElementById("person_class").innerHTML += "Your Age is :" + person_obj.getAge(age)
    document.getElementById("person_class").innerHTML += "<br>Your Name is :" + person_obj.getName(person_name)
    document.getElementById("person_class").innerHTML += "<br>Your Occupation is :" + person_obj.getOccupation(occupation)
}






//Car Class 

let color = document.getElementById("color").value
let price = document.getElementById("price").value
let car_name = document.getElementById("car_name").value

if(color === "" || price === "" || car_name === "")
{
    document.getElementById("car_class").innerHTML += "Enter Valid Car Color, Price Or Name"
}
else
{
    class Car
    {
        getColor(color)
        {
            return color
        }
        getPrice(price)
        {
            return price
        }
        getCarName(car_name)
        {
            return car_name
        }
    }
    let car_obj = new Car()
    document.getElementById("car_class").innerHTML += "Car Color is :" + car_obj.getColor(color)
    document.getElementById("car_class").innerHTML += "<br>Car Price is :" + car_obj.getPrice(price)
    document.getElementById("car_class").innerHTML += "<br>Car Name is :" + car_obj.getCarName(car_name)
}





//Calculator Class 

let num_1 = document.getElementById("num_1").value
let num_2 = document.getElementById("num_2").value
let choice = document.getElementById("choice").value

if(num_1 === "" || num_2 === "" || choice === "")
{
    document.getElementById("calculator_class").innerHTML = "Enter Valid Number and Select Any Option"
}
else
{
    if(choice === 'Addition')
    {
        class Calculator
        {
            Sum(num_1, num_2)
            {
                let plus = +num_1 + +num_2
                return plus
            }
        }
        let calculator_obj = new Calculator()
        document.getElementById("calculator_class").innerHTML = "Addition is :" + calculator_obj.Sum(num_1, num_2)
    }
    else if(choice === 'Subtraction')
    {
        class Calculator
        {
            Sub(num_1, num_2)
            {
                let minus = +num_1 - +num_2
                return minus
            }
        }
        let calculator_obj = new Calculator()
        document.getElementById("calculator_class").innerHTML = "Subtraction is :" + calculator_obj.Sub(num_1, num_2)
    }
    else if(choice === 'Multiplication')
    {
        class Calculator
        {
            Mul(num_1, num_2)
            {
                let multi = +num_1 * +num_2
                return multi
            }
        }
        let calculator_obj = new Calculator()
        document.getElementById("calculator_class").innerHTML = "Multiplication is :" + calculator_obj.Mul(num_1, num_2)
    }
    else if(choice === 'Division')
    {
        class Calculator
        {
            Div(num_1, num_2)
            {
                let divi = +num_1 / +num_2
                return divi
            }
        }
        let calculator_obj = new Calculator()
        document.getElementById("calculator_class").innerHTML = "Division is :" + calculator_obj.Div(num_1, num_2)
    }
    else
    {
        class Calculator
        {
            Mod(num_1, num_2)
            {
                let module = +num_1 % +num_2
                return module
            }
        }
        let calculator_obj = new Calculator()
        document.getElementById("calculator_class").innerHTML = "Modules is :" + calculator_obj.Mod(num_1, num_2)
    }
}