//Question-1 *** Count Digit Of Number ***

let num1 = document.getElementById("int1").value
let i1=0, count=0
if(num1 === "")
{
    document.getElementById("ans1").innerHTML = "Invalid Number"
}
else
{
    do
    {
        count++
        i1++
    }while(num1[i1])
    document.getElementById("ans1").innerHTML = "Your Number is <u>"+count+"</u> Digits..."
}



//Question-2 *** Factorial Number ***

let num2 = document.getElementById("int2").value
let fact=1, i2=1

if(num2 === "")
{
    document.getElementById("ans2").innerHTML = "Invalid Number"
}
else
{
    while(num2 >= i2)
    {
        fact *= num2
        num2--
    }
    document.getElementById("ans2").innerHTML = "Factorial is : "+fact
}



//Question-3 *** Reverse Number ***

let num3 = document.getElementById("int3").value
let rem, rev = 0

if(num3 === "")
{
    document.getElementById("ans3").innerHTML = "Invalid Number"
}
else
{
    while(num3 != 0)
    {
        rem = num3 % 10
        rev = rev * 10 + rem
        num3 = Math.floor(num3 / 10)
    }
    document.getElementById("ans3").innerHTML = "Reverse Number is : "+rev
}



//Question-4 *** Power Of Number ***

let base = document.getElementById("int4").value
let expo = document.getElementById("int5").value
let result = 1, i4 = 1

if(base === "" && expo === "")
{
    document.getElementById("ans4").innerHTML = "Invalid Number"
}
else
{
    do
    {
        result *= base
        i4++
    }while(i4 <= expo)

    document.getElementById("ans4").innerHTML = "Power is : "+result
}


//Question-5 *** Count Even Number ***

let start1 = document.getElementById("int6").value
let end1 = document.getElementById("int7").value
let count1 = 0
let i5 = start1

if(start1 === "" && end1 === "")
{
    document.getElementById("ans5").innerHTML = "Invalid Number"
}
else
{
    do
    {
        if(i5 % 2 == 0)
        {
            count1++
            document.getElementById("even").innerHTML += i5+"&nbsp;&nbsp;&nbsp;&nbsp;"
        }
        i5++
    }while(i5 <= end1)
    document.getElementById("ans5").innerHTML = "Even Number Between "+start1+" to "+end1+" is : "+count1
}



//Question-6 *** Odd Even Number ***

let start2 = document.getElementById("int8").value
let end2 = document.getElementById("int9").value
let count2 = 0
let i6 = start2

if(start2 === "" && end2 === "")
{
    document.getElementById("ans6").innerHTML = "Invalid Number"
}
else
{
    do
    {
        if(i6 % 2 != 0)
        {
            count2++
            document.getElementById("odd").innerHTML += i6+"&nbsp;&nbsp;&nbsp;&nbsp;"
        }
        i6++
    }while(i6 <= end2)
    document.getElementById("ans6").innerHTML = "Odd Number Between "+start2+" to "+end2+" is : "+count2
}
