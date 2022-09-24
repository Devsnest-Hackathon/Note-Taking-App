
window.addEventListener("load",function()
{
var editor = area.document;
editor.designMode = "on";

// bold
bold.addEventListener("click",function(){
    editor.execCommand("Bold",false,null)
},false);

// underline
underline.addEventListener("click",function(){
    editor.execCommand("Underline",false,null)
},false);

// copy
copy.addEventListener("click",function(){
    editor.execCommand('copy');
})

paste.addEventListener("click", () => {
var a; 
let text =  navigator.clipboard.readText().then((t) => t = a);
console.log(a);

});


}
);