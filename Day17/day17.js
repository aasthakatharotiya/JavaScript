//Question-1 ***Count Vowel in The String***

let str = document.getElementById("int1").value
let count = 0

if(str === "")
{
    document.getElementById("ans1").innerHTML = "Invalid String"
}
else
{
    function charCount(str)
    {
        for(let i=0; str[i]; i++)
        {
            if(str[i] === 'a' || str[i] === "A" ||
               str[i] === 'e' || str[i] === "E" ||
               str[i] === 'i' || str[i] === "I" ||
               str[i] === 'o' || str[i] === "O" ||
               str[i] === 'u' || str[i] === "U" )
            {
                count++
            }
            document.getElementById("ans1").innerHTML = "Vowel in String is : "+count
        }
    }
    charCount(str)
}



//Question-2 ***Simple Interest***

let principal = document.getElementById("int2").value
let rate = document.getElementById("int3").value
let time = document.getElementById("int4").value

if(principal === "" && rate === "" && time === "")
{
    document.getElementById("ans2").innerHTML = "Invalid Principal, Rate Or Time..."
}
else
{
    function calculatePrincipal(principal)
    {
        function calculateRate(rate)
        {
            function calculateTime(time)
            {
                SI = (principal * rate * time)/100
                document.getElementById("ans2").innerHTML = "Simple Interest is : $ "+SI
            }
            calculateTime(time)
        }
        calculateRate(rate)
    }
    calculatePrincipal(principal)
}



//Question-3 ***Convert km to miles***

km_to_m = document.getElementById("int5").value

if(km_to_m === "")
{
    document.getElementById("ans3").innerHTML = "Invalid Kilometer..."
}
else
{
    function km(){
        let conv_fac = 0.621371

        let miles = km_to_m * conv_fac

        document.getElementById("ans3").innerHTML = km_to_m+" Kilometers[km] into Miles is : "+miles.toFixed(2)
    }
    km()
}



//Question-4 ***Number Palindrome Or Not***

let num = document.getElementById("int6").value
let empty1 = ""
let empty2 = ""

if(num === "")
{
    document.getElementById("ans4").innerHTML = "Invalid Number"
}
else
{
    function isPalindrome(num)
    {
        for(let i=0; num[i]; i++)
        {
            empty1 += num[i]
        }
        for(let i=num.length-1; i>=0; i--)
        {
            empty2 += num[i]
        }
        if(empty1 === empty2)
        {
            document.getElementById("ans4").innerHTML = "Number is Palindrome"
        }
        else
        {
            document.getElementById("ans4").innerHTML = "Number is Not Palindrome"
        }
    }
    isPalindrome(num)  
}



//Extra ***Count Character in The String***

let extra_str = document.getElementById("int7").value
let count_ex = 0
if(extra_str === "")
{
    document.getElementById("ans5").innerHTML = "Invalid String"
}
else
{
    function countCharacters(extra_str)
    {
        let charCount = {};

        for (let i = 0; i < extra_str.length; i++)
        {
            let char = extra_str[i];
            if (charCount[char])
            {
                charCount[char]++;
            } 
            else{
                charCount[char] = 1;
            }
        }
        return charCount
    }
    let result = countCharacters(extra_str);
    for(let char in result)
    {
        document.getElementById("ans5").innerHTML += char+":"+result[char]+"<br>";
    }
}
