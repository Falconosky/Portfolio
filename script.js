function fade_oferuje()
{
    var szukam=document.getElementById("oferuje_cien");
    szukam.style.transition="opacity 0.5s";
    szukam.style.opacity="0.5";
    
    var o=document.getElementById("szukam");
    o.style.width="43.7%";
    o.style.padding="0 3%";
    o.style.fontSize="2.8vh";
    
    var a=document.getElementById("l_title_s");
    a.style.transition="font-size 0.5s";
    a.style.fontSize="4.1vh";
}

function fade_out_oferuje()
{
    var szukam=document.getElementById("oferuje_cien");
    szukam.style.opacity="0";
    
    var o=document.getElementById("szukam");
    o.style.fontSize="2.5vh";
    o.style.width="39.7%";
    o.style.padding="0 5%";
    
    var a=document.getElementById("l_title_s");
    a.style.fontSize="3.5vh";
}


function fade_szukam()
{
    var oferuje=document.getElementById("szukam_cien");
    oferuje.style.transition="opacity 0.5s";
    oferuje.style.opacity="0.5";
    
    var o=document.getElementById("oferuje");
    o.style.width="43.7%";
    o.style.padding="0 3%";
    o.style.fontSize="2.8vh";
    
    var a=document.getElementById("l_title_o");
    a.style.transition="font-size 0.5s";
    a.style.fontSize="4.1vh";
}

function fade_out_szukam()
{
    var oferuje=document.getElementById("szukam_cien");
    oferuje.style.opacity="0";
    
    var o=document.getElementById("oferuje");
    o.style.fontSize="2.5vh";
    o.style.width="39.7%";
    o.style.padding="0 5%";
    
    var a=document.getElementById("l_title_o");
    a.style.textAlign="center";
    a.style.fontSize="3.5vh";
}

//2.5
//3.5