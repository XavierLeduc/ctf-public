<!-- src/components/CTFHome.vue -->
<template>
  <div>
    <h1>Bienvenue dans le CTF</h1>
    <p>Voici la liste des énigmes disponibles :</p>
    <ul>
      <li>
        <router-link to="/xss-challenge" class="submit-button">L'Écho du Script</router-link>
      </li>
      <li>
        <router-link to="/osint-challenge" class="submit-button">Mission ImpOSINT: Rogue Nation</router-link>
      </li>
      <li>
        <router-link to="/sql-challenge" class="submit-button">Injection Fatale</router-link>
      </li>
      <li>
        <router-link to="/hash-challenge" class="submit-button">Dans l'Ombre du Hachage</router-link>
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
/* Styles pour les boutons de la page d'accueil */
.submit-button {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #EF3D4E;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.submit-button:hover {
  background-color: #d93544;
}
</style>
