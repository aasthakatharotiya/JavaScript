// Question-1 ***Multiply Each Element With 3 Using forEach()***

let size_1 = document.getElementById("int1").value
let arr_1 = []
for(let i=1; i<=size_1; i++)
{
    let num_1 = prompt("Enter Number :");
    document.getElementById("ans1").innerHTML += i+" Number is : "+num_1+"<br>" 
    arr_1.push(num_1)
}
document.getElementById("ans1").innerHTML += "<br>"

arr_1.forEach((element_1) =>
{
    document.getElementById("ans1").innerHTML += element_1+" is Multiply by 3 is : "+element_1 * 3+"<br>" 
})




// Question-2 ***Sum Of All Number Using reduce()***

let size_2 = document.getElementById("int2").value
let arr_2 = []
for(let i=1; i<=size_2; i++)
{
    let num_2 = prompt("Enter Number :");
    document.getElementById("ans2").innerHTML += i+" Number is : "+num_2+"<br>" 
    arr_2.push(num_2)
}

let fun_2 = arr_2.reduce((acc_2, curr_2) => 
{
    return +acc_2 + +curr_2
},0)
document.getElementById("ans2").innerHTML += "<br>Sum Of All Number is : "+fun_2



// Question-3 ***Product Of All Number Using filter() and reduce()***

let size_3 = document.getElementById("int3").value
let arr_3 = []
for(let i=1; i<=size_3; i++)
{
    let num_3 = prompt("Enter Number :");
    document.getElementById("ans3").innerHTML += i+" Number is : "+num_3+"<br>" 
    arr_3.push(num_3)
}

let fun_3 = arr_3.filter((element_3) => 
{
    return element_3
}).reduce((acc_3, curr_3) => 
{
    return +acc_3 * +curr_3
},1)
document.getElementById("ans3").innerHTML += "<br>Product Of All Number is : "+fun_3



// Question-4 ***Sum Of All Even Number Using filter() and reduce()***

let size_4 = document.getElementById("int4").value
let arr_4 = []
for(let i=1; i<=size_4; i++)
{
    let num_4 = prompt("Enter Number :");
    document.getElementById("ans4").innerHTML += i+" Number is : "+num_4+"<br>" 
    arr_4.push(num_4)
}

let fun_4 = arr_4.filter((element_4) => 
{
    return element_4 % 2 == 0
}).reduce((acc_4, curr_4) => 
{
    return +acc_4 + +curr_4
},0)
document.getElementById("ans4").innerHTML += "<br>Sum Of All Even Number is : "+fun_4



// Question-5 ***Find Length Of All Element Greater Than 4 Using map() and filter()***

let size_5 = document.getElementById("int5").value
let arr_5 = []
for(let i=1; i<=size_5; i++)
{
    let num_5 = prompt("Enter Fruit Name :");
    document.getElementById("ans5").innerHTML += i+" Fruit is : "+num_5+"<br>" 
    arr_5.push(num_5)
}
document.getElementById("ans5").innerHTML += "<br>Length Of Fruit Name Greater Than 4"+"<br>" 

let fun_5 = arr_5.filter((element_5) => 
{
    return element_5.length > 4
}).map((element_5) => 
{
    document.getElementById("ans5").innerHTML += element_5+" Length is : "+element_5.length+"<br>" 
})



// Question-6 ***Check Element Present in Array Using includes()***

let size_6 = document.getElementById("int6").value
let arr_6 = []
for(let i=1; i<=size_6; i++)
{
    let num_6 = prompt("Enter Any String :");
    document.getElementById("ans6").innerHTML += i+" String is : "+num_6+"<br>" 
    arr_6.push(num_6)
}
let que_6 = prompt("Enter Any Element From Above String :");
document.getElementById("ans6").innerHTML += que_6+" is Present in Array Or Not is : "+arr_6.includes(que_6)




// Question-7 ***Square Of Even Number Using filter() and map()***

let size_7 = document.getElementById("int7").value
let arr_7 = []
for(let i=1; i<=size_7; i++)
{
    let num_7 = prompt("Enter Number :");
    document.getElementById("ans7").innerHTML += i+" Number is : "+num_7+"<br>" 
    arr_7.push(num_7)
}
document.getElementById("ans7").innerHTML += "<br>Square Of Even Number<br>"
let fun_7 = arr_7.filter((element_7) => 
{
    return element_7 % 2 == 0
}).map((element_7) => 
{
    document.getElementById("ans7").innerHTML += "Square Of "+element_7+" is : "+element_7*element_7+"<br>" 
})


// Question-8 ***String less than 5 is Convert into UpperCase***

let size_8 = document.getElementById("int8").value
let arr_8 = []
for(let i=1; i<=size_8; i++)
{
    let num_8 = prompt("Enter Any String :");
    document.getElementById("ans8").innerHTML += i+" String is : "+num_8+"<br>" 
    arr_8.push(num_8)
}
document.getElementById("ans8").innerHTML += "<br>String less than 5 into UpperCase <br>"
function processArray()
{
    let fun_8 = arr_8.filter((element_8) => 
    {
        return element_8.length < 5
    }).map((element_8) => 
    {
        document.getElementById("ans8").innerHTML += element_8.toUpperCase()+"<br>" 
    })
}    
processArray()