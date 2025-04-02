
const buttonYes = document.getElementById("yes")
 
function getout() {
    
    const buttonNo = document.getElementById("no")
    var marginNo = buttonNo.style.marginLeft;
    var marginAdd = String(Math.random()*1000)+"px";
    if (marginAdd===marginNo) {
        marginAdd = String(Math.random()*1000)+"px"
        
    } 
    
   
    
    buttonNo.style.marginLeft= marginAdd; 
    
    
}