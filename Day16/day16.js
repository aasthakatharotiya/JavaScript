//Question-1 ***Sum Of Three Number***

let num1 = document.getElementById("int1").value
let num2 = document.getElementById("int2").value
let num3 = document.getElementById("int3").value

if(num1 === "" && num2 === "" && num3 === "")
{
    document.getElementById("ans1").innerHTML = "Invalid Number"
}
else
{
    function sum_num1(num1)
    {
        function sum_num2(num2)
        {
            function sum_num3(num3)
            {
                document.getElementById("ans1").innerHTML = "Sum Of "+num1+" , "+num2+" and "+num3+" is : "+(+num1 + +num2 + +num3)
            }
            sum_num3(num3)
        }
        sum_num2(num2)
    }
    sum_num1(num1)
}



//Question-2 ***Greeting Message***

let user_name = document.getElementById("int4").value

if(user_name === "")
{
    document.getElementById("ans2").innerHTML = "Invalid Name"
}
else
{
    function message(user_name)
    {
        document.getElementById("ans2").innerHTML = "Hello, "+user_name+"<br>"
        function msg()
        {
            document.getElementById("ans2").innerHTML += "How Are You ???"
        }
        msg()
    }
    message(user_name)
}



//Question-3 ***Product Of Factor***

let fact1 = document.getElementById("int5").value
let fact2 = document.getElementById("int6").value

if(fact1 === "" && fact2 === "")
{
    document.getElementById("ans3").innerHTML = "Invalid Number"
}
else
{
    function factor_1(fact1)
    {
        function factor_2(fact2)
        {
            let product = fact1 * fact2
            document.getElementById("ans3").innerHTML = "Product of "+fact1+" and "+fact2+" is : "+product+"<br>Factor Of &nbsp;"+product+" is : "

            for(let i=1; i<=product; i++)
            {
                if(product%i == 0)
                {
                    document.getElementById("ans3").innerHTML += i+"&nbsp;&nbsp;&nbsp;&nbsp;"
                }
            }
        }
        factor_2(fact2)
    }
    factor_1(fact1)
}



//Question-4 ***Palindrome Or Not***

let str = document.getElementById("int7").value
let empty1 = ""
let empty2 = ""

if(str === "")
{
    document.getElementById("ans4").innerHTML = "Invalid String"
}
else
{
    for(let i=0; str[i]; i++)
    {
        empty1 +=str[i]
    }
    for(let i=str.length-1; i>=0; i--)
    {
        empty2 +=str[i]
    }
    if(empty1 === empty2)
    {
        document.getElementById("ans4").innerHTML = "String is Palindrome"
    }
    else
    {
        document.getElementById("ans4").innerHTML = "String is Not Palindrome"
    }
}