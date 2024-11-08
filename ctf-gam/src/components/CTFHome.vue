<!-- src/components/CTFHome.vue -->
<template>
  <div>
    <h1>Bienvenue dans le CTF</h1>
    <p>Voici la liste des énigmes disponibles :</p>
    <ul>
      <li>
        <router-link to="/xss-challenge" class="submit-button">Enigme 1</router-link>
      </li>
      <!-- Ajoutez d'autres liens vers des énigmes ici -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CTFHome',
};
</script>

<style scoped>
/* Si des styles spécifiques sont nécessaires, vous pouvez les ajouter ici. */
</style>
