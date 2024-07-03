let dog_name = document.getElementById("dog_name").value
let cat_name = document.getElementById("cat_name").value
let bird_name = document.getElementById("bird_name").value

class Animals
{
    constructor(name)
    {
        this.name = name
    }
}
class Dog extends Animals
{
    sound()
    {
        document.getElementById("animal_sound").innerHTML += this.name + " Sound is bow wow bow wow...<br>"
        console.log(this.name + " Sound is bow wow bow wow...")
    }
}
class Cat extends Animals
{
    sound()
    {
        document.getElementById("animal_sound").innerHTML += this.name + " Sound is meows meows meows meows...<br>"
        console.log(this.name + " Sound is meows meows meows meows...")
    }
}
class Bird extends Animals
{
    sound()
    {
        document.getElementById("animal_sound").innerHTML += this.name + " Sound is Chi Chi Chi Chi..."
        console.log(this.name + " Sound is Chi Chi Chi Chi...")
    }
}

let dog_sound = new Dog(dog_name)
dog_sound.sound()
let cat_sound = new Cat(cat_name)
cat_sound.sound()
let bird_sound = new Bird(bird_name)
bird_sound.sound()



let food_type = document.getElementById("food_type").value

class Food
{
    constructor(cook)
    {
        this.cook = cook
    }
}
class Pizza extends Food
{
    recipes()
    {
        document.getElementById("food_recipe").innerHTML += "<u>" + this.cook + " Recipes</u>"
        document.getElementById("food_recipe").innerHTML += "<br><br>1. Start with a crust..."
        document.getElementById("food_recipe").innerHTML += "<br>2. Add a sauce..."
        document.getElementById("food_recipe").innerHTML += "<br>3. Add some veggies..."
        document.getElementById("food_recipe").innerHTML += "<br>4. Try some fruit on your pizza ..."
        document.getElementById("food_recipe").innerHTML += "<br>5. Add some protein..."
        document.getElementById("food_recipe").innerHTML += "<br>6. Add cheese..."
        document.getElementById("food_recipe").innerHTML += "<br>7. Bake your creation in a hot oven (450 F or above)..."
        document.getElementById("food_recipe").innerHTML += "<br>8. Whole-wheat Pizza Crust..."
        console.log(this.cook + " Recipes is : ")
        console.log("1. Start with a crust...")
        console.log("2. Add a sauce...")
        console.log("3. Add some veggies...")
        console.log("4. Try some fruit on your pizza ...")
        console.log("5. Add some protein...")
        console.log("6. Add cheese...")
        console.log("7. Bake your creation in a hot oven (450 F or above)...")
        console.log("8. Whole-wheat Pizza Crust...")
    }
}

class Sushi extends Food
{
    recipes()
    {
        document.getElementById("food_recipe").innerHTML += "<u>" + this.cook + " Recipes</u>"
        document.getElementById("food_recipe").innerHTML += "<br><br>1. Sushi rice..."
        document.getElementById("food_recipe").innerHTML += "<br>2. Rice Wine Powder or Vinegar..."
        document.getElementById("food_recipe").innerHTML += "<br>3. bamboo mat..."
        document.getElementById("food_recipe").innerHTML += "<br>4. plastic wrap..."
        document.getElementById("food_recipe").innerHTML += "<br>5. nori (seaweed sheets)..."
        document.getElementById("food_recipe").innerHTML += "<br>6. soy sauce..."
        document.getElementById("food_recipe").innerHTML += "<br>7. toasted sesame seeds..."
        document.getElementById("food_recipe").innerHTML += "<br>8. Sriracha chili sauce..."
        console.log(this.cook + " Recipes is : ")
        console.log("1. Sushi rice...")
        console.log("2. Rice Wine Powder or Vinegar...")
        console.log("3. bamboo mat...")
        console.log("4. plastic wrap...")
        console.log("5. nori (seaweed sheets)...")
        console.log("6. soy sauce...")
        console.log("7. toasted sesame seeds...")
        console.log("8. Sriracha chili sauce...")
    }
}

class Burger extends Food
{
    recipes()
    {
        document.getElementById("food_recipe").innerHTML += "<u>" + this.cook + " Recipes</u>"
        document.getElementById("food_recipe").innerHTML += "<br><br>1. Preheat an outdoor grill for high heat and lightly oil grate..."
        document.getElementById("food_recipe").innerHTML += "<br>2. Whisk together egg, salt, and pepper in a medium bowl..."
        document.getElementById("food_recipe").innerHTML += "<br>3. Add ground beef and bread crumbs and mix with your hands or a fork until well blended..."
        document.getElementById("food_recipe").innerHTML += "<br>4. Form into four 3/4-inch-thick patties..."
        document.getElementById("food_recipe").innerHTML += "<br>5. Place patties on the preheated gril..."
        document.getElementById("food_recipe").innerHTML += "<br>6. Serve hot and enjoy!!!"
        console.log(this.cook + " Recipes is : ")
        console.log("1. Preheat an outdoor grill for high heat and lightly oil grate...")
        console.log("2. Whisk together egg, salt, and pepper in a medium bowl...")
        console.log("3. Add ground beef and bread crumbs and mix with your hands or a fork until well blended...")
        console.log("4. Form into four 3/4-inch-thick patties...")
        console.log("5. Place patties on the preheated gril...")
        console.log("6. Serve hot and enjoy!!!")
    }
}


if(food_type === 'Pizza')
{
    let pizza_recipe = new Pizza(food_type)
    pizza_recipe.recipes()
}
else if(food_type === 'Sushi')
{
    let sushi_recipe = new Sushi(food_type)
    sushi_recipe.recipes()
}
else if(food_type === 'Burger')
{
    let burger_recipe = new Burger(food_type)
    burger_recipe.recipes()
}
else
{
    document.getElementById("food_recipe").innerHTML += "Select Appropriate Recipe..."
    console.log("Select Appropriate Recipe...")
}