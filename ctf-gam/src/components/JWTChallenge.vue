<!-- src/components/JWTChallenge.vue -->
<template>
    <div>
      <h1>Challenge: Décoder un Token JWT</h1>
      
      <!-- Affichage du token avec styles pour éviter qu'il dépasse -->
      <p><strong>Token JWT :</strong></p>
      <div class="token-container">{{ jwtToken }}</div>
      
      <form @submit.prevent="decodeToken">
        <label for="decoded-token">Décodage :</label>
        <input type="text" id="decoded-token" v-model="decodedToken" class="input-field" placeholder="Décodage..." />
        <button type="submit" class="submit-button">Décoder</button>
      </form>
  
      <!-- Bouton de retour à l'accueil -->
      <router-link to="/" class="back-button">Retour à l'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IntDbHViQ3liZXJfOTgzMX0iLCJpYXQiOjE1MTYyMzkwMjJ9.Ixvr0GVThg5nVQr-QbuqYhiy-xxFvpE4zHvdTqe8OzQ',
        decodedToken: ''
      };
    },
    methods: {
      decodeToken() {
        // Ajoute ici la logique pour décoder le token JWT
        alert("Décodage du token en cours...");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Container pour afficher le token */
  .token-container {
    max-width: 100%;
    word-wrap: break-word; /* Permet de casser les lignes longues */
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    overflow-x: auto; /* Active un scroll horizontal si le texte est trop long */
  }
  
  /* Option 2 : Si tu veux couper le texte avec des points de suspension, remplace par ces propriétés */
  /*
  .token-container {
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
  }
  */
  
  .input-field {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 18px;
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
  