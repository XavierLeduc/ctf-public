<!-- src/components/XSSChallenge.vue -->
<template>
    <div>
      <h1>Énigme XSS</h1>
      <p>Essayez de découvrir la faille XSS dans ce formulaire :</p>
      <form @submit.prevent="handleSubmit">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="name" class="input-field" />
        <button type="submit" class="submit-button">Envoyer</button>
      </form>
      <div v-html="submittedName" class="output" />
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
            alert("Flag: CTF_1234");
          }, 100);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Vos styles pour l'énigme XSS */
  </style>
  