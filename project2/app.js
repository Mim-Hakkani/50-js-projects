
const inputvalue = document.getElementById('inputID')
const hiddentext =  document.getElementById('palendine-text')


document.getElementById('checkPalendome').addEventListener('click',()=>{

    const storeValue = inputvalue.value.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')


    // if(storeValue)
    const reverseValue =storeValue.split('').reverse().join('')

    
   
    if(storeValue !==reverseValue){
             hiddentext.style.color ='red';
             hiddentext.style.textAlign ='center';
            hiddentext.innerText =`${storeValue} is not palandrome number`  
    }
    else{
             hiddentext.style.color ='green';
        return hiddentext.innerText =`${storeValue} is palandrome number`
    }


  

    storeValue.addEventListener('change',()=>{
        console.log("Store value :: ",storeValue);
    })

})