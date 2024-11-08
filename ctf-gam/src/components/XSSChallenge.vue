<!-- src/components/XSSChallenge.vue -->
<template>
    <div>
      <h1>Énigme 1</h1>
      <p>Essayez de découvrir la faille dans ce formulaire :</p>
      <form @submit.prevent="handleSubmit">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="name" class="input-field" />
        <button type="submit" class="submit-button">Envoyer</button>
      </form>
      <div v-html="submittedName" class="output" />
  
      <!-- Bouton de retour à l'accueil -->
      <router-link to="/" class="back-button">Retour à l'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        submittedName: ''
      };
    },
    methods: {
      handleSubmit() {
        this.submittedName = this.name;
        if (this.name.includes("<script>")) {
          setTimeout(() => {
            alert("Bein joué! Tu as trouvé une faille XSS! Voici le flag: {ClubCyber_4198}");
          }, 100);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles pour le bouton de retour */
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
  