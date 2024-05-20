    //  task-1

let start = document.getElementById("in1").value
let end = document.getElementById("in2").value

if (start === "" && end === "") {
    document.getElementById("ans1").innerHTML = "INVALID"
}
else{
    for(let i=start; i<=end; i++){
        if (i%3 === 0 && i%5 === 0) {
            document.getElementById("ans1").innerHTML += i+ " FIZZBUZZ"
        }
        else if (i%3 === 0) {
            document.getElementById("ans1").innerHTML += i+ " FIZZ"
        }
        else if (i%5 === 0) {
            document.getElementById("ans1").innerHTML += i+ " BUZZ"
        }
        else{
            document.getElementById("ans1").innerHTML += i
        }
        document.getElementById("ans1").innerHTML += " <br>"
    }
}

    //  task-2

let num = document.getElementById("in3").value
let digit = 0
if (num === "") {
    document.getElementById("ans2").innerHTML="INVALID"
}
else{
    for(let i=0; num[i];i++){
        digit += num[i] - '0'
    }
    document.getElementById("ans2").innerHTML= " SUM OF ALL DIGIT :- " + digit
}
