<!-- src/App.vue -->
<template>
  <div id="app">
    <header class="header">
      <img src="@/assets/mc2i.png" alt="Logo mc2i" class="logo" />
      <h2>Gamification - CTF</h2>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Styles globaux pour uniformiser l'apparence de l'application */

* {
  font-family: 'Lato', sans-serif;
}

#app {
  text-align: center;
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.logo {
  height: 70px;
  width: auto;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Styles des titres */
h1, h2 {
  color: #1B7EA6; /* Couleur bleue mc2i */
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

/* Style des labels et textes */
label {
  font-weight: bold;
  color: #1B7EA6;
  font-size: 18px;
}

/* Styles des champs de saisie */
.input-field {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 18px;
}

/* Styles des boutons */
.submit-button {
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #EF3D4E; /* Couleur rose mc2i */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #d93544;
}

.output {
  margin-top: 20px;
  font-size: 20px;
  color: #EF3D4E;
  border-top: 1px solid #ddd;
  padding-top: 10px;
}
</style>
