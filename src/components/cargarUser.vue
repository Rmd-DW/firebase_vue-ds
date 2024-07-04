<template>
    <button @click="cargarUsuarios">Cargar Usuarios</button>
  </template>
  
  <script>
  export default {
    methods: {
      cargarUsuarios() {
        this.$emit('cargar-usuario');
      }
    }
  }
  </script>
  
  <style>
  button {
    margin: 10px;
    padding: 10px 20px;
    background-color: rgb(184, 157, 8);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: rgb(245, 222, 10);;
  }
  </style>
  