const add_table=document.getElementById("add_table_line");
const table=document.getElementById("table_body");

add_table.addEventListener("click",function(){
    const tr = document.createElement("tr");
    for (let i = 0; i < 6; i++) {
        const td = document.createElement("td");
        td.contentEditable = "true";
        tr.appendChild(td);
    }
    table.appendChild(tr);
});


const add_table2=document.getElementById("add_table_line2");
const table2=document.getElementById("table_body2");

add_table2.addEventListener("click",function(){
    const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.contentEditable = "true";
        const td = document.createElement("td");
        td.contentEditable = "true";
        tr.appendChild(th);
        tr.appendChild(td);
    table2.appendChild(tr);
});