<template>
  <div id="app">
    <header class="header">
      <img src="@/assets/mc2i.png" alt="Logo mc2i" class="logo" />
      <h2>Gamification - CTF</h2>
    </header>

    <div class="container">
      <h1>Formulaire avec vulnérabilité XSS</h1>
      <form @submit.prevent="handleSubmit">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="name" class="input-field" />

        <button type="submit" class="submit-button">Envoyer</button>
      </form>

      <div v-html="submittedName" class="output" />
    </div>
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

<style>
/* Utilisation de la police Lato */
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
  height: 100px;
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

h1 {
  color: #1B7EA6;
  font-size: 28px;
}

label {
  font-weight: bold;
  color: #1B7EA6;
  font-size: 18px;
}

.input-field {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 18px;
}

.submit-button {
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #EF3D4E;
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
