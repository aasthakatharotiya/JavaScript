//Question-1 ***Product Of Digit***

let product_num = document.getElementById("int1").value
let digit = 1
let product = function()
{
    if(product_num === "")
    {
        document.getElementById("ans1").innerHTML = "Invalid Number"
    }
    else
    {
        for(let i=0; product_num[i]; i++)
        {
            digit *= product_num[i]
        }
        document.getElementById("ans1").innerHTML = "Product Of Digit is : "+digit
    }
}
product()


//Question-2 ***Sum Of Three Number***

let first_num = document.getElementById("int2").value
let sec_num = document.getElementById("int3").value
let third_num = document.getElementById("int4").value

function sum()
{
    if(first_num === "" && sec_num === "" && third_num === "")
    {
        document.getElementById("ans2").innerHTML = "Invalid Number"
    }
    else
    {
        let total = +first_num + +sec_num + +third_num
        document.getElementById("ans2").innerHTML = "Sum Of Three Number is : "+total
    }
}
sum()


//Question-3 ***Factorial Of Number***

let fact_num = document.getElementById("int5").value
let fact = 1
factorial=()=>
{
    if(fact_num === "")
    {
        document.getElementById("ans3").innerHTML = "Invalid Number"
    }
    else
    {
        for(let i=1; i<=fact_num; i++)
        {
            fact *= i
        }
        document.getElementById("ans3").innerHTML = "Factorial Of &nbsp;"+fact_num+" is : "+fact
    }
}
factorial()


//Question-4 ***Double Of Number***

let double_num = document.getElementById("int6").value

double=()=>
{
    if(double_num === "")
    {
        document.getElementById("ans4").innerHTML = "Invalid Number"
    }
    else
    {
        document.getElementById("ans4").innerHTML = "Double Of Number is : "+(double_num * 2)
    }
}
double()


//Question-5 ***Reverse Of Digit***

let rev_num = document.getElementById("int7").value

reverse=()=>
{
    if(rev_num === "")
    {
        document.getElementById("ans5").innerHTML = "Invalid Number"
    }
    else
    {
        document.getElementById("msg1").innerHTML = "Reverse Of Digit is : &nbsp;"
        for(let i=rev_num.length-1; i>=0; i--)
        {
            document.getElementById("ans5").innerHTML += rev_num[i]
        }  
    }
}
reverse()


//Question-6 ***Odd Number***

let start_num = document.getElementById("int8").value
let end_num = document.getElementById("int9").value

let odd = function()
{
    if(start_num === "" && end_num === "")
    {
        document.getElementById("ans6").innerHTML = "Invalid Number"
    }
    else
    {
        document.getElementById("msg2").innerHTML = "Odd Number is : &nbsp;"
        for(let i=start_num; i<=end_num; i++)
        {
            if(i%2 !== 0)
            {
                document.getElementById("ans6").innerHTML += i+"&nbsp;&nbsp;&nbsp;"
            }
        }  
    }
}
odd()


//Question-7 ***Your Screen Mode***

let mode_val = document.getElementById("int10").value

mode=()=>
{
    if(mode_val === "")
    {
        document.getElementById("ans7").innerHTML = "Invalid Number"
    }
    else
    {
        if(mode_val === "true")
        {
            document.getElementById("ans7").innerHTML = "DarkMode is On"
        }
        else
        {
            document.getElementById("ans7").innerHTML = "DarkMode is Off"
        }
    }
}
mode()