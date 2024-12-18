<!-- src/components/JWTChallenge.vue -->
<template>
    <div>
      <h1>Jason WT</h1>
      
      <!-- Affichage du token avec styles pour éviter qu'il dépasse -->
      <p><strong>Token JWT de l'admin qui s'est retrouvé entre vos mains :</strong></p>
      <div class="token-container">{{ jwtToken }}</div>
      
      <form @submit.prevent="validatePassword">
        <label for="password-input">Entrez le mot de passe trouvé :</label>
        <input type="password" id="password-input" v-model="password" class="input-field" placeholder="Mot de passe..." />
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
      jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5PRUwyMDI0IiwiaWF0IjoxNTE2MjM5MDIyfQ.0EcmdYlcDu_0iIdcy6d8QVIVfO-UBraWbZAWgwDJiok',
      password: '',  // Nouveau champ pour le mot de passe
      correctPassword: 'NOEL2024', // Le mot de passe à trouver
      flag: '{ClubCyber4533}' // Le flag à afficher
    };
  },
  methods: {
    validatePassword() {
      if (this.password === this.correctPassword) {
        // Si le mot de passe est correct, afficher une pop-up avec le flag
        alert(`Félicitations ! Voici votre flag : ${this.flag}`);
      } else {
        // Si le mot de passe est incorrect
        alert("Mot de passe incorrect, veuillez réessayer.");
      }
    }
  }
};
</script>

<style scoped>
/* Container pour afficher le token */
.token-container {
  max-width: 100%;
  word-wrap: break-word; /* Permet de casser les lignes longues */
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow-x: auto; /* Active un scroll horizontal si le texte est trop long */
}

/* Styles pour le champ de mot de passe */
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
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.submit-button:hover {
  background-color: #218838;
}

/* Styles pour le bouton de retour */
.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1B7EA6;
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
