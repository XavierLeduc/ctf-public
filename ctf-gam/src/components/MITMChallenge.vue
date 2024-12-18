<template>
    <div>
      <h1>MenInMiddle</h1>
      
      <!-- Affichage des logs -->
      <div class="logs-container">
        <p><strong>Voici les logs capturés :</strong></p>
        <pre>{{ logs }}</pre>
      </div>
  
      <!-- Champ pour entrer le mot de passe trouvé -->
      <form @submit.prevent="submitPassword">
        <label for="password">Entrez le mot de passe trouvé :</label>
        <input type="text" id="password" v-model="enteredPassword" class="input-field" placeholder="Mot de passe..." />
        <button type="submit" class="submit-button">Valider</button>
      </form>
  
      <!-- Bouton de retour à l'accueil -->
      <router-link to="/" class="back-button">Retour à l'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        logs: `172.30.252.11 - - [Dec 23 2024, 15:15:07] "POST /api/users HTTP/1.1" 404 7707 "https://www.twitter.com" "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0"
  219.32.217.52 - - [Dec 24 2024, 03:12:29] "DELETE /products/category/electronics HTTP/1.1" 304 0 "https://www.example.com" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
  217.99.115.191 - - [Dec 18 2024, 17:36:35] "GET /cart HTTP/1.1" 200 7973 "-" "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1"
  69.155.167.191 - - [Dec 24 2024, 16:21:53] "GET /?sort=price_desc&page=2 HTTP/1.1" 500 10110 "{DixitCyber2024}" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15"
  190.93.181.194 - - [Dec 19 2024, 20:25:45] "GET /contact?q=search+term&limit=20 HTTP/1.1" 404 3935 "-" "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1"`,
        enteredPassword: '' // Champ pour stocker le mot de passe entré
      };
    },
    methods: {
      submitPassword() {
        // Vérifie si le mot de passe entré est correct
        if (this.enteredPassword === 'DixitCyber2024') {
          alert('Félicitations ! Voici le flag : {ClubCyber_5884}');
        } else {
          alert('Mot de passe incorrect, essayez encore !');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles pour le container des logs */
  .logs-container {
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    max-height: 300px;
    overflow-y: auto;
  }
  
  /* Styles pour le champ de saisie */
  .input-field {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 18px;
  }
  
  /* Styles pour le bouton de validation */
  .submit-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  
  /* Styles pour le bouton de retour */
  .back-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #1B7EA6; /* Couleur bleue */
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
  