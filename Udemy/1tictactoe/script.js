const table1 = document.getElementsByTagName("table")[0];
const cells = document.querySelectorAll("td");
 
cells.forEach(element => { 
    element.addEventListener("click", function(){
        element.style.border = "5px solid yellow";
    });
    
});

table1.addEventListener("click", function(){
    table1.style.background = "red";
});