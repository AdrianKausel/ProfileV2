
// ------- Add and Remove connections ------ //

var element = document.getElementById("requests1");
var show = document.getElementById("connectionshide");
var updateconnections = 2



function add(){
    element.parentNode.removeChild(element);
    show.style="display";
    updateconnections --;
    document.getElementById("circle1").innerHTML = updateconnections;
}
function remove(){
    element.parentNode.removeChild(element);
    updateconnections --;
    document.getElementById("circle1").innerHTML = updateconnections;


}



// ------- Add and Remove connections (second row)------ //

var element2 = document.getElementById("requests2");
var show1 = document.getElementById("connectionshide1");

function add1(){
    element2.parentNode.removeChild(element2);
    show1.style="display";
    updateconnections --;
    document.getElementById("circle1").innerHTML = updateconnections;
}

function remove1(){
    element2.parentNode.removeChild(element2);
    updateconnections --;
    document.getElementById("circle1").innerHTML = updateconnections;
}


//----------Change Name ----- //



function changename(){
    document.getElementById("nombreusuario").innerHTML="Luka Kausel";
}
