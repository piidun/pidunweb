<template>
    <div>
      <h1>Mine klasser</h1>
      <div v-if="classes != undefined" class="w-1/2 border-2 border-black p-4 flex flex-col gap-10">
      <div v-for="c in classes" :key="c.id">
      <div class="flex flex-row justify-between"> 
        <div class="flex flex-col font-bold">
          Skole
          <span class="font-light">
            {{ c.class_name }}
          </span>
        </div>
        <div class="flex flex-col font-bold">
          Årstrinn <span class="font-light">{{ c.class_year }}</span>
        </div>
        <div class="flex flex-col font-bold">
          Klasse <span class="font-light">{{ c.class_letter }}</span>
        </div>
      </div>

      <div>
        <label for="student-list">Elevliste</label>
        <select id="student-list" class="border-2 border-black p-2 w-full">
          <option v-for="student in detailsById[c.id]" :key="student"> {{ student.user_email }}</option>
        </select>
      </div>
    </div>

      </div>
      <div class="flex flex-col gap-4 mt-20">
        <div>
          <label for="class-name">Skolens navn</label>
          <input v-model="currentClass.class_name" id="class-name" type="text" placeholder="Et gjenkjennelig navn for din skole" class="border-2 border-black p-2 w-1/2">
        </div>

        <div>
          <label for="class-number">Trinn</label>
          <select v-model="currentClass.class_year" id="class-number" class="border-2 border-black p-2 w-1/2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>
        </div>

        <div>
          <label for="class-letter">Klasse</label>
          <select v-model="currentClass.class_letter" id="class-letter" class="border-2 border-black p-2 w-1/2">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
        </div>
        <button class="button-primary w-1/2" @click="registerClass()">
          Registrer din klasse
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { SchoolClass } from '~/server/api/classes/types';
  import type { Student } from '~/server/api/students/types';

  const currentClass = ref<SchoolClass>({
  class_name: '',
  class_letter: 'A',
  class_year: 1,
  teacher_id: "",
  id: ""
});

  const { data: classes, refresh: refreshClasses } = await useFetch<SchoolClass[]>("api/classes/get");

    const detailsById = ref<Record<string, Student>>({});
  if (classes.value) {
  await Promise.all(
    classes.value.map(async (schoolClass: SchoolClass) => {
      const { data: detail } = await useFetch<Student>(`api/students/get/${schoolClass.id}`);
      if (detail.value) {
        detailsById.value[schoolClass.id] = detail.value;
      }
    })
  );
}

  const registerClass = async () => {
    console.log("tried")
    let result = $fetch('/api/classes/post', {
    method: 'POST',
    body: currentClass.value
  })
  refreshClasses();
  console.log(result)
  }

  </script>
  <style scoped>
  .trashcan:hover {
    background-color: gray;
    cursor: pointer;
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
  