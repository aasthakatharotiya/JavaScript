// Question-1 ***Double All Number Using map()***

let size_1 = document.getElementById("int1").value
let arr_1 = []
for(let i=1; i<=size_1; i++)
{
    let num_1 = prompt("Enter Number :");
    document.getElementById("ans1").innerHTML += i+" Number is : "+num_1+"<br>" 
    arr_1.push(num_1)
}
document.getElementById("ans1").innerHTML += "<br>Double Of All Elements is : "

let fun_1 = arr_1.map((element_1) =>
{
    return element_1 * 2
})
document.getElementById("ans1").innerHTML += fun_1



// Question-2 ***Print Age >18 Using filter()***

let size_2 = document.getElementById("int2").value
let arr_2 = []
for(let i=1; i<=size_2; i++)
{
    let num_2 = prompt("Enter Age :");
    document.getElementById("ans2").innerHTML += i+" Age is : "+num_2+"<br>" 
    arr_2.push(num_2)
}
document.getElementById("ans2").innerHTML += "<br>Below Age People Are Eligible For Vote : "
let fun_2 = arr_2.filter((element_2) =>
{
    return element_2 > 18
})
document.getElementById("ans2").innerHTML += fun_2



// Question-3 ***Find Index Of Any Fruit Using indexOf()***

let size_3 = document.getElementById("int3").value
let arr_3 = []
for(let i=1; i<=size_3; i++)
{
    let num_3 = prompt("Enter Fruit Name :");
    document.getElementById("ans3").innerHTML += i+" Fruit is : "+num_3+"<br>"  
    arr_3.push(num_3)
}
let fruit = prompt("Enter Fruit Name From Above Name :")
document.getElementById("ans3").innerHTML += "<br>"+fruit+" Index is : "+arr_3.indexOf(fruit)



// Question-4 ***Check Color is Exists in Array Using includes()***

let size_4 = document.getElementById("int4").value
let arr_4 = []
for(let i=1; i<=size_4; i++)
{
    let num_4 = prompt("Enter Color Name :");
    document.getElementById("ans4").innerHTML += i+" Color is : "+num_4+"<br>" 
    arr_4.push(num_4)
}
let color = prompt("Enter Color Name From Above Name :")
document.getElementById("ans4").innerHTML += "<br>"+color+" is Exists Or Not : "+arr_4.includes(color)



// Question-5 ***Check all Score >=60 Using every()***

let size_5 = document.getElementById("int5").value
let arr_5 = []
for(let i=1; i<=size_5; i++)
{
    let num_5 = prompt("Enter Student Score :");
    document.getElementById("ans5").innerHTML += i+" Score is : "+num_5+"<br>" 
    arr_5.push(num_5)
}
function check(element_5)
{
    return element_5 >= 60
}
document.getElementById("ans5").innerHTML += "All Score is >=60 Or Not : "+arr_5.every(check)



// Question-6 ***Check all Temperature >=100 Using some()***

let size_6 = document.getElementById("int6").value
let arr_6 = []
for(let i=1; i<=size_6; i++)
{
    let num_6 = prompt("Enter Temperature :");
    document.getElementById("ans6").innerHTML += i+" Temperature is : "+num_6+"<br>" 
    arr_6.push(num_6)
}
function check(element_6)
{
    return element_6 >= 100
}
document.getElementById("ans6").innerHTML += "Any One Temperature is >=100 Or Not : "+arr_6.some(check)



// Question-7 ***add 1 Of Each Element Using map()***

let size_7 = document.getElementById("int7").value
let arr_7 = []
for(let i=1; i<=size_7; i++)
{
    let num_7 = prompt("Enter Any Number :");
    document.getElementById("ans7").innerHTML += i+" Number is : "+num_7+"<br>" 
    arr_7.push(num_7)
}
let fun_7 = arr_7.map((element_7)=>
{
    return +element_7 + 1
})
document.getElementById("ans7").innerHTML += "After Add 1 Of Each Element : "+fun_7



// Question-8 ***Even Number Using filter()***

let size_8 = document.getElementById("int8").value
let arr_8 = []
for(let i=1; i<=size_8; i++)
{
    let num_8 = prompt("Enter Any Number :");
    document.getElementById("ans8").innerHTML += i+" Number is : "+num_8+"<br>" 
    arr_8.push(num_8)
}
let fun_8 = arr_8.filter((element_8)=>
{
    return element_8 % 2 == 0
})
document.getElementById("ans8").innerHTML += "Even Number in Array is : "+fun_8



// Question-9 ***Odd Number Using filter()***

let size_9 = document.getElementById("int9").value
let arr_9 = []
for(let i=1; i<=size_9; i++)
{
    let num_9 = prompt("Enter Any Number :");
    document.getElementById("ans9").innerHTML += i+" Number is : "+num_9+"<br>" 
    arr_9.push(num_9)
}
let fun_9 = arr_9.filter((element_9)=>
{
    return element_9 % 2 != 0
})
document.getElementById("ans9").innerHTML += "Odd Number in Array is : "+fun_9
