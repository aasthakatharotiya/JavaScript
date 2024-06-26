document.getElementById("sign_up").onsubmit = function(event)
{
    event.preventDefault()
    let name = document.getElementById("name").value
    let psw = document.getElementById("psw").value
    let cpw = document.getElementById("cpw").value
    let date = document.getElementById("date").value
    let hobby = document.getElementById("hobby").value
    let email = document.getElementById("email").value
    let no = document.getElementById("no").value
    let gender = document.getElementById("gender").value

    document.getElementById("name_err").innerHTML = ""
    document.getElementById("psw_err").innerHTML = ""
    document.getElementById("cpw_err").innerHTML = ""
    document.getElementById("date_err").innerHTML = ""
    document.getElementById("hobby_err").innerHTML = ""
    document.getElementById("email_err").innerHTML = ""
    document.getElementById("no_err").innerHTML = ""
    document.getElementById("gender_err").innerHTML = ""


    try
    {
        if(name === "")
            throw new Error("Please Enter Name")
        if(name.length < 8)
            throw new Error("Name must be at least 8 characters long")
        if(!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name))
            throw new Error("Please Enter Only String in Your Name")
        
    }
    catch(error)
    {
        document.getElementById("name_err").innerHTML = error.message
    }


    try 
    {
        if(psw === "")
            throw new Error("Please Enter Password")
        if(psw.length < 8)
            throw new Error("Password must be at least 8 characters long")
        if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(psw))
            throw new Error("Must be Required any Special Symbol or Digit in Your Password")
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
        if(!/\d{1,2}\/\d{1,2}\/\d{2,4}/.test(date))
            throw new Error("Date Was Invalid...")
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
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
            throw new Error("Enter Valid E-mail...")
    }
    catch(error)
    {
        document.getElementById("email_err").innerHTML = error.message
    }


    try 
    {
        if(no === "")
            throw new Error("Please Enter Phone Number")
        if(no.length !== 10)
            throw new Error("Phone Number must be at least 9 characters long")
        if(!/^[0-9]/.test(no))
            throw new Error("Enter Only Number Like 1 to 10")
    } 
    catch(error) 
    {
        document.getElementById("no_err").innerHTML = error.message;
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