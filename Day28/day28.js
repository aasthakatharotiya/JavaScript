document.getElementById("sign_up").onsubmit = function(event)
{
    event.preventDefault()
    let name = document.getElementById("name").value
    let psw = document.getElementById("psw").value
    let cpw = document.getElementById("cpw").value
    let date = document.getElementById("date").value
    let hobby = document.getElementById("hobby").value
    let email = document.getElementById("email").value
    let gender = document.getElementById("gender").value

    document.getElementById("name_err").innerHTML = ""
    document.getElementById("psw_err").innerHTML = ""
    document.getElementById("cpw_err").innerHTML = ""
    document.getElementById("date_err").innerHTML = ""
    document.getElementById("hobby_err").innerHTML = ""
    document.getElementById("email_err").innerHTML = ""
    document.getElementById("gender_err").innerHTML = ""


    try
    {
        if(name === "")
            throw new Error("Please Enter Name")
    }
    catch(error)
    {
        document.getElementById("name_err").innerHTML = error.message
    }


    try 
    {
        if (psw === "")
        {
            throw new Error("Please Enter Password")
        }
        if (psw.length < 8)
        {
            throw new Error("Password must be at least 8 characters long")
        }
    } 
    catch(error) 
    {
        document.getElementById("psw_err").innerHTML = error.message;
    }


    try
    {
        if(psw !== cpw)
            throw new Error("Password Will Not Match")
    }
    catch(error)
    {
        document.getElementById("cpw_err").innerHTML = error.message
    }


    try
    {
        if(date === "")
            throw new Error("Enter Today's Date")
    }
    catch(error)
    {
        document.getElementById("date_err").innerHTML = error.message
    }


    try
    {
        if(date === "")
            throw new Error("Enter Today's Date")
    }
    catch(error)
    {
        document.getElementById("date_err").innerHTML = error.message
    }


    try
    {
        if(hobby === "")
            throw new Error("Enter Your Hobby")
    }
    catch(error)
    {
        document.getElementById("hobby_err").innerHTML = error.message
    }


    try
    {
        if(email === "")
            throw new Error("Enter Your E-mail")
    }
    catch(error)
    {
        document.getElementById("email_err").innerHTML = error.message
    }


    try
    {
        if(gender === "")
            throw new Error("Select Your Gender")
    }
    catch(error)
    {
        document.getElementById("gender_err").innerHTML = error.message
    }

}