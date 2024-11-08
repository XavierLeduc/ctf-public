<!-- src/components/ClickjackingChallenge.vue -->
<template>
    <div>
      <h1>L'Appât du Clic</h1>
      <!-- Bouton visible qui donne le flag -->
      <button @click="showFlag" :disabled="!buttonEnabled" class="real-button">
        Obtenir le Flag
      </button>
  
      <!-- Bouton de retour à l'accueil -->
      <router-link to="/" class="back-button">Retour à l'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        buttonEnabled: false,
        flagShown: false,
        clickjacked: false, // Variable pour détecter le clickjacking
      };
    },
    methods: {
      showFlag() {
        if (this.buttonEnabled) {
          alert("Comme tu as pu le voir, tu viens de faire face à une attaque de clickjacking! \n\nFlag: {ClubCyber_9125}");
          this.flagShown = true;
        } else {
          // Si le bouton est cliqué avant d'être activé, l'utilisateur vient de se faire avoir
          alert("Vous venez de vous faire avoir par une attaque de clickjacking !");
          this.clickjacked = true;
        }
      }
    },
    mounted() {
      // Activer le bouton après un délai (3 secondes par exemple)
      setTimeout(() => {
        this.buttonEnabled = true;
      }, 3000); // 3000 ms = 3 secondes
    }
  };
  </script>
  
  <style scoped>
  /* Style pour le bouton "réel" */
  .real-button {
    position: relative;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    z-index: 1;
    margin-top: 20px;
  }
  
  .real-button:disabled {
    background-color: #a5d6a7;
    cursor: not-allowed;
  }
  
  .real-button:hover:enabled {
    background-color: #45a049;
  }
  
  /* Pseudo-élément :before pour simuler l'overlay de clickjacking */
  .real-button::before {
    content: "Cliquez ici pour obtenir un accès spécial!";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent */
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border-radius: 4px;
    z-index: 2;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  
  /* Cacher l'overlay après le délai (3 secondes) */
  .real-button:enabled::before {
    display: none;
  }
  
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
  