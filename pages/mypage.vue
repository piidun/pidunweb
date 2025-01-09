<template>
    <div>
      <h1>Min klasse</h1>
      <h2>Trinn</h2>
      <label for="class-select">Velg gjeldende trinn</label>
      <select id="class-select" v-model="currentClass">
        <option value="1">1. klasse</option>
        <option value="2">2. klasse</option>
        <option value="3">3. klasse</option>
        <option value="4">4. klasse</option>
        <option value="5">5. klasse</option>
        <option value="6">6. klasse</option>
        <option value="7">7. klasse</option>
      </select>
  
      <h2>Elever</h2>
      <button class="button-primary" @click="showModal = true">
        Legg til elev <Icon name="uil:plus"></Icon>
      </button>
  
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
            <div>
            <Icon name="uil:user"></Icon>{{ student.name }} ({{ student.email }})
          </div>

          <div>
            <Icon name="uil:trash" class="trashcan" alt="Slett elev" @click="deleteStudent(student.id)"/>
          </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const currentClass = ref("1");
  const showModal = ref(false);
  const newStudent = ref({ name: '', email: '' });

  const url = computed(() => {
    return `/api/students/${currentClass.value}`;
  });

  const { data: students, refresh } = await useFetch(url);
  
  const deleteStudent = async (id: string) => {
    const result = await $fetch(`/api/students/${id}/delete`, {
  method: 'DELETE'
})
refresh();
}

  const addStudent = async () => {
    const result = await $fetch('/api/students/post', {
  method: 'POST',
  body: {
    name: newStudent.value.name,
    email: newStudent.value.email,
    class: currentClass.value,
    date_created: '2025-01-07'
  }
})
    if (newStudent.value.name && newStudent.value.email) {
      refresh();
      showModal.value = false;
    }
  };
  const closeModal = () => {
    showModal.value = false;
  };
  </script>
  
  <style scoped>
  .trashcan:hover {
    background-color: gray;
    cursor: pointer;
  }
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: solid 2px rgb(218, 219, 219);
    padding: 0.5em;
    margin: 0.5em 0;
    box-shadow: 2px 3px 4px rgba(74, 74, 74, 0.172);
  }

  .students-list li:hover {
    background-color: rgb(142, 251, 226);
    cursor: pointer;
  }
  </style>
  