function opentoggle(){
if(document.querySelector("#user-main").classList.contains("open-toggle")){
    document.querySelector("#user-main").classList.remove("open-toggle")
}
else{
    document.querySelector("#user-main").classList.add("open-toggle")
}

}

function abrir()
{
if(document.querySelector(".menu-user").classList.contains("open-toggle-color")){
        document.querySelector(".menu-user").classList.remove("open-toggle-color")
}
else{
        document.querySelector(".menu-user").classList.add("open-toggle-color")
}
     
}
