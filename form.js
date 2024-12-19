var width=0;
arr = [];
function bar(text, index){
  // arr.length=8;
  console.log(text);
  console.log(index);
   var progress = document.querySelector('.progress-bar');
   console.log(document.querySelector('.progress-bar'));
   
  //  var id = setTimeout(frame, 12.5);
  console.log(arr.indexOf(null));
  if(arr[index] && text){
      width=width;
         console.log(width);
         progress.style.width = width + "%";
         console.log(progress.style.width);
         progress.innerHTML = width  + "%";
         arr[index]=text;
    }
    else if(arr[index] && text===''){
      width=width-12.5;
         console.log(width);
         progress.style.width = width + "%";
         console.log(progress.style.width);
         progress.innerHTML = width  + "%";
        arr[index] = null;
        //  arr.splice(index,1,'');
         console.log(arr);
    }
    
  else{
    width=width+12.5;
    console.log(width);
    progress.style.width = width + "%";
    console.log(progress.style.width);
    progress.innerHTML = width  + "%";
    arr[index] = text;
    console.log(arr);

  }
}


function onlyNumbers(evt){
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
          toastr.warning("Use only numbers");
          return false;      
          
        }
        return true;
}

function validateForm() {
  var progress = document.querySelector('.progress-bar');
  var Exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var firstname= document.getElementById('fname').value;
  var lastname =document.getElementById('lname').value;
  var email =document.getElementById('email2').value;
  var contact=document.getElementById('contact2').value;
  var Date=document.getElementById('date').value;
  var gender=document.getElementById('inputgender').value;
  var Password=document.getElementById('Pswd').value;
  var CPass=document.getElementById('Pswd2').value;
  const form = document.querySelector('form');
  
  if(firstname===""||firstname=== null){
    toastr.error("Please fill out firstname field");
    // width=width-12.5;
    //      console.log(width);
    //      progress.style.width = width + "%";
    //      console.log(progress.style.width);
    //      progress.innerHTML = width  + "%";
     return false;
    }
  else if(lastname===""||lastname=== null){
    // width=width-12.5;
    //      console.log(width);
    //      progress.style.width = width + "%";
    //      console.log(progress.style.width);
    //      progress.innerHTML = width  + "%";
    toastr.error("Please fill out lastname field");
    return false;
  }
  else if(email===""||email===null){
    width=width-12.5;
         console.log(width);
         progress.style.width = width + "%";
         console.log(progress.style.width);
         progress.innerHTML = width  + "%";
   toastr.error("Please fill out email field");
   return false;
  } 
  
  else if(!Exp.test(email)){
    width=width-12.5;
         console.log(width);
         progress.style.width = width + "%";
         console.log(progress.style.width);
         progress.innerHTML = width  + "%";
    toastr.error("Use @ and . for email");
  }
  else if(contact===""||contact===null){
    width=width-12.5;
         console.log(width);
         progress.style.width = width + "%";
         console.log(progress.style.width);
         progress.innerHTML = width  + "%";
    toastr.error("Please fill out contact field");
    return false;
  }
   else if(contact.length<10){
    width=width-12.5;
    console.log(width);
    progress.style.width = width + "%";
    console.log(progress.style.width);
    progress.innerHTML = width  + "%";
    toastr.error("Contact must be atleast 10 characters long");
    return false;
  }
  else if(Date===""||Date===null){
    width=width-12.5;
         console.log(width);
         progress.style.width = width + "%";
         console.log(progress.style.width);
         progress.innerHTML = width  + "%";
    toastr.error("Please fill out date field");
    return false;
  }
  else if(gender=== ""){
    // width=width-12.5;
    // console.log(width);
    // progress.style.width = width + "%";
    // console.log(progress.style.width);
    // progress.innerHTML = width  + "%";
toastr.error("Please fill out gender field");
return false;
  }
  else if(Password===""||Password===null){
    width=width-12.5;
         console.log(width);
         progress.style.width = width + "%";
         console.log(progress.style.width);
         progress.innerHTML = width  + "%";
    toastr.error("Please fill out password field");
  }
   else if(Password.length<8){
    width=width-12.5;
    console.log(width);
    progress.style.width = width + "%";
    console.log(progress.style.width);
    progress.innerHTML = width  + "%";
      toastr.error("Password must be atleast 8 characters long");
  }
  else if(CPass==""||CPass==null){
    width=width-12.5;
         console.log(width);
         progress.style.width = width + "%";
         console.log(progress.style.width);
         progress.innerHTML = width  + "%";
    toastr.error("Please fill out confirm pass field");
  }
  else if(CPass!==Password){
    width=width-12.5;
         console.log(width);
         progress.style.width = width + "%";
         console.log(progress.style.width);
         progress.innerHTML = width  + "%";
      toastr.error("Password does not match!");      
  }
 
  else{
    width=0;
         console.log(width);
         progress.style.width = width + "%";
         console.log(progress.style.width);
         progress.innerHTML = width  + "%";
      toastr.success('The process has been saved.', 'Success'); 
      form.reset();
    }
  }
  