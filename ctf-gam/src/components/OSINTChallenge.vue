<!-- src/components/PasswordChallenge.vue -->
<template>
    <div>
      <h1>Mission ImpOSINT: Rogue Nation</h1>
      <h2>Ordinateur de Claire</h2>
      <form @submit.prevent="handleSubmit">
        <label for="password">Mot de passe :</label>
        <input type="text" id="password" v-model="password" class="input-field" />
        <button type="submit" class="submit-button">Envoyer</button>
      </form>
  
      <!-- Bouton de retour à l'accueil -->
      <router-link to="/" class="back-button">Retour à l'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        if (this.password === "Bytesafe1975") {
          alert("Bien joué! Grâce à l'OSINT, tu as trouvé le mot de passe de la DRH! \n\nFlag: {ClubCyber_1557}");
        } else {
          alert("Mot de passe incorrect, réessayez !");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles pour le bouton de retour, déjà appliqués dans l'énigme XSS */
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
  