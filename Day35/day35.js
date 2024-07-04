let size_1 = document.getElementById("map_arr").value
let arr_1 = []

if(size_1 === "")
{
    document.getElementById("map_answer").innerHTML += "Invalid Array Size..."
}
else
{
    for(let i=1; i<=size_1; i++)
    {
        let num_1 = prompt("Enter Number :");
        document.getElementById("map_answer").innerHTML += i+" Number is : "+num_1+"<br>" 
        arr_1.push(num_1)
    }
        
    Array.prototype.fun_map = function(element_1)
    {
        let mapArr = []
        for(let i=0; i<this.length ; i++)
        {
            mapArr.push(element_1(this[i]))
        }
        return mapArr
    }
    let ans_map = arr_1.fun_map((element_1)=>
    {
        return element_1 * 2
    })
    console.log(ans_map)
    document.getElementById("map_answer").innerHTML += "<br>Multiplication Of All Number With 2 is : " + ans_map
}






let size_2 = document.getElementById("filter_arr").value
let arr_2 = []

if(size_2 === "")
{
    document.getElementById("filter_answer").innerHTML += "Invalid Array Size..."
}
else
{
    for(let i=1; i<=size_2; i++)
    {
        let num_2 = prompt("Enter Number :");
        document.getElementById("filter_answer").innerHTML += i+" Number is : "+num_2+"<br>" 
        arr_2.push(num_2)
    }
        
    Array.prototype.fun_filter = function(element_2)
    {
        let filterArr = []
        for(let i=0; i<this.length ; i++)
        {
            if(element_2(this[i]))
            {
                filterArr.push((this[i]))
            }
        }
        return filterArr
    }
    let ans_filter = arr_2.fun_filter((element_2)=>
    {
        return element_2 % 2 == 0
    })
    console.log(ans_filter)
    document.getElementById("filter_answer").innerHTML += "<br>Even Number is : " + ans_filter
}