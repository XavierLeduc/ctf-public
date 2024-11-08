<!-- src/components/PhishingChallenge.vue -->
<template>
    <div class="phishing-container">
      <h1>Gagnez un Cadeau ! 🎉</h1>
      <p>Remplissé le formulaire ci-dessous pour tenter de gagner un incroyable cadeaux !</p>
  
      <!-- Formulaire de participation factice -->
      <form @submit.prevent="handlePhishing">
        <label for="name">Nom complet</label>
        <input type="text" id="name" v-model="name" class="input-field" placeholder="Entrez votre nom complet" />
  
        <label for="email">Adresse e-mail</label>
        <input type="email" id="email" v-model="email" class="input-field" placeholder="Entrez votre e-maile" />
  
        <label for="phone">Numéro de téléphone</label>
        <input type="tel" id="phone" v-model="phone" class="input-field" placeholder="Entrez votre numéro de téléphone" />
  
        <!-- Boutons "Participer" et "Ignorer le cadeau" côte à côte -->
        <div class="button-container">
          <button type="submit" class="submit-button">Participer</button>
          <button type="button" @click="ignorePhishing" class="ignore-button">Ignorer le cadeau</button>
        </div>
      </form>
  
      <!-- Bouton de retour à l'accueil -->
      <router-link to="/" class="back-button">Retour à l'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        phone: ''
      };
    },
    methods: {
      handlePhishing() {
        alert("Alerte : Vous venez de vous faire piéger par une attaque de phishing ! Ne partagez jamais vos informations personnelles sur des formulaires suspects.");
      },
      ignorePhishing() {
        alert("Bravo pour votre vigilance ! Vous avez su ignorer une tentative de phishing. \n\nFlag: {ClubCyber_7438}");
      }
    }
  };
  </script>
  
  <style scoped>
/* Styles pour le formulaire de phishing */
.phishing-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #333;
}

p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

label {
  display: block;
  margin: 15px 0 5px;
  font-weight: bold;
  color: #333;
}

.input-field {
  width: calc(100% - 20px); /* Ajuste la largeur pour qu'elle ne dépasse pas */
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

/* Conteneur pour les boutons "Participer" et "Ignorer le cadeau" */
.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.submit-button {
  flex: 2;
  padding: 10px;
  background-color: #FF5722; /* Couleur incitative */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}

.submit-button:hover {
  background-color: #E64A19;
}

.ignore-button {
  flex: 1;
  padding: 10px; /* Alignement de la hauteur avec le bouton orange */
  background-color: #757575;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 10px; /* Alignement de la taille du texte avec le bouton orange */
  cursor: pointer;
}

.ignore-button:hover {
  background-color: #616161;
}

/* Styles pour le bouton de retour */
.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1B7EA6; /* Couleur bleue mc2i */
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.back-button:hover {
  background-color: #16668a;
}
</style>
  