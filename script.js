let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let optionsButtons = document.querySelectorAll(".option-button");

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

copy.addEventListener("click",function(){
    document.execCommand("copy",false,null);
})

newb.addEventListener("click",function(){
    window.open('https://devsnest-hackathon.github.io/Note-Taking-App/','_blank');
})

const modifyText = (command, defaultUi, value) => {
    //execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
  };


advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

