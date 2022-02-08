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

//  states update by using driect function 
document.getElementById('eventListenerUpdate').addEventListener('click',function(){
    const text= document.getElementById('updateText');
    // console.log(text.value);
    const updateText = document.getElementById('p-text');
    updateText.innerText= text.value;
    text.value='';


})



    //1. add Event listener in driect method 
document.getElementById('submited-commit').addEventListener('click',function(){
    //2.  get user comment
    const commitBox = document.getElementById('commit-add');
    // console.log(commitBox.value);

    //3. create comment paragraph
    const newComment = document.createElement('p');
    newComment.innerText = commitBox.value; 

    //4. append the commit 
    const commentContainer = document.getElementById('comment-area');
    commentContainer.appendChild(newComment);

    //5. clear the commont box 
    commitBox.value= '';
})

