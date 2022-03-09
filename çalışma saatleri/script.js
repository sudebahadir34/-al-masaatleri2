document.getElementById("listeSaatler").addEventListener("change",hesapla);

function saatler(){
    
    for(let i=1;i<9;i++){
        let saat=document.createElement("option");
        document.getElementById("listeSaatler").appendChild(saat);
        saat.innerHTML=i;
        saat.value=i;
    }

}
