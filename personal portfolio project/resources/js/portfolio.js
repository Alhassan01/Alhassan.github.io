
function welcomeMessge(){
    var welcome = prompt("what is your name?" );
    if(welcome.length !=0){
        document.getElementById("greetings").innerHTML = welcome + " you're welcome to my pag. What can I do for you? ";
    }
}
