// let sec_count = 50
// let stop_birth = setInterval(()=>
// {
//     sec_count++
//     document.getElementById("sec_count").innerHTML = sec_count
//     document.getElementById("hour_count").innerHTML = "11"
//     document.getElementById("min_count").innerHTML = "59"
//     if(sec_count === 60)
//     {
//         clearInterval(stop_birth)
//         document.getElementById("hour_count").innerHTML = "12"
//         document.getElementById("min_count").innerHTML = "00"
//         document.getElementById("sec_count").innerHTML = "00"
//         // document.getElementById("birth").innerHTML = "transition-delay: 2s;"
//         document.getElementById("birth").innerHTML = "display: none;"    
//     }
// },1000)


let sec_count = 50;
let stop_birth = setInterval(() => {
    sec_count++;
    document.getElementById("sec_count").innerHTML = sec_count < 10 ? '0' + sec_count : sec_count;
    document.getElementById("hour_count").innerHTML = "11";
    document.getElementById("min_count").innerHTML = "59";

    if (sec_count === 60) {
        clearInterval(stop_birth);
        document.getElementById("hour_count").innerHTML = "12";
        document.getElementById("min_count").innerHTML = "00";
        document.getElementById("sec_count").innerHTML = "00";

        let birthElement = document.getElementById("birth");
        birthElement.style.transition = "opacity 2s";
        birthElement.style.opacity = 0;

        setTimeout(() => {
            birthElement.style.display = "none";
            document.getElementById("disp_non").style.display = "block"
        }, 2000);
    }
}, 1000);



let index_1 = 0
let stop_1 = setInterval(()=>
{
    index_1++
    document.getElementById("start_1").innerHTML = index_1
    if(index_1 === 35000)
    {
        clearInterval(stop_1)
        document.getElementById("start_1").innerHTML += "+"
    }
},1)


let index_2 = 0
let stop_2 = setInterval(()=>
{
    index_2++
    document.getElementById("start_2").innerHTML = index_2
    if(index_2 === 22)
    {
        clearInterval(stop_2)
        document.getElementById("start_2").innerHTML += "+"
    }
},100)


let index_3 = 0
let stop_3 = setInterval(()=>
{
    index_3++
    document.getElementById("start_3").innerHTML = index_3
    if(index_3 === 8)
    {
        clearInterval(stop_3)
        document.getElementById("start_3").innerHTML += "+"
    }
},100)


let index_4 = 0
let stop_4 = setInterval(()=>
{
    index_4++
    document.getElementById("start_4").innerHTML = index_4
    if(index_4 === 50)
    {
        clearInterval(stop_4)
        document.getElementById("start_4").innerHTML += "+"
    }
},100)


let index_5 = 0
let stop_5 = setInterval(()=>
{
    index_5++
    document.getElementById("start_5").innerHTML = index_5
    if(index_5 === 1500)
    {
        clearInterval(stop_5)
        document.getElementById("start_5").innerHTML += "+"
    }
},1)