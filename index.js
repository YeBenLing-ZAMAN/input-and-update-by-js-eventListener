  // using function 
  function onCickFunctionUsing() {
    const updateText = document.getElementById('p-text');
    updateText.innerText = 'set by using function calling'
}

// using driect function 
document.getElementById('eventListener').addEventListener('click', function(){
    const updateText = document.getElementById('p-text');
    updateText.innerText= 'set by using driect addEventListener function '
})

//  driect using by=
document.getElementById('eventListenerUpdate').addEventListener('click',function(){
    const text= document.getElementById('updateText');
    // console.log(text.value);
    const updateText = document.getElementById('p-text');
    updateText.innerText= text.value;
    text.value='';


})



// states update by using driect function 

