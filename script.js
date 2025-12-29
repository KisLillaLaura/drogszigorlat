let aktualisNoveny = "";

const novenyAdatok = {
    // ... ide másold be az összes növényadatot, amit eredetileg küldtél ...
    "Acaciae gummi": { magyardrog: "Arabmézga", latin: "Acacia senegal", csalad: "Fabaceae", kep: "Acaciae_gummi.jpg" },
    // (A többi növényt hagyd benne az objektumban!)
};

// Ez a függvény tölti be az új növényt
function ujNoveny() {
    const novenyNevek = Object.keys(novenyAdatok);
    aktualisNoveny = novenyNevek[Math.floor(Math.random() * novenyNevek.length)];
    
    // Kép beállítása a MAKRO mappából
    document.getElementById("noveny-kep").src = "MAKRO/" + novenyAdatok[aktualisNoveny].kep;
    
    // Mezők ürítése
    const inputs = ["magyar-drog", "latin-drog", "latin-noveny", "csalad-noveny"];
    inputs.forEach(id => {
        document.getElementById(id).value = "";
    });
    document.getElementById("noveny-eredmeny").innerHTML = "";
}

// Ellenőrzés
function checkNoveny() {
    const elvart = novenyAdatok[aktualisNoveny];
    
    const valaszok = {
        magyar: document.getElementById("magyar-drog").value.trim(),
        latinDrog: document.getElementById("latin-drog").value.trim(),
        latinNoveny: document.getElementById("latin-noveny").value.trim(),
        csalad: document.getElementById("csalad-noveny").value.trim()
    };

    let eredmenyHTML = "<strong>Eredmények:</strong><br>";

    function checkField(userVal, correctVal, label) {
        const isCorrect = userVal.toLowerCase() === correctVal.toLowerCase();
        return `${label}: ${isCorrect ? "✔️" : `❌ (helyes: ${correctVal})`}<br>`;
    }

    eredmenyHTML += checkField(valaszok.magyar, elvart.magyardrog, "Magyar drog");
    eredmenyHTML += checkField(valaszok.latinDrog, aktualisNoveny, "Drog latin neve");
    eredmenyHTML += checkField(valaszok.latinNoveny, elvart.latin, "Latin növénynév");
    eredmenyHTML += checkField(valaszok.csalad, elvart.csalad, "Család");

    document.getElementById("noveny-eredmeny").innerHTML = eredmenyHTML;
}

// Oldal betöltésekor azonnal indul a játék
window.onload = ujNoveny;
