//let cars =["Benz","Porche","Minicooper","BMW","Mustang"];

//let luxury_cars = document.getElementById("luxuryCars");

//for (let types of cars ) {
 // let li = document.createElement("li");
 // li.innerText = types;
 // luxuryCars.appendChild(li);
  //console.log(li);
//}
//cars.forEach(function(types){
 
 //let li = document.createElement("li");
 // li.innerText=types;
  //luxuryCars.appendChild(li);
  //console.log(li);
//})
//let allcars =document.querySelectorAll("li");
//let luxuryCars=[];
//allcars.forEach(function(types){
//  let list = allcars.innerText;
//  luxuryCars.push(list)
 // });
//  console.log(luxuryCars);

//let list= document.querySelectorAll("li");
//let cars =[];
//list.forEach(function(type){
 // let ab =list.innerText;
 // cars.push(ab);
//})
//console.log("cars");

  // function coffieOrtea (powder){
//  console.log("Step 1:Boil the water");
//  console.log("Step 2:Add Milk");
//  console.log(`Step 3:put ${powder} powder`);
//  console.log("Step 4:Add Sugar");
//  console.log("Step 5: Pour to cup");
  //alert(`${powder} is ready now`);
//   }
  
  //coffieOrtea("tea");
  
let items =document.getElementById("kitchen_input");
let bt_n = document.getElementById("button");
let kitchen_input = document.getElementById("item");
let trashbtn= document.getElementById("item");


function additems()
{
  let itemsdata=items.value;
 
  let li = document.createElement("li");
  li.innerText = itemsdata;
  //li.Style.cssText = "animation-name:slidIn;";
  kitchen_input.appendChild(li);
// console.log(li);
  items.value="";
 items.focus();
// a.push(itemsdata);
 //console.log(li);
let trashbtn = document.createElement('i');
trashbtn.classList.add(`fas`,`fa-trash`)
li.appendChild(trashbtn);
console.log(trashbtn)
}

function deletedata(event)
{
if(event.target.classList [0] === "fas")
{
let item = event.target.parentElement;
item.remove();
  }
}

bt_n.addEventListener('click',additems);

trashbtn.addEventListener('click',deletedata);