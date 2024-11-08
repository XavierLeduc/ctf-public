<!-- src/components/SQLInjectionChallenge.vue -->
<template>
    <div>
      <h1>Injection Fatale</h1>
  
      <!-- Formulaire pour entrer le nom d'utilisateur -->
      <form @submit.prevent="checkLogin">
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" id="username" v-model="username" class="input-field" placeholder="admin" disabled/>
      </form>
  
      <!-- Formulaire pour entrer le mot de passe -->
      <form @submit.prevent="checkLogin">
        <label for="password">Mot de passe :</label>
        <input type="text" id="password" v-model="password" class="input-field" placeholder="Entrez le mot de passe" />
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
        username: '',
        password: ''
      };
    },
    methods: {
      checkLogin() {
        // Expression régulière pour détecter une injection SQL typique
        const sqlInjectionPattern = /('|")?or\1?1\1?=\1?1/i;
        if (this.password.match(sqlInjectionPattern)) {
          alert("Bien joué! Tu as injecté du code malveillant grâce à une injection SQL! Flag: {ClubCyber_5239}");
        } else {
          alert("Mot de passe incorrect, réessayez !");
        }
      }
    }
  };
  </script>
  
  <style scoped>
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
  