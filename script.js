
bold.addEventListener("click",function(){
    document.execCommand('bold',false,null);
})

italic.addEventListener("click",function(){
    document.execCommand('italic',false,null);
})

underline.addEventListener("click",function(){
    document.execCommand('underline',false,null);
})

undo.addEventListener("click",function(){
    document.execCommand("undo",false,null);
})

redo.addEventListener("click",function(){
  document.execCommand("redo",false,null);
})



