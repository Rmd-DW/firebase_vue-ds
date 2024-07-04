<template>
  <form @submit.prevent="addUser">
    <div>
      <label for="nombre">Nombre:</label>
      <input type="text" v-model="usuario.nombre" id="nombre" required>
    </div>
    <div>
      <label for="correo">Correo:</label>
      <input type="email" v-model="usuario.correo" id="correo" required>
    </div>
    <button type="submit">Agregar Usuario</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nombre: '',
        correo: ''
      }
    };
  },
  methods: {
    addUser() {
      this.$emit('agregar-usuario', this.usuario); 
      this.usuario = { nombre: '', correo: '' }; 
    }
  }
}
</script>

<style>
form {
  padding: 10px;
  margin: 10px;
  background-color: grey;
}

form input {
  margin: 0.5rem;
}

form  button {
    margin: 10px;
    padding: 10px 20px;
    background-color:rgb(197, 170, 14);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: rgb(223, 219, 6);
    color: black;
  }
</style>
