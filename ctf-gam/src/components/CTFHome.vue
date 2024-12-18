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
      <li>
        <router-link to="/clickjacking-challenge" class="submit-button">L'Appât du Clic</router-link>
      </li>
      <li>
        <router-link to="/phi5hing-challenge" class="submit-button">Finir le CTF</router-link>
      </li>
      <li>
        <router-link to="/jwt-challenge" class="submit-button">Décodeur de Token JWT</router-link>
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
  display: block;
  width: 90%; /* Ajuste la largeur à 90% du conteneur pour les petits écrans */
  max-width: 300px; /* Limite la largeur maximale des boutons */
  margin: 10px auto; /* Centre les boutons */
  padding: 10px 15px;
  background-color: #EF3D4E;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px; /* Police un peu plus petite pour mobile */
  cursor: pointer;
  text-align: center;
  word-wrap: break-word; /* Permet de couper les mots longs */
  white-space: normal; /* Autorise les retours à la ligne pour le texte */
}

.submit-button:hover {
  background-color: #d93544;
}

/* Media Query pour petits écrans */
@media (max-width: 600px) {
  .submit-button {
    font-size: 14px; /* Taille de police adaptée pour le mobile */
    padding: 8px 12px; /* Moins d'espacement pour économiser de l'espace */
  }
}
</style>
