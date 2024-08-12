document.getElementById("submit").addEventListener("click", function(){
    let product_input = document.getElementById("product_input").value;

    if(product_input === "")
    {
        document.getElementById("main").innerHTML = "Invalid Input. Please select a valid option.";
    }
    else
    {
        location.href = product_input;
    }
});