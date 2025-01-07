<template>
    <div>
      <h1>Min klasse</h1>
      
      <h2>Trinn</h2>
      <label for="class-select">Velg gjeldende trinn</label>
      <select id="class-select">
        <option>1. klasse</option>
        <option>2. klasse</option>
        <option>3. klasse</option>
        <option selected>4. klasse</option>
        <option>5. klasse</option>
        <option>6. klasse</option>
        <option>7. klasse</option>
      </select>
  
      <h2>Elever</h2>
      <button class="button-primary" @click="showModal = true">
        Legg til elev <Icon name="uil:plus"></Icon>
      </button>
  
      <!-- Modal -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h3>Legg til elev</h3>
          <form @submit.prevent="addStudent">
            <label for="student-name">Navn:</label>
            <input id="student-name" v-model="newStudent.name" required />
  
            <label for="student-email">E-post:</label>
            <input id="student-email" type="email" v-model="newStudent.email" required />
  
            <button type="submit" class="button-primary">Legg til</button>
            <button type="button" @click="closeModal" class="button-secondary">Avbryt</button>
          </form>
        </div>
      </div>
  
      <h3 v-if="students.length == 0">Ingen elever registrert.</h3>
      <div v-if="students.length > 0" class="students-list">
        <h3>Registrerte elever:</h3>
        <ul>
          <li v-for="(student, index) in students" :key="index">
            <Icon name="uil:user"></Icon>{{ student.name }} ({{ student.email }})
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const showModal = ref(false);
  const newStudent = ref({ name: '', email: '' });
  const { data: students } = useFetch('/api/db')
  
  const addStudent = async () => {
    const result = await $fetch('/api/post', {
  method: 'POST',
  body: {
    name: newStudent.value.name,
    email: newStudent.value.email,
    class: 4,
    date_created: '2025-01-07'
  }
})

    if (newStudent.value.name && newStudent.value.email) {
      students.value.push({ ...newStudent.value });
      newStudent.value = { name: '', email: '' };
      showModal.value = false;
    }
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  </script>
  
  <style scoped>
  input {
    width: 100%;
    font-size: 20px;
  }
  select {
    padding: 0.5em;
    width: 20em;
  }
  
  label {
    display: block;
    margin-bottom: 0.5em;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    padding: 2em;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    width: 50%;
  }
  
  .students-list {
    margin-top: 1em;
  }
  
  .students-list ul {
    padding: 0;
    list-style: none;
  }
  
  .students-list li {
    margin: 0.5em 0;
  }
  </style>
  