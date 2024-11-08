<!-- src/components/HashChallenge.vue -->
<template>
    <div>
      <h1>Dans l'Ombre du Hachage</h1>
      <p><strong>Mot de passe de l'admin hashé :</strong> {{ md5Hash }}</p>
  
      <form @submit.prevent="checkPassword">
      <label for="password">Mot de passe :</label>
      <input type="text" id="password" v-model="passwordAttempt" class="input-field" placeholder="Entrez le mot de passe" />
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
      md5Hash: "QWZ0ZXJXb3JrMjAyNA==", // Hash Base64 pour "AfterWork2024"
      passwordAttempt: ''
    };
  },
  methods: {
    checkPassword() {
      // Vérifiez si le mot de passe est correct
      const originalPassword = "AfterWork2024"; // Le mot de passe qui génère le hash
      if (this.passwordAttempt === originalPassword) {
        alert("Bien joué! Tu as déchiffré le mot de passe de l'admin! \n\nFlag: {ClubCyber_7852}");
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
  