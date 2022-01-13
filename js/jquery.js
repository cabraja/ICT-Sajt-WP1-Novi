$(document).ready(function(){
    
    // Animacija izlaska teksta za svaku osobu pri skrolu
    $(".card p").hide();

    $(document).scroll(function(){
        if(window.scrollY > 200){
            $(".card p").slideDown(1000);
        }
    });

    // Pojavljivanje modala pri kliku na dugme "Dodaj u korpu"

    $(".cart-button").click(function(){
        $("#modal").css("top","20px");

        setTimeout(() => {
            $("#modal").css("top","-80vh");
        },[2000])
    });

})