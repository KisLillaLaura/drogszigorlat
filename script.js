let aktualisNoveny = "";

const novenyAdatok = {
    // SZÉNHIDRÁTOK
    "Acaciae gummi": { csoport: "Szénhidrátok", magyardrog: "Arabmézga", latin: "Acacia senegal", csalad: "Fabaceae", kep: "Acaciae_gummi.jpg" },
    "Agar": { csoport: "Szénhidrátok", magyardrog: "Agar-agar", latin: "Gelidium sesquipedale", csalad: "Gelidiaceae", kep: "Agar.jpg" },
    "Althaeae folium": { csoport: "Szénhidrátok", magyardrog: "Orvosi ziliz levél", latin: "Althaea officinalis", csalad: "Malvaceae", kep: "Althaeae_folium.jpg" },
    "Althaeae radix": { csoport: "Szénhidrátok", magyardrog: "Orvosi ziliz gyökér", latin: "Althaea officinalis", csalad: "Malvaceae", kep: "Althaeae_radix.jpg" },
    "Graminis rhizoma": { csoport: "Szénhidrátok", magyardrog: "Tarackbúza gyöktörzs", latin: "Elymus repens", csalad: "Poaceae", kep: "Graminis_rhizoma.jpg" },
    "Lichen islandicus": { csoport: "Szénhidrátok", magyardrog: "Izlandi zuzmó", latin: "Cetraria islandica", csalad: "Parmeliaceae", kep: "Lichen_islandicus.jpg" },
    "Lini semen": { csoport: "Szénhidrátok", magyardrog: "Házi lenmag", latin: "Linum usitatissimum", csalad: "Linaceae", kep: "Lini_semen.jpg" },
    "Malvae folium": { csoport: "Szénhidrátok", magyardrog: "Mályvalevél", latin: "Malva sylvestris", csalad: "Malvaceae", kep: "Malvae_folium.jpg" },
    "Malvae sylvestris flos": { csoport: "Szénhidrátok", magyardrog: "Erdei mályva virág", latin: "Malva sylvestris", csalad: "Malvaceae", kep: "Malvae_sylvestris_flos.jpg" },
    "Plantaginis lanceolatae folium": { csoport: "Szénhidrátok", magyardrog: "Lándzsás útifű levél", latin: "Plantago lanceolata", csalad: "Plantaginaceae", kep: "Plantaginis_lanceolatae_folium.jpg" },
    "Psyllii semen": { csoport: "Szénhidrátok", magyardrog: "Egyiptomi útifűmag", latin: "Plantago afra", csalad: "Plantaginaceae", kep: "Psyllii_semen.jpg" },
    "Salviae hispanicae semen": { csoport: "Szénhidrátok", magyardrog: "Aztékzsályamag (Chia)", latin: "Salvia hispanica", csalad: "Lamiaceae", kep: "Salviae_hispanicae_semen.jpg" },
    "Taraxaci officinalis radix": { csoport: "Szénhidrátok", magyardrog: "Pongyola pitypang gyökér", latin: "Taraxacum officinale", csalad: "Asteraceae", kep: "Taraxaci_officinalis_radix.jpg" },
    "Tiliae flos": { csoport: "Szénhidrátok", magyardrog: "Hársfavirág", latin: "Tilia cordata / platyphyllos", csalad: "Malvaceae", kep: "Tiliae_flos.jpg" },
    "Tragacantha": { csoport: "Szénhidrátok", magyardrog: "Tragakanta", latin: "Astragalus gummifer", csalad: "Fabaceae", kep: "Tragacantha.jpg" },
    "Trigonellae foenugraeci semen": { csoport: "Szénhidrátok", magyardrog: "Görögszénamag", latin: "Trigonella foenum-graecum", csalad: "Fabaceae", kep: "Trigonellae_foenugraeci_semen.jpg" },

    // ZSÍROS OLAJOK
    "Cucurbitae semen": { csoport: "Zsíros olajok", magyardrog: "Tökmag", latin: "Cucurbita pepo", csalad: "Cucurbitaceae", kep: "Cucurbitae_semen.jpg" },
    "Helianthi annui semen": { csoport: "Zsíros olajok", magyardrog: "Napraforgómag", latin: "Helianthus annuus", csalad: "Asteraceae", kep: "Helianthi_annui_semen.jpg" },
    "Papaveris semen": { csoport: "Zsíros olajok", magyardrog: "Mák", latin: "Papaver somniferum", csalad: "Papaveraceae", kep: "Papaveris_semen.jpg" },
    "Ricini semen": { csoport: "Zsíros olajok", magyardrog: "Ricinusmag", latin: "Ricinus communis", csalad: "Euphorbiaceae", kep: "Ricini_semen.jpg" },
    "Sesami semen": { csoport: "Zsíros olajok", magyardrog: "Szezámmag", latin: "Sesamum indicum", csalad: "Pedaliaceae", kep: "Sesami_semen.jpg" },
    "Soiae semen": { csoport: "Zsíros olajok", magyardrog: "Szójabab", latin: "Glycine max", csalad: "Fabaceae", kep: "Soiae_semen.jpg" },

    // NÖVÉNYI SAVAK, KÁVÉSAVSZÁRMAZÉKOK
    "Echinaceae purpureae herba": { csoport: "Növényi savak", magyardrog: "Bíbor kasvirág virágos hajtás", latin: "Echinacea purpurea", csalad: "Asteraceae", kep: "Echinaceae_purpureae_herba.jpg" },
    "Equiseti herba": { csoport: "Növényi savak", magyardrog: "Mezei zsurló meddő hajtás", latin: "Equisetum arvense", csalad: "Equisetaceae", kep: "Equiseti_herba.jpg" },
    "Hibisci sabdariffae flos": { csoport: "Növényi savak", magyardrog: "Szudáni hibiszkusz virágcsésze", latin: "Hibiscus sabdariffa", csalad: "Malvaceae", kep: "Hibisci_sabdariffae_flos.jpg" },
    "Hippophaeae fructus": { csoport: "Növényi savak", magyardrog: "Homoktövis termés", latin: "Hippophae rhamnoides", csalad: "Elaeagnaceae", kep: "Hippophaeae_fructus.jpg" },
    "Pulmonariae folium": { csoport: "Növényi savak", magyardrog: "Orvosi tüdőfű levél", latin: "Pulmonaria officinalis", csalad: "Boraginaceae", kep: "Pulmonariae_folium.jpg" },
    "Rosae pseudo-fructus": { csoport: "Növényi savak", magyardrog: "Csipkebogyó (vadrózsa áltermés)", latin: "Rosa canina", csalad: "Rosaceae", kep: "Rosae_pseudo-fructus.jpg" },
    "Rosmarini folium": { csoport: "Növényi savak", magyardrog: "Rozmaringlevél", latin: "Rosmarinus officinalis", csalad: "Lamiaceae", kep: "Rosmarini_folium.jpg" },

    // FENOLGLIKOZIDOK, KUMARINOK, LIGNÁNOK
    "Curcumae longae rhizoma": { csoport: "Fenoloidok", magyardrog: "Kurkuma gyöktörzs", latin: "Curcuma longa", csalad: "Zingiberaceae", kep: "Curcumae_longae_rhizoma.jpg" },
    "Meliloti herba": { csoport: "Fenoloidok", magyardrog: "Orvosi somkóró virágos hajtás", latin: "Melilotus officinalis", csalad: "Fabaceae", kep: "Meliloti_herba.jpg" },
    "Rutae herba": { csoport: "Fenoloidok", magyardrog: "Kerti ruta virágos hajtás", latin: "Ruta graveolens", csalad: "Rutaceae", kep: "Rutae_herba.jpg" },
    "Schisandrae chinensis fructus": { csoport: "Fenoloidok", magyardrog: "Kínai kúszómagnélia termés", latin: "Schisandra chinensis", csalad: "Schisandraceae", kep: "Schisandrae_chinensis_fructus.jpg" },
    "Uvae ursi folium": { csoport: "Fenoloidok", magyardrog: "Medveszőlőlevél", latin: "Arctostaphylos uva-ursi", csalad: "Ericaceae", kep: "Uvae_ursi_folium.jpg" },

    // FLAVONOIDOK
    "Aurantii amari epicarpium et mesocarpium": { csoport: "Flavonoidok", magyardrog: "Keserű narancs héj", latin: "Citrus aurantium", csalad: "Rutaceae", kep: "Aurantii_amari_epicarpium_et_mesocarpium.jpg" },
    "Betulae folium": { csoport: "Flavonoidok", magyardrog: "Nyírfalevél", latin: "Betula pendula", csalad: "Betulaceae", kep: "Betulae_folium.jpg" },
    "Crataegi folium cum flore": { csoport: "Flavonoidok", magyardrog: "Galagonya virágos ágvég", latin: "Crataegus monogyna", csalad: "Rosaceae", kep: "Crataegi_folium_cum_flore.jpg" },
    "Ginkgonis folium": { csoport: "Flavonoidok", magyardrog: "Páfrányfenyő levél", latin: "Ginkgo biloba", csalad: "Ginkgoaceae", kep: "Ginkgonis_folium.jpg" },
    "Hyperici herba": { csoport: "Flavonoidok", magyardrog: "Orbáncfű virágos hajtás", latin: "Hypericum perforatum", csalad: "Hypericaceae", kep: "Hyperici_herba.jpg" },
    "Sambuci flos": { csoport: "Flavonoidok", magyardrog: "Fekete bodza virág", latin: "Sambucus nigra", csalad: "Adoxaceae", kep: "Sambuci_flos.jpg" },
    "Silybi mariani fructus": { csoport: "Flavonoidok", magyardrog: "Máriatövis termés", latin: "Silybum marianum", csalad: "Asteraceae", kep: "Silybi_mariani_fructus.jpg" },
    "Solidaginis herba": { csoport: "Flavonoidok", magyardrog: "Aranyvessző virágos hajtás", latin: "Solidago virgaurea", csalad: "Asteraceae", kep: "Solidaginis_herba.jpg" },
    "Verbasci flos": { csoport: "Flavonoidok", magyardrog: "Ökörfarkkóró virág", latin: "Verbascum phlomoides", csalad: "Scrophulariaceae", kep: "Verbasci_flos.jpg" },

    // CSERZŐANYAGOK
    "Alchemillae herba": { csoport: "Cserzőanyagok", magyardrog: "Palástfű virágos hajtás", latin: "Alchemilla vulgaris", csalad: "Rosaceae", kep: "Alchemillae_herba.jpg" },
    "Cotini folium": { csoport: "Cserzőanyagok", magyardrog: "Cserszömörce levél", latin: "Cotinus coggygria", csalad: "Anacardiaceae", kep: "Cotini_folium.jpg" },
    "Quercus cortex": { csoport: "Cserzőanyagok", magyardrog: "Tölgyfakéreg", latin: "Quercus robur", csalad: "Fagaceae", kep: "Quercus_cortex.jpg" },
    "Ratanhiae radix": { csoport: "Cserzőanyagok", magyardrog: "Ratanhia-gyökér", latin: "Krameria triandra", csalad: "Krameriaceae", kep: "Ratanhiae_radix.jpg" },

    // ANTRAGLIKOZIDOK
    "Aloe capensis": { csoport: "Antraglikozidok", magyardrog: "Fokföldi aloé", latin: "Aloe ferox", csalad: "Asphodelaceae", kep: "Aloe_capensis.jpg" },
    "Frangulae cortex": { csoport: "Antraglikozidok", magyardrog: "Kutyabengekéreg", latin: "Frangula alnus", csalad: "Rhamnaceae", kep: "Frangulae_cortex.jpg" },
    "Sennae foliolum": { csoport: "Antraglikozidok", magyardrog: "Szenalevél", latin: "Cassia senna", csalad: "Fabaceae", kep: "Sennae_foliolum.jpg" },
    "Sennae fructus": { csoport: "Antraglikozidok", magyardrog: "Szenatermés", latin: "Cassia angustifolia", csalad: "Fabaceae", kep: "Sennae_fructus.jpg" },

    // TERPENOFENOLOIDOK
    "Cannabis herba": { csoport: "Terpenofenoloidok", magyardrog: "Kender virágos hajtás", latin: "Cannabis sativa", csalad: "Cannabaceae", kep: "Cannabis_herba.jpg" },
    "Lupuli flos": { csoport: "Terpenofenoloidok", magyardrog: "Komlótoboz", latin: "Humulus lupulus", csalad: "Cannabaceae", kep: "Lupuli_flos.jpg" },

    // ILLÓOLAJOK
    "Absinthii herba": { csoport: "Illóolajok", magyardrog: "Fehér üröm virágos hajtás", latin: "Artemisia absinthium", csalad: "Asteraceae", kep: "Absinthii_herba.jpg" },
    "Anisi fructus": { csoport: "Illóolajok", magyardrog: "Ánizstermés", latin: "Pimpinella anisum", csalad: "Apiaceae", kep: "Anisi_fructus.jpg" },
    "Carvi fructus": { csoport: "Illóolajok", magyardrog: "Konyhakömény termés", latin: "Carum carvi", csalad: "Apiaceae", kep: "Carvi_fructus.jpg" },
    "Caryophylli flos": { csoport: "Illóolajok", magyardrog: "Szegfűszeg", latin: "Syzygium aromaticum", csalad: "Myrtaceae", kep: "Caryophylli_flos.jpg" },
    "Cinnamomi cortex": { csoport: "Illóolajok", magyardrog: "Fahéjfa kéreg", latin: "Cinnamomum verum", csalad: "Lauraceae", kep: "Cinnamomi_cortex.jpg" },
    "Coriandri fructus": { csoport: "Illóolajok", magyardrog: "Koriandertermés", latin: "Coriandrum sativum", csalad: "Apiaceae", kep: "Coriandri_fructus.jpg" },
    "Foeniculi dulcis fructus": { csoport: "Illóolajok", magyardrog: "Édeskömény termés", latin: "Foeniculum vulgare var. dulce", csalad: "Apiaceae", kep: "Foeniculi_dulcis_fructus.jpg" },
    "Juniperi galbulus": { csoport: "Illóolajok", magyardrog: "Borókabogyó", latin: "Juniperus communis", csalad: "Cupressaceae", kep: "Juniperi_galbulus.jpg" },
    "Lavandulae flos": { csoport: "Illóolajok", magyardrog: "Levendulavirág", latin: "Lavandula angustifolia", csalad: "Lamiaceae", kep: "Lavandulae_flos.jpg" },
    "Matricariae flos": { csoport: "Illóolajok", magyardrog: "Kamillavirágzat", latin: "Matricaria recutita", csalad: "Asteraceae", kep: "Matricariae_flos.jpg" },
    "Menthae crispae folium": { csoport: "Illóolajok", magyardrog: "Fodormentalevél", latin: "Mentha spicata var. crispa", csalad: "Lamiaceae", kep: "Menthae_crispae_folium.jpg" },
    "Menthae piperitae folium": { csoport: "Illóolajok", magyardrog: "Borsmentalevél", latin: "Mentha x piperita", csalad: "Lamiaceae", kep: "Menthae_piperitae_folium.jpg" },
    "Millefolii herba": { csoport: "Illóolajok", magyardrog: "Cickafark virágos hajtás", latin: "Achillea millefolium", csalad: "Asteraceae", kep: "Millefolii_herba.jpg" },
    "Salviae officinalis folium": { csoport: "Illóolajok", magyardrog: "Orvosi zsálya levél", latin: "Salvia officinalis", csalad: "Lamiaceae", kep: "Salviae_officinalis_folium.jpg" },
    "Thymi herba": { csoport: "Illóolajok", magyardrog: "Kakukkfű virágos hajtás", latin: "Thymus vulgaris", csalad: "Lamiaceae", kep: "Thymi_herba.jpg" },

    // KESERŰANYAGOK, IRIDOIDOK
    "Cardui benedicti herba": { csoport: "Keserűanyagok", magyardrog: "Benedekfű virágos hajtás", latin: "Centaurea benedicta", csalad: "Asteraceae", kep: "Cardui_benedicti_herba.jpg" },
    "Centaurii herba": { csoport: "Keserűanyagok", magyardrog: "Kis ezerjófű virágos hajtás", latin: "Centaurium erythraea", csalad: "Gentianaceae", kep: "Centaurii_herba.jpg" },
    "Gentianae radix": { csoport: "Keserűanyagok", magyardrog: "Tárnicsgyökér", latin: "Gentiana lutea", csalad: "Gentianaceae", kep: "Gentianae_radix.jpg" },
    "Valerianae radix": { csoport: "Keserűanyagok", magyardrog: "Macskagyökér", latin: "Valeriana officinalis", csalad: "Caprifoliaceae", kep: "Valerianae_radix.jpg" },

    // TRITERPÉNSZÁRMAZÉKOK
    "Calendulae flos": { csoport: "Triterpének", magyardrog: "Körömvirág", latin: "Calendula officinalis", csalad: "Asteraceae", kep: "Calendulae_flos.jpg" },
    "Convallariae folium": { csoport: "Triterpének", magyardrog: "Gyöngyviráglevél", latin: "Convallaria majalis", csalad: "Asparagaceae", kep: "Convallariae_folium.jpg" },
    "Digitalis lanatae folium": { csoport: "Triterpének", magyardrog: "Gyapjas gyűszűvirág levél", latin: "Digitalis lanata", csalad: "Plantaginaceae", kep: "Digitalis_lanatae_folium.jpg" },
    "Ginseng radix": { csoport: "Triterpének", magyardrog: "Ginzenggyökér", latin: "Panax ginseng", csalad: "Araliaceae", kep: "Ginseng_radix.jpg" },
    "Hederae folium": { csoport: "Triterpének", magyardrog: "Borostyánlevél", latin: "Hedera helix", csalad: "Araliaceae", kep: "Hederae_folium.jpg" },
    "Hippocastani semen": { csoport: "Triterpének", magyardrog: "Vadgesztenyemag", latin: "Aesculus hippocastanum", csalad: "Sapindaceae", kep: "Hippocastani_semen.jpg" },
    "Liquiritiae radix": { csoport: "Triterpének", magyardrog: "Édesgyökér", latin: "Glycyrrhiza glabra", csalad: "Fabaceae", kep: "Liquiritiae_radix.jpg" },
    "Strophanthi semen": { csoport: "Triterpének", magyardrog: "Sztrófanthuszmag", latin: "Strophanthus kombe", csalad: "Apocynaceae", kep: "Strophanthi_semen.jpg" },

    // ALKALOIDOK
    "Belladonnae folium": { csoport: "Alkaloidok", magyardrog: "Nadragulyalevél", latin: "Atropa belladonna", csalad: "Solanaceae", kep: "Belladonnae_folium.jpg" },
    "Stramonii folium": { csoport: "Alkaloidok", magyardrog: "Csattanó maszlag levél", latin: "Datura stramonium", csalad: "Solanaceae", kep: "Stramonii_folium.jpg" },
    "Chelidonii herba": { csoport: "Alkaloidok", magyardrog: "Fecskefű virágos hajtás", latin: "Chelidonium majus", csalad: "Papaveraceae", kep: "Chelidonii_herba.jpg" },
    "Cinchonae cortex": { csoport: "Alkaloidok", magyardrog: "Kínafakéreg", latin: "Cinchona pubescens", csalad: "Rubiaceae", kep: "Cinchonae_cortex.jpg" },
    "Ipecacuanhae radix": { csoport: "Alkaloidok", magyardrog: "Hánytatógyökér", latin: "Carapichea ipecacuanha", csalad: "Rubiaceae", kep: "Ipecacuanhae_radix.jpg" },
    "Papaveris maturi fructus": { csoport: "Alkaloidok", magyardrog: "Mák (termésfal)", latin: "Papaver somniferum", csalad: "Papaveraceae", kep: "Papaveris_maturi_fructus.jpg" },
    "Secale cornutum": { csoport: "Alkaloidok", magyardrog: "Anyarozs", latin: "Claviceps purpurea", csalad: "Clavicipitaceae", kep: "Secale_cornutum.jpg" },
    "Strychni semen": { csoport: "Alkaloidok", magyardrog: "Ebvészmag", latin: "Strychnos nux-vomica", csalad: "Loganiaceae", kep: "Strychni_semen.jpg" },
    "Vincae minoris herba": { csoport: "Alkaloidok", magyardrog: "Kis télizöld virágos hajtás", latin: "Vinca minor", csalad: "Apocynaceae", kep: "Vincae_minoris_herba.jpg" },
    "Camelliae sinensis non fermentata folia": { csoport: "Alkaloidok", magyardrog: "Zöld tea levél", latin: "Camellia sinensis", csalad: "Theaceae", kep: "Camelliae_sinensis_non_fermentata_folia.jpg" },
    "Capsici fructus": { csoport: "Alkaloidok", magyardrog: "Paprikatermés", latin: "Capsicum annuum", csalad: "Solanaceae", kep: "Capsici_fructus.jpg" },
    "Coffeae semen": { csoport: "Alkaloidok", magyardrog: "Kávémag", latin: "Coffea arabica", csalad: "Rubiaceae", kep: "Coffeae_semen.jpg" },
    "Colae semen": { csoport: "Alkaloidok", magyardrog: "Kólamag", latin: "Cola nitida", csalad: "Malvaceae", kep: "Colae_semen.jpg" },
    "Colchici semen": { csoport: "Alkaloidok", magyardrog: "Őszi kikerics mag", latin: "Colchicum autumnale", csalad: "Colchicaceae", kep: "Colchici_semen.jpg" }
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
