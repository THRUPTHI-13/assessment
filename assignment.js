const students = [
 { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
 { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
 { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
 { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
 { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
 { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
 { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
 { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
];


//MAP Questions

//1.
/*students.map((el)=>{
     const a= el.name;
    console.log(a);
})
*/

//2.
/*
const d=students.map((el)=>{
    return `Name:${el.name} Course:${el.course}`;
})
console.log(d);
*/

//3.
/*
students.map((el)=>{
if(el.marks>=60){
        el.status="Pass";
}
else{
    el.status="Fail";
}
})
console.log(students);

*/
//4.
/*
const h=students.map((el)=>{
    return `${el.name} -${el.course}`;

})
console.log(h);
*/

//5.
/*
students.map((el)=>{
       el.marks=el.marks +5;       
});
console.log(students);
*/

//FILTER Questions

//1.
/*
let stdce=students.filter((el)=>el.course==="Computer Science");
console.log(stdce);
*/

//2
/*
let stdmk=students.filter((el)=>el.marks>=80);
console.log(stdmk);
*/
//3.
/*
let stdfee=students.filter((el)=>el.feesPaid==false);
console.log(stdfee);
*/

//4.
/*
let stdaf=students.filter((el)=>el.age>20 && el.marks>70);
console.log(stdaf);
*/
//5.
/*
let stdcrmk=students.filter((el)=>el.course=="Mechanical" && el.marks<85);
console.log(stdcrmk);
*/

//REDUCE Questions
//1.
/*
let totmak = students.reduce((acc, el) => {
  //console.log(acc ,cur,index);
  return acc + el.marks;
}, 0);
console.log(totmak);
*/
//2
/*
let avymk=students.reduce((acc,el)=>{
    //console.log(acc ,cur,index);
    return acc +el.marks;
    },0);
    console.log(avymk/10);
    */
    
    //3
    /*
let fepd=students.filter((el)=>el.feesPaid==true) .reduce((acc)=>{
   
    return acc+1;
    },0);
    console.log(fepd);
    */

    //4
    /*
    let hmak=students.reduce((acc,el)=>{
         for(i=0;i<10;i++){
           if(`${el.marks}`>acc){
                acc=el.marks;
            }
        }
          return acc

    },0);
    console.log(hmak);
    
*/
    //5.
const cor = students.reduce((clg, el) => {
  const crname = el.course;

  if (!clg[crname]) {
    clg[crname] = [];
  }

  const len = clg[crname].length;
  clg[crname][len] = el.name;

  return clg;
}, {});

console.log(cor);

