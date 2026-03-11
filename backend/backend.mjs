import PocketBase from 'pocketbase';
const pb = new PocketBase('https://flyingtapfest.titouan-perros.fr:443');

//Fonction 1 : retourne la liste de tous les artistes triés par date de représentation
export async function getAllArtists() {
    try{
        const artists = await pb.collection('artiste').getFullList({
            sort: 'date',
        });
        return artists;
    } catch (error) {
        console.error('Erreur lors de la récupération des artistes :', error);
    }
}

//Fonction 2 : retourne la liste de toutes les scènes triées par nom
export async function getAllScenes() {
    try{
        const scenes = await pb.collection('scene').getFullList({
            sort: 'nom',
        });
        return scenes;
    } catch (error) {
        console.error('Erreur lors de la récupération des scènes :', error);
    }
}

//Fonction 3 : retourne la liste de tous les artistes triés par ordre alphabétique
export async function getAllArtistsSorted() {
    try{
        const artists = await pb.collection('artiste').getFullList({
            sort: 'nom',
        });
        return artists;
    } catch (error) {
        console.error('Erreur lors de la récupération des artistes :', error);
    }
}

//Fonction 4 : retourne les infos d'un artiste à partir de son ID
export async function getArtistByID(id) {
    try{
        const artist = await pb.collection('artiste').getOne(id);
        return artist;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'artiste :', error);
    }
}

//Fonction 5 : retourne les infos d'une scène à partir de son ID
export async function getSceneByID(id) {
    try{
        const scene = await pb.collection('scene').getOne(id);
        return scene;
    } catch (error) {
        console.error('Erreur lors de la récupération de la scène :', error);
    }  
}

//Fonction 6 : retourne tous les artistes se produisant sur une scène donnée par son id, triés par date
export async function getArtistsBySceneID(sceneID) {
    try{
        const artists = await pb.collection('artiste').getFullList({
            filter: `field = "${sceneID}"`,
            sort: 'date',
        });
        return artists;
    } catch (error) {
        console.error('Erreur lors de la récupération des artistes :', error);
    }
}
//Fonction 7 : retourne tous les artistes se produisant sur une scène donnée par son nom, triés par date
export async function getArtistsBySceneName(sceneName) {
    try{
        const artists = await pb.collection('artiste').getFullList({
            filter: `scene = "${sceneName}"`,
            sort: 'date',
        });
        return artists;
    } catch (error) {
        console.error('Erreur lors de la récupération des artistes :', error);
    }
}

//Fonction 8 : permet d'ajouter ou modifier les informations d'un artiste ou d'une scène
export async function upsertArtist(artist) {
    try{
        const record = await pb.collection('artiste').create(artist);
        return record;
    } catch (error) {
        console.error('Erreur lors de l\'ajout ou de la modification de l\'artiste :', error);
    }
}

//Fonction pour le PBimage
export function getFileURL(record, field, thumb) {
  return field ? pb.files.getURL(record, field, { thumb }) : null;
}

// Formate l'heure depuis une date PocketBase → "18 h" ou "18h30"
export function formatHeure(dateStr) {
  const d = new Date(dateStr);
  const h = d.getHours();
  const min = d.getMinutes();
  return min > 0 ? `${h}h${String(min).padStart(2, '0')}` : `${h} h`;
}

// Formate le jour depuis une date PocketBase → "samedi 7 juin"
export function formatJour(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

// Fonction 9 : retourne un artiste à partir de son nom exact
export async function getArtistByName(nom) {
  try {
    const artist = await pb.collection('artiste').getFirstListItem(`nom = "${nom}"`);
    return artist;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'artiste par nom :', error);
    return null;
  }
}

// Convertit un nom en slug URL-friendly : "Melinda Rebék" → "melinda-rebek"
export function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Fonction 10 : enregistre un message de contact dans PocketBase
export async function submitContact({ nom, email, sujet, message }) {
  try {
    const record = await pb.collection('utilisateur').create({ Nom: nom, Mail: email, Sujet: sujet, Message: message });
    return { success: true, record };
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message :', error);
    return { success: false, error: error.message };
  }
}