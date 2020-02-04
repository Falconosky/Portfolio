function addZero(i) {
    if (i < 10) {
    i = "0" + i;
}
    return i;
}

function total() {
    
    var Today = new Date();
    var Month = Today.getMonth();
    var Day = Today.getDay();
    var Year = Today.getFullYear();
    var Hour = Today.getHours();
    var Minutes = Today.getMinutes();
    
    var tel = document.getElementById('tel').value;
    var nrtel = new RegExp("[0-9]+");
    var score = tel.match(nrtel);
    var other_date = document.getElementById('datepicker').value;
    
    if(!tel){
        telalert = ("Wpisz numer telefonu");
        document.getElementById("tel-alert").style.color = "#CC0300";
    } else if(score[0].length == tel.length){
        telalert = ("Prawidłowy numer telefonu");
        document.getElementById("tel-alert").style.color = "#599C37";
        
           if (document.getElementById('1m').checked){
                pool = ("za 1 minutę ( "+addZero(Hour)+":"+addZero([Minutes+1])+", "+addZero(Day)+"/"+addZero(Month)+"/"+addZero(Year)+" )");
                document.getElementById("subimit").style.display = "none";
                document.getElementById("options-alert").style.display = "none";
            } else if (document.getElementById('2g').checked){
                pool = ("za 2 godziny ( "+addZero([Hour+2])+":"+addZero(Minutes)+", "+addZero(Day)+"/"+addZero(Month)+"/"+addZero(Year)+" )");
                document.getElementById("subimit").style.display = "none";
                document.getElementById("options-alert").style.display = "none";
            } else if (document.getElementById('tomorrow').checked){
                pool = (addZero(Hour)+":"+addZero(Minutes)+", "+addZero([Day+1])+"/"+addZero(Month)+"/"+addZero(Year));
                document.getElementById("subimit").style.display = "none";
                document.getElementById("options-alert").style.display = "none";
            } else if (document.getElementById('after_tomorrow').checked){
                pool = (addZero(Hour)+":"+addZero(Minutes)+", "+addZero([Day+2])+"/"+addZero(Month)+"/"+addZero(Year));
                document.getElementById("subimit").style.display = "none";
                document.getElementById("options-alert").style.display = "none";
            } else if(!other_date){
                document.getElementById("options-alert").style.display = "block";
            } else if 
                (document.getElementById('others').checked){
                pool = (addZero(Hour)+":"+addZero(Minutes)+", "+other_date);
                document.getElementById("subimit").style.display = "none";
                document.getElementById("options-alert").style.display = "none";
            } 
        
    } else{
        telalert = ("Nieprawidłowy numer telefonu");
        document.getElementById("tel-alert").style.color = "#CC0300";
    }
    
    var telvalidator = document.getElementById("tel-alert");
    telvalidator.innerHTML=telalert;
    
    var formrezult = document.getElementById("display");
    formrezult.innerHTML="Dziękuje. Wybrałeś termin: " + pool + "." + "<br>" + "Poczekaj na kontakt od Eksperta";
    
    if(document.getElementById("subimit").onclick)
    {
        radioObject.disabled = false;
    }

}