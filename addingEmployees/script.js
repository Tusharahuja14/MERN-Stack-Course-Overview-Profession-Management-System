let arr=[];
document.addEventListener("DOMContentLoaded",function(){
const name=document.getElementById("name");
const profession=document.getElementById("profession");
const age=document.getElementById("age");
const wrapper=document.querySelector(".wrapper");
const nohead=document.querySelector(".no-head");
const add=document.querySelector(".add-btn");
const emp=document.querySelector(".emp");
let num=0;
add.addEventListener("click",function(event){
   const error=document.createElement("h3");
   error.innerText="Error : Please Make sure All the fields are filled before adding in an employee !";
   error.classList.add("error");
   
   let existingclass=document.querySelector(".error");
    if(name.value=="")
   {
   if(!existingclass)
   {
wrapper.appendChild(error);
   }

   }
   else if(profession.value=="")
   {
    if(!existingclass)
        {
     wrapper.appendChild(error);
        }
   }
   else if(age.value=="")
   {
    if(!existingclass)
        {
     wrapper.appendChild(error);
        }
   }
   else
   {
    if(document.querySelector(".error"))
    {
        document.querySelector(".error").remove();
    }
    const added=document.createElement("div");
    added.innerHTML="Success : Employee Added!";
    added.classList.add("added");
    if(document.querySelector(".added"))
    {
        document.querySelector(".added").remove();
    }
    wrapper.appendChild(added);
    if(nohead){nohead.remove()};
    const namefield="name";
    const agefield="age";
    const professionfield="profession";
    const idfield="num";
    num=num+1;
    let obj={};
    obj[idfield]=num;
    obj[namefield]=name.value;
    obj[agefield]=age.value;
    obj[professionfield]=profession.value;
    arr.push(obj);
    name.value="";
    age.value="";
    profession.value="";
   print();
   }

function print()
   {
    emp.innerHTML="";
    arr.forEach((item,i)=>{
        emp.innerHTML+=`
        <div class="all">
         <div class=empdetails>
           <span>${item.num}</span>
           <span>Name:${item.name}</span>
           <span>profession:${item.profession}</span>
           <span>Age:${item.age}</span>
           </div>
  <button class="delete">Delete</button>
  </div>`;
const deleteuser=document.querySelector(".delete");
deleteuser.addEventListener("click",()=>del(i));
 
});

}
  function del(i)
   {
       if(document.querySelector(".added"))
        {
            document.querySelector(".added").remove();
        }
  arr.splice(i,1);
  print();
  if(arr.length<1)
  {
    const container=document.querySelector(".container");
    let zeroemp=document.createElement("h4");
    zeroemp.innerText="You have 0 Employees.";
    zeroemp.classList.add("no-head");
    container.appendChild(zeroemp);
    num=0;
  }
   }
});
})
