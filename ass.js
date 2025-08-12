const a = document.getElementById("fetchtable");
const btn = document.getElementsByTagName("button");
const table = document.getElementsByTagName("table");

const b = async () => {
  const c = await fetch("https://jsonplaceholder.typicode.com/users");

  if (c.ok) {
    const d = await c.json();
    d.forEach((el) => {
      const e = document.createElement("tr");
      const Id = document.createElement("td");
      Id.textContent = el.id;

      const Name = document.createElement("td");
      Name.textContent = el.name;

      const Username = document.createElement("td");
      Username.textContent = el.username;

    
      e.appendChild(Id);
      e.appendChild(Name);
      e.appendChild(Username);
    

      a.appendChild(e);
    });
  }
};

b();

const input = document.getElementById("text");
const bt = document.getElementsByTagName("button");
const skli = document.getElementById("skill");

//const lit = document.createElement("li");

bt[0].addEventListener("click", () => {
  const lit = document.createElement("li");

  console.log(input.value);
  //  skli.textContent=input.value;
  lit.textContent = input.value;
  skli.appendChild(lit);
  input.value=""
});

const col = document.getElementsByClassName("co");

col[0].addEventListener("click", () => {
//  document.body.classList.toggle("co")
     if(document.body.style.backgroundColor==("white")){
document.body.style.backgroundColor=("chocolate")
  }
  else{
   document.body.style.backgroundColor=("white");

   
}
});