//get the id and claasss 
const submitHandler = document.getElementById('submit');
const inputHandler =document.getElementById('qr_input')

submitHandler.addEventListener('click',function(){
     const inputvalue =inputHandler.value

     if(inputvalue!==''){ 

     //fetch qrcode apis

     const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;

     document.getElementById('qr_image').style.opacity ='1'
     document.getElementById('qr_image_div').classList.add("mystyle")

     document.getElementById('qr_image').src =qrcode;
     

    // inputHandler.value =" "

      inputHandler.addEventListener('keyup',()=>{
          if(!inputHandler.value){
         document.getElementById('qr_image_div').classList.remove("mystyle");
         document.getElementById('qr_image').style.opacity ='0'


          }
        
        })

    }

 
 
})