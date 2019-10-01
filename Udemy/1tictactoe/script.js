const table1 = document.getElementsByTagName("table")[0];

const cells = document.querySelectorAll("td");
 
cells.forEach(element => { 
    element.addEventListener("click", function(){
        element.style.border = "6px solid yellow";
        console.log("------");
    });
    
});

table1.addEventListener("click", function(){
    table1.style.background = "red";
});