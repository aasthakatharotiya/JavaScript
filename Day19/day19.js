//Question-1 ***Add Number Using Loop and push()***

let start = document.getElementById("int1").value 
let end = document.getElementById("int2").value
let arr_1 = []

if(start === "" && end === "")
{
    document.getElementById("ans1").innerHTML = "Invalid Starting Point And Ending Point"
}
else
{
    for(let i=start; i<=end; i++)
    {
        arr_1.push(i)
       
    }
    console.log(arr_1)
    document.getElementById("ans1").innerHTML = "Your Array Element Between "+start+" and "+end+" is : "+arr_1
}



//Question-2 ***Remove Number Using Loop and pop()***

let arr_2 = [1,2,3,4,5]

document.getElementById("ans2").innerHTML = "All Element Of an Arrary is : "+arr_2+"<br>"
for(let i = arr_2.length - 1; i >= 0 ; i--)
{
    arr_2.pop(i)
}
console.log(arr_2)
document.getElementById("ans2").innerHTML += "All Element Remove From an Arrary"+arr_2



//Question-3 ***Remove Color Using Loop and shift()***

let arr_3 = ["Red","Green","Blue"]

document.getElementById("ans3").innerHTML = "All Colors Of an Arrary is : "+arr_3+"<br>"
for(let i = arr_3.length - 1; i >= 0 ; i--)
{
    arr_3.shift(i)
}
console.log(arr_3)
document.getElementById("ans3").innerHTML += "All Color Remove From an Arrary"+arr_3



//Question-4 ***Add Animal Using unshift()***

let arr_4 = ["Lion","Tiger","Elephant"]

document.getElementById("ans4").innerHTML = "All Animal Of an Arrary is : "+arr_4
arr_4.unshift("Giraffe")
arr_4.unshift("Zebra")
console.log(arr_4)
document.getElementById("ans4").innerHTML += "<br>After Adding Giraffe and Zebra is : "+arr_4



//Question-5 ***Remove Character Using Loop and pop()***

let arr_5 = ["a","b","c","d","e"]

document.getElementById("ans5").innerHTML = "All Characters Of an Arrary is : "+arr_5+"<br>"
for(let i = arr_5.length - 1; i >= 0 ; i--)
{
    arr_5.pop(i)
}
console.log(arr_5)
document.getElementById("ans5").innerHTML += "All Characters Remove From an Arrary"+arr_5



//Question-6 ***Reverse The Array Elements***

let arr_6 = [1,2,3,4,5]

document.getElementById("ans6").innerHTML = "All Element Of an Arrary is : "+arr_6+"<br>"
arr_6.reverse()
console.log(arr_6)
document.getElementById("ans6").innerHTML += "Reverse an Arrary is : "+arr_6


//Question-7 ***Short The Array Elements***

let arr_7 = [11,2,93,8,55]

document.getElementById("ans7").innerHTML = "All Element Of an Arrary is : "+arr_7+"<br>"
arr_7.sort((a, b) => a - b)
console.log(arr_7)
document.getElementById("ans7").innerHTML += "Sorted an Arrary is : "+arr_7


//Question-8 ***Print Today's Date***

let arr_8 = new Date()
console.log(arr_8)
document.getElementById("ans8").innerHTML += "Today's Date is : "+arr_8


//Question-9 ***Concate Two String***

let str_1 = document.getElementById("int3").value 
let str_2 = document.getElementById("int4").value
let arr_9 = str_1.concat(" ",str_2)

if(str_1 === "" && str_2 === "")
{
    document.getElementById("ans9").innerHTML = "Invalid String"
}
else
{
    console.log(arr_9)
    document.getElementById("ans9").innerHTML += "Concat Of String is : "+arr_9
}


//Question-10 ***Convert String To Uppercase***

let upper = document.getElementById("int5").value 
let arr_10 = upper.toUpperCase()

if(upper === "")
{
    document.getElementById("ans10").innerHTML = "Invalid String"
}
else
{
    console.log(arr_10)
    document.getElementById("ans10").innerHTML += "Convert String into UpperCase is : "+arr_10
}


//Question-11 ***Convert String To Lowercase***

let lower = document.getElementById("int6").value 
let arr_11 = upper.toLowerCase()

if(lower === "")
{
    document.getElementById("ans11").innerHTML = "Invalid String"
}
else
{
    console.log(arr_11)
    document.getElementById("ans11").innerHTML += "Convert String into LowerCase is : "+arr_11
}



//Question-12 ***Find Vowel in String Using charAt()***

let str = document.getElementById("int7").value 

if(str === "")
{
    document.getElementById("ans12").innerHTML = "Invalid String"
}
else
{
    for(let i=0; str[i]; i++)
    {
        if(str[i] == "a" || str[i] == "A" ||
           str[i] == "e" || str[i] == "E" ||
           str[i] == "i" || str[i] == "I" ||
           str[i] == "o" || str[i] == "O" ||
           str[i] == "u" || str[i] == "U")
        {
            console.log(str[i]+" is Vowel")
            document.getElementById("ans12").innerHTML += str[i]+" is Vowel...<br>"
            str.charAt(str[i])
        }
        else
        {
            console.log(str[i])
            document.getElementById("ans12").innerHTML += str[i]+"<br>"
        }
    
    }
}


//Question-13 ***Add 3 Elements Using unshift()***

let arr_13 = ["Rose","Marigold","Jasmine"]

document.getElementById("ans13").innerHTML = "All Flower Of an Arrary is : "+arr_13
arr_13.unshift("Lily")
arr_13.unshift("Tulip")
arr_13.unshift("Sunflower")
console.log(arr_13)
document.getElementById("ans13").innerHTML += "<br>After Adding Lily, Tulip and Sunflower is : "+arr_13



//Question-14 ***Remove 2 Elements Using shift()***

let arr_14 = ["Apple","Pineapple","Strawberry","Mango","Orange"]

document.getElementById("ans14").innerHTML = "All Fruit Of an Arrary is : "+arr_14+"<br>"
arr_14.shift()
arr_14.shift()
console.log(arr_14)
document.getElementById("ans14").innerHTML += "Two Fruit Remove From an Arrary is : "+arr_14



//Question-15 ***Remove 2 Index Element and Add 3 Element Using splice()***

let arr_15 = ["Vivo","OnePlus","iPhone","Samsung","Oppo"]
document.getElementById("ans15").innerHTML = "All Phone Name Of an Arrary is : "+arr_15+"<br>"
arr_15.splice(2,1,"MI","Realme","BlackBerray")

console.log(arr_15)
document.getElementById("ans15").innerHTML += "After Remove 2 Index Element and Add 3 Element From an Arrary is : "+arr_15
