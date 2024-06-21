function clk_submit()
{
    let task = document.getElementById("task").value 
    let priority = document.getElementById("priority").value 
    let favourite = document.getElementById("favourite").value 

    let New_Row = "<tr><td>" + task + "</td><td>" + priority + "</td><td>" + favourite + "</td></tr>"

    document.querySelector('#create_tr tbody').innerHTML += New_Row;

    document.getElementById('taskForm').reset();
}