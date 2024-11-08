<!-- src/components/Home.vue -->
<template>
    <div>
      <h1>Bienvenue dans le CTF</h1>
      <p>Voici la liste des énigmes disponibles :</p>
      <ul>
        <li>
          <router-link to="/xss-challenge">Faille XSS</router-link>
        </li>
        <!-- Ajoutez d'autres liens vers des énigmes ici -->
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  h1 {
    color: #1B7EA6;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
  }
  </style>
  