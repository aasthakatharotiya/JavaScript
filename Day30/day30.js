$(document).ready(function(){
    $("#sign_up").submit(function(event){
        event.preventDefault()

        
        //Student Name 

        let first_name = $("#first_name").val()
        let middle_name = $("#middle_name").val()
        let last_name = $("#last_name").val()

        let name_Regex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
        $("#name_err").text("")

        if(first_name === "" || middle_name === "" || last_name === "")
        {
            $("#name_err").text("Please Enter Name !!!")
        }
        else if(!name_Regex.test(first_name) || !name_Regex.test(middle_name) || !name_Regex.test(last_name))
        {
            $("#name_err").text("Enter Valid Name... Like Aastha Hiteshbhai Katharotiya")
        }


        //Gender

        let gender = $("#gender").val()
        $("#gender_err").text("")

        if(gender === "")
        {
            $("#gender_err").text("Please Select Appropriate Gender !!!")
        }


        //Student E-mail

        let email = $("#email").val()
        let email_Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        $("#email_err").text("")

        if(email === "")
        {
            $("#email_err").text("Please Enter Email !!!")
        }
        else if(!email_Regex.test(email))
        {
            $("#email_err").text("Enter Valid Email... Like aastha@gmail.com")
        }


        //Student ID

        let id = $("#id").val()
        let id_Regex = /^[0-9]/
        $("#id_err").text("")

        if(id === "")
        {
            $("#id_err").text("Please Enter Student Id !!!")
        }
        else if(id.length != 4)
        {
            $("#id_err").text("must be at least 4 Digit long")
        }
        else if(!id_Regex.test(id))
        {
            $("#id_err").text("Enter Valid Student ID... Like 7257")
        }


        //List Of Classes

        let classes = $("#classes").val()
        $("#class_err").text("")

        if(classes === "")
        {
            $("#class_err").text("Please Select Appropriate Classes !!!")
        }
    })
})