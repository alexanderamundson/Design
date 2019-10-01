const table1 = document.getElementsByTagName("table")[0];
const table2 = document.getElementsByTagName("table")[1];
const t1cells = document.querySelectorAll("#table1 td");
const t2cells = document.querySelectorAll("#table2 td");

 
t1cells.forEach(element => { 
    element.addEventListener("click", function(){
        //element.style.border = "5px solid yellow";
        element.classList.add("yellow-border");
    });
});

t2cells.forEach(element => { 
    element.addEventListener("click", function(){
        element.innerHTML = "X";
        element.style.fontSize = "4rem";
    }); 
});

table1.addEventListener("click", function(){
    table1.style.background = "red";
});

table2.addEventListener("mouseover", function(){
    table2.style.background = "silver";
});