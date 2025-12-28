

let aktualisNoveny = "";

	    


const novenyAdatok = {
    // SZÉNHIDRÁTOK
    "Acaciae gummi": { magyardrog: "Arabmézga", latin: "Acacia senegal", csalad: "Fabaceae", kep: "Acaciae_gummi.jpg" },
    "Agar": { magyardrog: "Agar-agar", latin: "Gelidium sesquipedale", csalad: "Gelidiaceae", kep: "Agar.jpg" },
    "Althaeae folium": { magyardrog: "Orvosi ziliz levél", latin: "Althaea officinalis", csalad: "Malvaceae", kep: "Althaeae_folium.jpg" },
    "Althaeae radix": { magyardrog: "Orvosi ziliz gyökér", latin: "Althaea officinalis", csalad: "Malvaceae", kep: "Althaeae_radix.jpg" },
    "Graminis rhizoma": { magyardrog: "Tarackbúza gyöktörzs", latin: "Elymus repens", csalad: "Poaceae", kep: "Graminis_rhizoma.jpg" },
    "Lichen islandicus": { magyardrog: "Izlandi zuzmó", latin: "Cetraria islandica", csalad: "Parmeliaceae", kep: "Lichen_islandicus.jpg" },
    "Lini semen": { magyardrog: "Házi lenmag", latin: "Linum usitatissimum", csalad: "Linaceae", kep: "Lini_semen.jpg" },
    "Malvae folium": { magyardrog: "Mályvalevél", latin: "Malva sylvestris", csalad: "Malvaceae", kep: "Malvae_folium.jpg" },
    "Malvae sylvestris flos": { magyardrog: "Erdei mályva virág", latin: "Malva sylvestris", csalad: "Malvaceae", kep: "Malvae_sylvestris_flos.jpg" },
    "Plantaginis lanceolatae folium": { magyardrog: "Lándzsás útifű levél", latin: "Plantago lanceolata", csalad: "Plantaginaceae", kep: "Plantaginis_lanceolatae_folium.jpg" },
    "Psyllii semen": { magyardrog: "Egyiptomi útifűmag", latin: "Plantago afra", csalad: "Plantaginaceae", kep: "Psyllii_semen.jpg" },
    "Salviae hispanicae semen": { magyardrog: "Aztékzsályamag (Chia)", latin: "Salvia hispanica", csalad: "Lamiaceae", kep: "Salviae_hispanicae_semen.jpg" },
    "Taraxaci officinalis radix": { magyardrog: "Pongyola pitypang gyökér", latin: "Taraxacum officinale", csalad: "Asteraceae", kep: "Taraxaci_officinalis_radix.jpg" },
    "Tiliae flos": { magyardrog: "Hársfavirág", latin: "Tilia cordata / platyphyllos", csalad: "Malvaceae", kep: "Tiliae_flos.jpg" },
    "Tragacantha": { magyardrog: "Tragakanta", latin: "Astragalus gummifer", csalad: "Fabaceae", kep: "Tragacantha.jpg" },
    "Trigonellae foenugraeci semen": { magyardrog: "Görögszénamag", latin: "Trigonella foenum-graecum", csalad: "Fabaceae", kep: "Trigonellae_foenugraeci_semen.jpg" },

    // ZSÍROS OLAJOK
    "Cucurbitae semen": { magyardrog: "Tökmag", latin: "Cucurbita pepo", csalad: "Cucurbitaceae", kep: "Cucurbitae_semen.jpg" },
    "Helianthi annui semen": { magyardrog: "Napraforgómag", latin: "Helianthus annuus", csalad: "Asteraceae", kep: "Helianthi_annui_semen.jpg" },
    "Papaveris semen": { magyardrog: "Mák", latin: "Papaver somniferum", csalad: "Papaveraceae", kep: "Papaveris_semen.jpg" },
    "Ricini semen": { magyardrog: "Ricinusmag", latin: "Ricinus communis", csalad: "Euphorbiaceae", kep: "Ricini_semen.jpg" },
    "Sesami semen": { magyardrog: "Szezámmag", latin: "Sesamum indicum", csalad: "Pedaliaceae", kep: "Sesami_semen.jpg" },
    "Soiae semen": { magyardrog: "Szójabab", latin: "Glycine max", csalad: "Fabaceae", kep: "Soiae_semen.jpg" },

    // NÖVÉNYI SAVAK, KÁVÉSAVSZÁRMAZÉKOK
    "Echinaceae purpureae herba": { magyardrog: "Bíbor kasvirág virágos hajtás", latin: "Echinacea purpurea", csalad: "Asteraceae", kep: "Echinaceae_purpureae_herba.jpg" },
    "Equiseti herba": { magyardrog: "Mezei zsurló meddő hajtás", latin: "Equisetum arvense", csalad: "Equisetaceae", kep: "Equiseti_herba.jpg" },
    "Hibisci sabdariffae flos": { magyardrog: "Szudáni hibiszkusz virágcsésze", latin: "Hibiscus sabdariffa", csalad: "Malvaceae", kep: "Hibisci_sabdariffae_flos.jpg" },
    "Hippophaeae fructus": { magyardrog: "Homoktövis termés", latin: "Hippophae rhamnoides", csalad: "Elaeagnaceae", kep: "Hippophaeae_fructus.jpg" },
    "Pulmonariae folium": { magyardrog: "Orvosi tüdőfű levél", latin: "Pulmonaria officinalis", csalad: "Boraginaceae", kep: "Pulmonariae_folium.jpg" },
    "Rosae pseudo-fructus": { magyardrog: "Csipkebogyó (vadrózsa áltermés)", latin: "Rosa canina", csalad: "Rosaceae", kep: "Rosae_pseudo-fructus.jpg" },
    "Rosmarini folium": { magyardrog: "Rozmaringlevél", latin: "Rosmarinus officinalis", csalad: "Lamiaceae", kep: "Rosmarini_folium.jpg" },

    // FENOLGLIKOZIDOK, KUMARINOK, LIGNÁNOK
    "Curcumae longae rhizoma": { magyardrog: "Kurkuma gyöktörzs", latin: "Curcuma longa", csalad: "Zingiberaceae", kep: "Curcumae_longae_rhizoma.jpg" },
    "Meliloti herba": { magyardrog: "Orvosi somkóró virágos hajtás", latin: "Melilotus officinalis", csalad: "Fabaceae", kep: "Meliloti_herba.jpg" },
    "Rutae herba": { magyardrog: "Kerti ruta virágos hajtás", latin: "Ruta graveolens", csalad: "Rutaceae", kep: "Rutae_herba.jpg" },
    "Schisandrae chinensis fructus": { magyardrog: "Kínai kúszómagnélia termés", latin: "Schisandra chinensis", csalad: "Schisandraceae", kep: "Schisandrae_chinensis_fructus.jpg" },
    "Uvae ursi folium": { magyardrog: "Medveszőlőlevél", latin: "Arctostaphylos uva-ursi", csalad: "Ericaceae", kep: "Uvae_ursi_folium.jpg" },

    // FLAVONOIDOK
    "Aurantii amari epicarpium et mesocarpium": { magyardrog: "Keserű narancs epikarpium és mezokarpium", latin: "Citrus aurantium", csalad: "Rutaceae", kep: "Aurantii_amari_epicarpium_et_mesocarpium.jpg" },
    "Betulae folium": { magyardrog: "Nyírfalevél", latin: "Betula pendula", csalad: "Betulaceae", kep: "Betulae_folium.jpg" },
    "Crataegi folium cum flore": { magyardrog: "Galagonya virágos ágvég", latin: "Crataegus monogyna", csalad: "Rosaceae", kep: "Crataegi_folium_cum_flore.jpg" },
    "Ginkgonis folium": { magyardrog: "Páfrányfenyő levél", latin: "Ginkgo biloba", csalad: "Ginkgoaceae", kep: "Ginkgonis_folium.jpg" },
    "Hyperici herba": { magyardrog: "Orbáncfű virágos hajtás", latin: "Hypericum perforatum", csalad: "Hypericaceae", kep: "Hyperici_herba.jpg" },
    "Sambuci flos": { magyardrog: "Fekete bodza virág", latin: "Sambucus nigra", csalad: "Adoxaceae", kep: "Sambuci_flos.jpg" },
    "Silybi mariani fructus": { magyardrog: "Máriatövis termés", latin: "Silybum marianum", csalad: "Asteraceae", kep: "Silybi_mariani_fructus.jpg" },
    "Solidaginis herba": { magyardrog: "Aranyvessző virágos hajtás", latin: "Solidago virgaurea", csalad: "Asteraceae", kep: "Solidaginis_herba.jpg" },
    "Verbasci flos": { magyardrog: "Ökörfarkkóró virág", latin: "Verbascum phlomoides", csalad: "Scrophulariaceae", kep: "Verbasci_flos.jpg" },

    // CSERZŐANYAGOK
    "Alchemillae herba": { magyardrog: "Palástfű virágos hajtás", latin: "Alchemilla vulgaris", csalad: "Rosaceae", kep: "Alchemillae_herba.jpg" },
    "Cotini folium": { magyardrog: "Cserszömörce levél", latin: "Cotinus coggygria", csalad: "Anacardiaceae", kep: "Cotini_folium.jpg" },
    "Quercus cortex": { magyardrog: "Tölgyfakéreg", latin: "Quercus robur", csalad: "Fagaceae", kep: "Quercus_cortex.jpg" },
    "Ratanhiae radix": { magyardrog: "Ratanhia-gyökér", latin: "Krameria triandra", csalad: "Krameriaceae", kep: "Ratanhiae_radix.jpg" },

    // ANTRAGLIKOZIDOK
    "Aloe capensis": { magyardrog: "Fokföldi aloé", latin: "Aloe ferox", csalad: "Asphodelaceae", kep: "Aloe_capensis.jpg" },
    "Frangulae cortex": { magyardrog: "Kutyabengekéreg", latin: "Frangula alnus", csalad: "Rhamnaceae", kep: "Frangulae_cortex.jpg" },
    "Sennae foliolum": { magyardrog: "Szenalevél", latin: "Cassia senna", csalad: "Fabaceae", kep: "Sennae_foliolum.jpg" },
    "Sennae fructus": { magyardrog: "Szenatermés", latin: "Cassia angustifolia", csalad: "Fabaceae", kep: "Sennae_fructus.jpg" },

    // TERPENOFENOLOIDOK
    "Cannabis herba": { magyardrog: "Kender virágos hajtás", latin: "Cannabis sativa", csalad: "Cannabaceae", kep: "Cannabis_herba.jpg" },
    "Lupuli flos": { magyardrog: "Komlótoboz", latin: "Humulus lupulus", csalad: "Cannabaceae", kep: "Lupuli_flos.jpg" },

    // ILLÓOLAJOK
    "Absinthii herba": { magyardrog: "Fehér üröm virágos hajtás", latin: "Artemisia absinthium", csalad: "Asteraceae", kep: "Absinthii_herba.jpg" },
    "Anisi fructus": { magyardrog: "Ánizstermés", latin: "Pimpinella anisum", csalad: "Apiaceae", kep: "Anisi_fructus.jpg" },
    "Carvi fructus": { magyardrog: "Konyhakömény termés", latin: "Carum carvi", csalad: "Apiaceae", kep: "Carvi_fructus.jpg" },
    "Caryophylli flos": { magyardrog: "Szegfűszeg", latin: "Syzygium aromaticum", csalad: "Myrtaceae", kep: "Caryophylli_flos.jpg" },
    "Cinnamomi cortex": { magyardrog: "Fahéjfa kéreg", latin: "Cinnamomum verum", csalad: "Lauraceae", kep: "Cinnamomi_cortex.jpg" },
    "Coriandri fructus": { magyardrog: "Koriandertermés", latin: "Coriandrum sativum", csalad: "Apiaceae", kep: "Coriandri_fructus.jpg" },
    "Foeniculi dulcis fructus": { magyardrog: "Édeskömény termés", latin: "Foeniculum vulgare var. dulce", csalad: "Apiaceae", kep: "Foeniculi_dulcis_fructus.jpg" },
    "Juniperi galbulus": { magyardrog: "Borókabogyó (tobozbogyó)", latin: "Juniperus communis", csalad: "Cupressaceae", kep: "Juniperi_galbulus.jpg" },
    "Lavandulae flos": { magyardrog: "Levendulavirág", latin: "Lavandula angustifolia", csalad: "Lamiaceae", kep: "Lavandulae_flos.jpg" },
    "Matricariae flos": { magyardrog: "Kamillavirágzat", latin: "Matricaria recutita", csalad: "Asteraceae", kep: "Matricariae_flos.jpg" },
    "Menthae crispae folium": { magyardrog: "Fodormentalevél", latin: "Mentha spicata var. crispa", csalad: "Lamiaceae", kep: "Menthae_crispae_folium.jpg" },
    "Menthae piperitae folium": { magyardrog: "Borsmentalevél", latin: "Mentha x piperita", csalad: "Lamiaceae", kep: "Menthae_piperitae_folium.jpg" },
    "Millefolii herba": { magyardrog: "Közönséges cickafark virágos hajtás", latin: "Achillea millefolium", csalad: "Asteraceae", kep: "Millefolii_herba.jpg" },
    "Salviae officinalis folium": { magyardrog: "Orvosi zsálya levél", latin: "Salvia officinalis", csalad: "Lamiaceae", kep: "Salviae_officinalis_folium.jpg" },
    "Thymi herba": { magyardrog: "Kerti kakukkfű virágos hajtás", latin: "Thymus vulgaris", csalad: "Lamiaceae", kep: "Thymi_herba.jpg" },

    // KESERŰANYAGOK, IRIDOIDOK
    "Cardui benedicti herba": { magyardrog: "Benedekfű virágos hajtás", latin: "Centaurea benedicta", csalad: "Asteraceae", kep: "Cardui_benedicti_herba.jpg" },
    "Centaurii herba": { magyardrog: "Kis ezerjófű virágos hajtás", latin: "Centaurium erythraea", csalad: "Gentianaceae", kep: "Centaurii_herba.jpg" },
    "Gentianae radix": { magyardrog: "Tárnicsgyökér", latin: "Gentiana lutea", csalad: "Gentianaceae", kep: "Gentianae_radix.jpg" },
    "Valerianae radix": { magyardrog: "Macskagyökér", latin: "Valeriana officinalis", csalad: "Caprifoliaceae", kep: "Valerianae_radix.jpg" },

    // TRITERPÉNSZÁRMAZÉKOK
    "Calendulae flos": { magyardrog: "Körömvirág", latin: "Calendula officinalis", csalad: "Asteraceae", kep: "Calendulae_flos.jpg" },
    "Convallariae folium": { magyardrog: "Gyöngyviráglevél", latin: "Convallaria majalis", csalad: "Asparagaceae", kep: "Convallariae_folium.jpg" },
    "Digitalis lanatae folium": { magyardrog: "Gyapjas gyűszűvirág levél", latin: "Digitalis lanata", csalad: "Plantaginaceae", kep: "Digitalis_lanatae_folium.jpg" },
    "Ginseng radix": { magyardrog: "Ginzenggyökér", latin: "Panax ginseng", csalad: "Araliaceae", kep: "Ginseng_radix.jpg" },
    "Hederae folium": { magyardrog: "Borostyánlevél", latin: "Hedera helix", csalad: "Araliaceae", kep: "Hederae_folium.jpg" },
    "Hippocastani semen": { magyardrog: "Vadgesztenyemag", latin: "Aesculus hippocastanum", csalad: "Sapindaceae", kep: "Hippocastani_semen.jpg" },
    "Liquiritiae radix": { magyardrog: "Igazi édesgyökér", latin: "Glycyrrhiza glabra", csalad: "Fabaceae", kep: "Liquiritiae_radix.jpg" },
    "Strophanthi semen": { magyardrog: "Sztrófanthuszmag", latin: "Strophanthus kombe", csalad: "Apocynaceae", kep: "Strophanthi_semen.jpg" },

    // TROPÁNVÁZAS ALKALOIDOK
    "Belladonnae folium": { magyardrog: "Nadragulyalevél", latin: "Atropa belladonna", csalad: "Solanaceae", kep: "Belladonnae_folium.jpg" },
    "Stramonii folium": { magyardrog: "Csattanó maszlag levél", latin: "Datura stramonium", csalad: "Solanaceae", kep: "Stramonii_folium.jpg" },

    // BENZIL-IZOKINOLIN... ALKALOIDOK
    "Chelidonii herba": { magyardrog: "Fecskefű virágos hajtás", latin: "Chelidonium majus", csalad: "Papaveraceae", kep: "Chelidonii_herba.jpg" },
    "Cinchonae cortex": { magyardrog: "Kínafakéreg", latin: "Cinchona pubescens", csalad: "Rubiaceae", kep: "Cinchonae_cortex.jpg" },
    "Ipecacuanhae radix": { magyardrog: "Valódi hánytatógyökér", latin: "Carapichea ipecacuanha", csalad: "Rubiaceae", kep: "Ipecacuanhae_radix.jpg" },
    "Papaveris maturi fructus": { magyardrog: "Mák (érett termésfal)", latin: "Papaver somniferum", csalad: "Papaveraceae", kep: "Papaveris_maturi_fructus.jpg" },
    "Secale cornutum": { magyardrog: "Anyarozs", latin: "Claviceps purpurea", csalad: "Clavicipitaceae", kep: "Secale_cornutum.jpg" },
    "Strychni semen": { magyardrog: "Ebvészmag", latin: "Strychnos nux-vomica", csalad: "Loganiaceae", kep: "Strychni_semen.jpg" },
    "Vincae minoris herba": { magyardrog: "Kis télizöld virágos hajtás", latin: "Vinca minor", csalad: "Apocynaceae", kep: "Vincae_minoris_herba.jpg" },

    // PROTO- ÉS PSZEUDOALKALOIDOK
    "Camelliae sinensis non fermentata folia": { magyardrog: "Zöld tea levél", latin: "Camellia sinensis", csalad: "Theaceae", kep: "Camelliae_sinensis_non_fermentata_folia.jpg" },
    "Capsici fructus": { magyardrog: "Paprikatermés", latin: "Capsicum annuum", csalad: "Solanaceae", kep: "Capsici_fructus.jpg" },
    "Coffeae semen": { magyardrog: "Kávémag", latin: "Coffea arabica", csalad: "Rubiaceae", kep: "Coffeae_semen.jpg" },
    "Colae semen": { magyardrog: "Kólamag", latin: "Cola nitida", csalad: "Malvaceae", kep: "Colae_semen.jpg" },
    "Colchici semen": { magyardrog: "Őszi kikerics mag", latin: "Colchicum autumnale", csalad: "Colchicaceae", kep: "Colchici_semen.jpg" }
};

	    


    let eredmeny = "<strong>Eredmények:</strong><br>";
    
    // Képek ellenőrzése
    valaszSelects.forEach((select, index) => {
        const valasz = select.value;
        const helyes = helyesValaszok[index];
        const isCorrect = valasz === helyes;
        
        eredmeny += `Kép ${index+1}: ${isCorrect ? "✔️" : `❌ (helyes: ${helyes})`}<br>`;
    });



	

function showSubMenu(type) {
    // Minden elem elrejtése
    const availableMenus = ['novenyfelismeres', 'kepletek', 'tabla'];
    
    if (!availableMenus.includes(type)) {
        console.log("Ez a menüpont ideiglenesen nem elérhető");
        return;
    }
    document.getElementById("mainMenu").style.display = "none";
   
    document.getElementById("makroszkopikus-container").style.display = "none"
	
    document.getElementById(type + "SubMenu").style.display = "block";
}



// Makroszkópikus játék indítása
function startMakroszkopikusJatek() {
    document.getElementById("novenyfelismeresSubMenu").style.display = "none";
    document.getElementById("makroszkopikus-container").style.display = "block";
    ujNoveny();
}

// Új növény betöltése
function ujNoveny() {
    const novenyNevek = Object.keys(novenyAdatok);
    aktualisNoveny = novenyNevek[Math.floor(Math.random() * novenyNevek.length)];
    document.getElementById("noveny-kep").src = "MAKRO/" + novenyAdatok[aktualisNoveny].kep;
    document.getElementById("magyar-drog").value = "";
    document.getElementById("latin-drog").value = "";
    document.getElementById("latin-noveny").value = "";
    document.getElementById("csalad-noveny").value = "";
    document.getElementById("noveny-eredmeny").innerHTML = "";
}

// Ellenőrzés
function checkNoveny() {
    const elvart = novenyAdatok[aktualisNoveny];
    const valaszok = {
        magyar: document.getElementById("magyar-drog").value.trim(),
        latinDrog: document.getElementById("latin-drog").value.trim(),
        latin: document.getElementById("latin-noveny").value.trim(),
        csalad: document.getElementById("csalad-noveny").value.trim()
    };

    let eredmeny = "<strong>Eredmények:</strong><br>";
    
    function checkField(userAnswer, correctAnswer, fieldName) {
        const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
        return `${fieldName}: ${isCorrect ? "✔️" : `❌ (helyes: ${correctAnswer})`}<br>`;
    }

    eredmeny += checkField(valaszok.magyar, elvart.magyardrog, "Magyar név");
    eredmeny += checkField(valaszok.latinDrog, aktualisNoveny, "Drog latin neve");
    eredmeny += checkField(valaszok.latin, elvart.latin, "Latin név");
    eredmeny += checkField(valaszok.csalad, elvart.csalad, "Család");

    document.getElementById("noveny-eredmeny").innerHTML = eredmeny;
}
       
        

     
    
    // Input mezők ürítése
    const inputsToClear = [
        "name-input",
        "name-output",
        "magyar-drog",
        "latin-drog",
        "latin-noveny",
        "csalad-noveny",
        "noveny-eredmeny",
        "mikro-eredmeny"
    ];
    
    inputsToClear.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
        if (element && element.innerHTML) element.innerHTML = "";
    });
}
        
        

        function newMolecule() {
            const moleculeNames = Object.keys(molekulaAdatok);
            currentMolecule = moleculeNames[Math.floor(Math.random() * moleculeNames.length)];
            document.getElementById("molekula-name").innerText = currentMolecule;
        }


	    
