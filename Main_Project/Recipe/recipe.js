document.getElementById("submit").addEventListener("click", function(){
    let food_input = document.getElementById("food_input").value

    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${food_input}`)
    .then(res => res.json())
    .then(json => 
    {
        console.clear()
        console.log(json)
        displayData(json)
        if (json.meals) 
        {
            let obj = {
                strMealThumb: json.meals[0].strMealThumb,
                strMeal:json.meals[0].strMeal,
                strCategory:json.meals[0].strCategory,
                strArea:json.meals[0].strArea
            }
            jsonData(obj)
        } 
        else 
        {
            console.log('No Meals Found')
        }
    })
    .catch(error => 
    {
        console.log('Error Fetching The Food Data:', error)
    })
})



function displayData(json) {
    let main = document.getElementById("main")
    main.innerHTML = ""

    let div = document.createElement("div")
    div.setAttribute("class", "main_div")

    let div_flex = document.createElement("div")
    div_flex.setAttribute("class", "flex_div")

    let img = document.createElement("img")
    img.setAttribute("class", "img")
    img.src = json.meals[0].strMealThumb

    let text_div = document.createElement("div")
    text_div.setAttribute("class", "text_div")

    let meals_h3 = document.createElement("h3")
    meals_h3.innerHTML = `<b class="color">Meal : </b> ${json.meals[0].strMeal}`
    
    let category_h3 = document.createElement("h3")
    category_h3.innerHTML = `<b class="color">Category : </b> ${json.meals[0].strCategory}`

    let area_h3 = document.createElement("h3")
    area_h3.innerHTML = `<b class="color">Area : </b> ${json.meals[0].strArea}`

    let video = document.createElement("button")
    video.setAttribute("class", "btn_css")
    video.innerHTML = "Watch Video"

    video.addEventListener("click", function() {
        location = json.meals[0].strYoutube
    })

    let edit = document.createElement("button")
    edit.setAttribute("class", "edit_css")
    edit.innerHTML = "Edit"

    let select_flex = document.createElement("div")
    select_flex.setAttribute("class", "select_flex")
    select_flex.style.display = "none"

    let select_h3 = document.createElement("h3")
    select_h3.innerHTML = "Select Any One : "

    let edit_select = document.createElement("select")
    edit_select.setAttribute("class", "select")
    
    let input_flex = document.createElement("div")
    input_flex.setAttribute("class", "input_flex")
    input_flex.style.display = "none"

    let edit_input = document.createElement("input")
    edit_input.setAttribute("class", "edit_input")
    edit_input.placeholder = "Enter Updated Text"

    let update = document.createElement("button")
    update.innerHTML = "Update"
    update.setAttribute("class", "update_btn")

    edit.addEventListener("click", function() {
        select_flex.style.display = "flex"
        select_flex.style.flexDirection = "row"
        select_flex.style.justifyContent = "space-between"
        select_flex.style.alignItems = "center"
        select_flex.style.gap = "20px"

        edit_select.innerHTML = ""

        let option = document.createElement("option")
        option.innerHTML = "Select Appropriate Option"
        option.value = "Select Appropriate Option"

        let img_option = document.createElement("option")
        img_option.innerHTML = "Image"
        img_option.value = "Image"

        let meals_option = document.createElement("option")
        meals_option.innerHTML = "Meals"
        meals_option.value = "Meals"

        let category_option = document.createElement("option")
        category_option.innerHTML = "Category"
        category_option.value = "Category"

        let area_option = document.createElement("option")
        area_option.innerHTML = "Area"
        area_option.value = "Area"

        edit_select.append(option, img_option, meals_option, category_option, area_option)
    })

    edit_select.addEventListener("change", function() {
        input_flex.style.display = "flex"
        input_flex.style.flexDirection = "row"
        input_flex.style.alignItems = "center"
        input_flex.style.gap = "20px"

        switch(edit_select.value) 
        {
            case "Image":
                edit_input.value = img.src
                break
            case "Meals":
                edit_input.value = meals_h3.innerText.replace('Meal : ', '')
                break
            case "Category":
                edit_input.value = category_h3.innerText.replace('Category : ', '')
                break
            case "Area":
                edit_input.value = area_h3.innerText.replace('Area : ', '')
                break
            default:
                edit_input.value = ""
        }
    })

    update.addEventListener("click", function() 
    {
        switch(edit_select.value) 
        {
            case "Image":
                img.src = edit_input.value
                json.meals[0].strMealThumb = edit_input.value
                break
            case "Meals":
                meals_h3.innerHTML = `<b class="color">Meal : </b> ${edit_input.value}`
                json.meals[0].strMeal = edit_input.value
                break
            case "Category":
                category_h3.innerHTML = `<b class="color">Category : </b> ${edit_input.value}`
                json.meals[0].strCategory = edit_input.value
                break
            case "Area":
                area_h3.innerHTML = `<b class="color">Area : </b> ${edit_input.value}`
                json.meals[0].strArea = edit_input.value
                break
        }
        jsonData({
            strMeal: json.meals[0].strMeal,
            strCategory: json.meals[0].strCategory,
            strArea: json.meals[0].strArea,
            strMealThumb: json.meals[0].strMealThumb
        })

        select_flex.style.display = "none"
        input_flex.style.display = "none"
    })

    select_flex.append(select_h3, edit_select)
    input_flex.append(edit_input, update)
    text_div.append(meals_h3, category_h3, area_h3, video, edit, select_flex, input_flex)
    div_flex.append(img, text_div)
    div.append(div_flex)
    main.append(div)
}




function jsonData(meals)
{
    let foods = JSON.parse(localStorage.getItem("Food")) || []

    let exists = foods.some(food => 
        food.strMealThumb === meals.strMealThumb &&
        food.strMeal === meals.strMeal &&
        food.strCategory === meals.strCategory &&
        food.strArea === meals.strArea
    )

    if(!exists) 
    {
        foods.push(meals)
        localStorage.setItem("Food", JSON.stringify(foods))
    }

    // foods.push(meals)
    // localStorage.setItem("Food", JSON.stringify(foods))
}


// document.getElementById("submit").addEventListener("click", function()
// {
//     let foods = JSON.parse(localStorage.getItem("person")) || []
//     let food_input = document.getElementById("food_input").value

//     let obj = {
//         foods : food_input
//     }
//     foods.push(obj)

//     localStorage.setItem("Food", JSON.stringify(foods))
//     displayData(json)
//     document.getElementById("food_input").value = ""
// })
