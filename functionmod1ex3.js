//Excercise 3.html

function changeheader1() {
    let itxtheader1 = document.getElementById("txtheader1").value;
    document.getElementById("heading1").innerText = itxtheader1;       
}

function changeheader2() {
    let itxtheader2 = document.getElementById("txtheader2").value;
    document.getElementById("heading2").innerText = itxtheader2;
    document.getElementById("btn_header2").innerText = "Header Changed";   
}

