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
        constructor(color, price, car_name)
        {
            this.color = color
            this.price = price
            this.car_name = car_name
        }
    }
    let obj_car = new Car(color, price, car_name)
    document.getElementById("car_class").innerHTML += "Your Car Color is : " + obj_car.color
    document.getElementById("car_class").innerHTML += "<br>Your Car Price is : " + obj_car.price
    document.getElementById("car_class").innerHTML += "<br>Your Car Name is : " + obj_car.car_name
    console.log(obj_car)
}




//Square Class 

let side = document.getElementById("side").value

if(side === "")
{
    document.getElementById("square_class").innerHTML += "Invalid Side"
}
else
{
    class Square
    {
        constructor(side)
        {
            this.side = side
            console.log(side * side)
        }
    }
    let obj_square = new Square(side)
    document.getElementById("square_class").innerHTML += "Your Area Of Square is : " + obj_square.side * obj_square.side
}





//Rectangle Class 

let length = document.getElementById("length").value
let width = document.getElementById("width").value

if(length === "" || width === "")
{
    document.getElementById("rect_class").innerHTML += "Invalid Side"
}
else
{
    class Rectangle
    {
        constructor(length, width)
        {
            this.length = length
            this.width = width
            console.log(length * width)
        }
    }
    let obj_rect = new Rectangle(length, width)
    document.getElementById("rect_class").innerHTML += "Area Of Rectangle is : " + obj_rect.length * obj_rect.width
    
}



//Person Details

let person_name = document.getElementById("person_name").value
let age = document.getElementById("age").value
let score = document.getElementById("score").value

if(person_name === "" || age === "" || score === "")
{
    document.getElementById("person_class").innerHTML += "Invalid Name, Age or Score"
}
else
{
    class Person
    {
        constructor(person_name, age, score)
        {
            this.person_name = person_name
            this.age = age
            this.score = score
        }
    }
    let obj_person = new Person(person_name, age, score)
    document.getElementById("person_class").innerHTML += "Your Name is : " + obj_person.person_name
    document.getElementById("person_class").innerHTML += "<br>Your Age is : " + obj_person.age
    document.getElementById("person_class").innerHTML += "<br>Your Score is : " + obj_person.score
    console.log(obj_person)   
}




//User Details

let user_name = document.getElementById("user_name").value
let psw = document.getElementById("psw").value

if(user_name === "" || psw === "")
{
    document.getElementById("user_class").innerHTML += "Invalid Name, Age or Score"
}
else
{
    class User
    {
        constructor(user_name, psw)
        {
            this.user_name = user_name
            this.psw = psw
        }
    }
    let obj_user = new User(user_name, psw)
    document.getElementById("user_class").innerHTML += "UserName is : " + obj_user.user_name
    document.getElementById("user_class").innerHTML += "<br>Password is : " + obj_user.psw
    console.log(obj_user)   
}