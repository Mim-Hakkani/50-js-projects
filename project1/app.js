//get the id and claasss 
const submitHandler = document.getElementById('submit');
const inputHandler =document.getElementById('qr_input')

submitHandler.addEventListener('click',function(){
     const inputvalue =inputHandler.value

     //fetch qrcode apis

     const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`

     

    inputHandler.value =" "
 
})