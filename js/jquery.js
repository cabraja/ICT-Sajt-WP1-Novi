$(document).ready(function(){

    // Animacija izlaska teksta za svaku osobu pri skrolu
    $(".card p").hide();
    $(document).scroll(function(){
        if(window.scrollY > 160){
            $(".card p").slideDown(1000);
        }
    });
})