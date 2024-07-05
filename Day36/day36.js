let size_1 = document.getElementById("map_arr").value
let arr_1 = []

if(size_1 === "")
{
    document.getElementById("map_answer").innerHTML += "Invalid Array Size..."
}
else
{
    for(let i=1; i<=size_1; i++)
    {
        let num_1 = prompt("Enter Number :");
        document.getElementById("map_answer").innerHTML += i+" Number is : "+num_1+"<br>" 
        arr_1.push(num_1)
    }
        
    Array.prototype.fun_map = function(element_1)
    {
        let mapArr = []
        for(let i=0; i<this.length ; i++)
        {
            if(element_1(this[i]))
            {
                mapArr.push((this[i]))
            }
        }
        return mapArr
    }
    let ans_map = arr_1.fun_map((element_1)=>
    {
        return element_1 % 2 != 0
    })
    console.log(ans_map)
    document.getElementById("map_answer").innerHTML += "<br>Odd Number is : " + ans_map
}





let size_2 = document.getElementById("filter_arr").value
let arr_2 = []

if(size_2 === "")
{
    document.getElementById("filter_answer").innerHTML += "Invalid Array Size..."
}
else
{
    for(let i=1; i<=size_2; i++)
    {
        let num_2 = prompt("Enter Number :");
        document.getElementById("filter_answer").innerHTML += i+" Number is : "+num_2+"<br>" 
        arr_2.push(num_2)
    }
        
    Array.prototype.fun_filter = function(element_2)
    {
        let filterArr = []
        for(let i=0; i<this.length ; i++)
        {
            if(element_2(this[i]))
            {
                filterArr.push((this[i]))
            }
        }
        return filterArr
    }
    let ans_filter = arr_2.fun_filter((element_2)=>
    {
        return element_2 % 2 == 0
    })
    console.log(ans_filter)
    document.getElementById("filter_answer").innerHTML += "<br>Even Number is : " + ans_filter
}




let name_vehicle = document.getElementById("name_vehicle").value
let price_vehicle = document.getElementById("price_vehicle").value
let color_vehicle = document.getElementById("color_vehicle").value

if(name_vehicle === "" || price_vehicle === "" || color_vehicle === "")
{
    document.getElementById("vehicle_answer").innerHTML += "Invalid Animal Name, Price And Color..."
}
else
{
    class Automobile
    {
        constructor(name_vehicle, price_vehicle, color_vehicle)
        {
            this.name_vehicle = name_vehicle
            this.price_vehicle = price_vehicle
            this.color_vehicle = color_vehicle
        }
    }
    class Electricvehicle extends Automobile
    {
        name()
        {
            document.getElementById("vehicle_answer").innerHTML += "Vehicle Name is : " + this.name_vehicle 
            console.log("Vehicle Name is : " + this.name_vehicle)
        }
        price()
        {
            document.getElementById("vehicle_answer").innerHTML += "<br>Vehicle Price is : " + this.price_vehicle 
            console.log("Vehicle Price is : " + this.price_vehicle)
        }
        color()
        {
            document.getElementById("vehicle_answer").innerHTML += "<br>Vehicle Color is : " + this.color_vehicle 
            console.log("Vehicle Color is : " + this.color_vehicle)
        }
    }

    let vehicle_obj = new Electricvehicle(name_vehicle, price_vehicle, color_vehicle)
    vehicle_obj.name()
    vehicle_obj.price()
    vehicle_obj.color()
}




let cat = document.getElementById("cat").value
let dog = document.getElementById("dog").value

if(cat === "" || dog === "")
{
    document.getElementById("animal_answer").innerHTML += "Invalid Cat Name And Dog Name..."
}
else
{
    class Animal
    {
        constructor(cat, dog)
        {
            this.cat = cat
            this.dog = dog
        }
    }
    class Cat extends Animal
    {
        eat()
        {
            document.getElementById("animal_answer").innerHTML += "<u>Cat</u><br>"
            document.getElementById("animal_answer").innerHTML += this.cat + " Drinks Milk...<br>"
            console.log(this.cat + " Drinks Milk...")
        }
        sleep()
        {
            document.getElementById("animal_answer").innerHTML += this.cat + "'s Voice is meows meows meows meows...<br>"
            console.log(this.cat + "'s Voice is meows meows meows meows...")
        }
        sound()
        {
            document.getElementById("animal_answer").innerHTML += this.cat + " is Sleeping Now...<br>"
            console.log(this.cat + " is Sleeping Now...")
        }
    }
    class Dog extends Animal
    {
        eat()
        {
            document.getElementById("animal_answer").innerHTML += "<br><u>Dog</u><br>"
            document.getElementById("animal_answer").innerHTML += this.dog + " Drinks Biscuit...<br>"
            console.log(this.dog + "'s Voice is meows meows meows meows...")
        }
        sleep()
        {
            document.getElementById("animal_answer").innerHTML += this.dog + "'s Voice is bow wow bow wow...<br>"
            console.log(this.dog + "'s Voice is bow wow bow wow...")
        }
        sound()
        {
            document.getElementById("animal_answer").innerHTML += this.dog + " is Sleeping Now...<br>"
            console.log(this.dog + " is Sleeping Now...")
        }
    }
    let cat_obj = new Cat(cat, dog)
    cat_obj.eat()
    cat_obj.sleep()
    cat_obj.sound()

    let dog_obj = new Dog(cat, dog)
    dog_obj.eat()
    dog_obj.sleep()
    dog_obj.sound()
}