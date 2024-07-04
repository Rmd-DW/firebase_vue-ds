<template>
  <div id="app">
    <h1>CRUD Usuarios</h1>
    
    <div class="container_funcional">
      <AddUser @agregar-usuario="agregarUsuario" />
      <CargarUser @cargar-usuario="cargarUsuarios" />
    </div>
    <div v-if="usuarios.length > 0" class="container_user">
      <div class="card" v-for="usuario in usuarios" :key="usuario.id">   
        <h4 class="card-title">{{ usuario.nombre }}</h4>
        <h5 class="card-title">{{ usuario.correo }}</h5> 
        <button class="btn_eliminar" @click="eliminarUsuario(usuario.id)">Eliminar Usuario</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import firebaseApp from './config/firebaseConfig.js';
import AddUser from './components/addUser.vue';
import CargarUser from './components/cargarUser.vue';

export default {
  components: {
    AddUser,
    CargarUser
  },
  data() {
    return {
      usuarios: []
    };
  },
  methods: {
    async cargarUsuarios() {
      try {
        const db = getFirestore(firebaseApp);
        const querySnapshot = await getDocs(collection(db, 'usuarios'));
        const usuariosArray = [];
        querySnapshot.forEach(doc => {
          usuariosArray.push({ id: doc.id, ...doc.data() });
        });
        this.usuarios = usuariosArray;
      } catch (error) {
        console.error('Error fetching Firestore data:', error);
      }
    },
    async agregarUsuario(nuevoUsuario) {
      try {
        const db = getFirestore(firebaseApp);
        const docRef = await addDoc(collection(db, 'usuarios'), nuevoUsuario);
        this.usuarios.push({ id: docRef.id, ...nuevoUsuario });
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    },
    async eliminarUsuario(id) {
      try {
        const db = getFirestore(firebaseApp);
        await deleteDoc(doc(db, 'usuarios', id));
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    }
  }
}
</script>

<style>
body {
  background-color: #242424;
}

#app {
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: white;
}

h4 {
  font-size: 1.5rem;
  font-weight: 600;
}

.card {
  height: 16rem;
  width: 18%;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  background-color: whitesmoke;
  border: 1px solid rgb(240, 198, 14);
  border-radius: 10px;
}

.container_funcional {
  display: flex;
  justify-content: center;
  border: 1px solid rgb(245, 210, 10);
  padding: 1rem;
  margin: 1rem;
}

.container_user {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #4d4d4d;
}

.btn_eliminar {
  background-color: rgb(190, 24, 24);
}

.btn_eliminar:hover{
  background-color: rgb(224, 19, 19);
}
</style>
