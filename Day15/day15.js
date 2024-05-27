//Question-1 ***Sum Of Two Number***

let first_sum = document.getElementById("int1").value
let sec_sum = document.getElementById("int2").value

if(first_sum === "" && sec_sum === "")
{
    document.getElementById("ans1").innerHTML = "Invalid Number"
}
else
{
    sum=(first_sum, sec_sum)=>
    {
        let total = +first_sum + +sec_sum
        return total
    } 
    document.getElementById("ans1").innerHTML = "Sum Of "+first_sum+" and "+sec_sum+" is : "+sum(first_sum, sec_sum)
}


//Question-2 ***Area Of Rectangle***

let length = document.getElementById("int3").value
let width = document.getElementById("int4").value

if(length === "" && width === "")
{
    document.getElementById("ans2").innerHTML = "Invalid Length Or Width"
}
else
{
    rectangle=(length, width)=>
    {
        let rec_area = +length * +width
        return rec_area
    } 
    document.getElementById("ans2").innerHTML = "Area Of Rectangle is : "+rectangle(length, width)
}


//Question-3 ***Concate Two String***

let first_str = document.getElementById("int5").value
let sec_str = document.getElementById("int6").value

if(first_str === "" && sec_str === "")
{
    document.getElementById("ans3").innerHTML = "Invalid String"
}
else
{
    concate=(first_str, sec_str)=>
    {
        let merge_str = first_str + "&nbsp;&nbsp;" + sec_str
        return merge_str
    } 
    document.getElementById("ans3").innerHTML = "Concatenate Of String is : "+concate(first_str, sec_str)
}



//Question-4 ***Area Of Square***

let side = document.getElementById("int7").value

if(side === "")
{
    document.getElementById("ans4").innerHTML = "Invalid Side"
}
else
{
    square=(side)=>
    {
        let area_square = +side * +side
        return area_square
    } 
    document.getElementById("ans4").innerHTML = "Area Of Square is : "+square(side)
}


//Question-5 ***Length Of String***

let str = document.getElementById("int8").value

if(str === "")
{
    document.getElementById("ans5").innerHTML = "Invalid String"
}
else
{
    length_str=(str)=>
    {
        return str.length
    } 
    document.getElementById("ans5").innerHTML = "Length Of String is : "+length_str(str)
}



//Question-6 ***Start And End String With "A"***

let str_a = document.getElementById("int9").value

if(str_a === "")
{
    document.getElementById("ans6").innerHTML = "Invalid String"
}
else
{
    start_end=(str_a)=>
    {
        if(str_a[0] === "A" && str_a[str_a.length-1] === "A")
        {
            return "Our String Will Start With 'A' and Also Our String is End With 'A'"
        }
        else if(str_a[0] === "a" && str_a[str_a.length-1] === "A")
        {
            return "Our String Will Start With 'A' and Also Our String is End With 'A'"
        }
        else if(str_a[0] === "A" && str_a[str_a.length-1] === "a")
        {
            return "Our String Will Start With 'A' and Also Our String is End With 'A'"
        }
        else if(str_a[0] === "a" && str_a[str_a.length-1] === "a")
        {
            return "Our String Will Start With 'A' and Also Our String is End With 'A'"
        }
        else if(str_a[0] === "A" || str_a[0] === "a")
        {
            return "Our String is Start From 'A'"
        }
        else if(str_a[str_a.length-1] === "A" || str_a[str_a.length-1] === "a")
        {
            return "Our String is End With 'A'"
        }
        else
        {
            return "Our String is Not Start From 'A' And Not End With 'A'"
        }

    } 
    document.getElementById("ans6").innerHTML = start_end(str_a)
}



//Question-7 ***Celsius To Fahrenheit***

let celsius = document.getElementById("int10").value

if(celsius === "")
{
    document.getElementById("ans7").innerHTML = "Invalid Celsius"
}
else
{
    fahrenheit=(celsius)=>
    {
        return (celsius * 9/5) + 32
    } 
    document.getElementById("ans7").innerHTML = "Celsius To Fahrenheit is : "+fahrenheit(celsius)+" Degrees..."
}
