
const students = [
    { name: "Amit Sharma", age: 19, course: "B.Tech" },
    { name: "Priya Verma", age: 22, course: "MCA" },
    { name: "Rohit Gupta", age: 20, course: "BCA" },
    { name: "Neha Singh", age: 23, course: "B.Sc" },
    { name: "Karan Patel", age: 18, course: "B.Com" }
   
];

let isLightGray = true; // Background toggle tracker

// Function to render table
function Table(data) {
    const tabledata = document.getElementById("table");
    tabledata.innerHTML = ""; 

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    ["Name", "Age", "Course"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

   
    data.forEach(student => {
        const row = document.createElement("tr");
        Object.values(student).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tabledata.appendChild(table);
}

Table(students);

document.getElementById("bgcolor").addEventListener("click", () => {
    document.body.style.backgroundColor = isLightGray ? "#e0f7fa" : "#f8f9fa";
    isLightGray = !isLightGray;
});

document.getElementById("hide").addEventListener("click", () => {
    const tablehd = document.getElementById("table");
    tablehd.style.display = (tablehd.style.display === "none") ? "block" : "none";
});

document.getElementById("Age").addEventListener("click", () => {
    const age1 = students.filter(s => s.age > 20);
    Table(age1);
});
/*
document.getElementById("Sortn").addEventListener("click", () => {
    const name = students.filter(s => s.n > 20);
    Table(name);
});
*/
document.getElementById("Reset").addEventListener("click", () => {
   const tablert= document.getElementById("table");
   tablert.style.display==="none";
   tablert.innerHTML="";
Table(students);
});