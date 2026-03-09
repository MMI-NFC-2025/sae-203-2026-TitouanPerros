import { getAllArtists,getAllScenes,getAllArtistsSorted,getArtistByID, getArtistsBySceneID,getArtistsBySceneName,upsertArtist } from "./backend.mjs";

/*// Test de la fonction getAllArtists
getAllArtists().then(artiste => {
    console.log("Liste de tous les artistes :");
    console.log(artiste);
}).catch(error => {
    console.error("Erreur lors de la récupération des artistes :", error);
});

// Test de la fonction getAllScenes
getAllScenes().then(scene => {
    console.log("Liste de toutes les scènes :");
    console.log(scene);
}).catch(error => {
    console.error("Erreur lors de la récupération des scènes :", error);
});

// Test de la fonction getAllArtistsSorted
getAllArtistsSorted().then(artiste => {
    console.log("Liste de tous les artistes triés par ordre alphabétique :");
    console.log(artiste);
}).catch(error => {
    console.error("Erreur lors de la récupération des artistes triés :", error);
});

// Test de la fonction getArtistByID
getArtistByID("yz66emqehkjpean").then(artiste => {
    console.log("Infos de l'artiste avec ID yz66emqehkjpean:");
    console.log(artiste);
}).catch(error => {
    console.error("Erreur lors de la récupération de l'artiste par ID :", error);
});

// Test de la fonction getArtistsBySceneID
getArtistsBySceneID("260vzw3osff9cjv").then(artistes => {
    console.log("Liste des artistes se produisant sur la scène avec ID 260vzw3osff9cjv :");
    console.log(artistes);
}).catch(error => {
    console.error("Erreur lors de la récupération des artistes par scène :", error);
});

//Test de la fonction getArtistsBySceneName
getArtistsBySceneName("Scène secondaire").then(artistes => {
    console.log("Liste des artistes se produisant sur la scène avec nom Scène secondaire :");
    console.log(artistes);
}).catch(error => {
    console.error("Erreur lors de la récupération des artistes par scène :", error);
});*/

//Test de la fonction upsertArtist
const newArtist = {
    "nom": "Nouvel artiste",
    "date": "2024-07-01",
    "field": "260vzw3osff9cjv"
};
upsertArtist(newArtist).then(artist => {
    console.log("Artiste mis à jour ou créé :");
    console.log(artist);
}).catch(error => {
    console.error("Erreur lors de la mise à jour ou création de l'artiste :", error);
});
