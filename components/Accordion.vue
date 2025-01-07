<template>
    <div class="accordion">
      <div class="accordion-header" @click="toggleVisibility">
        <h3>{{ title }}</h3>
        <button class="toggle-button">
          {{ isVisible ? '-' : '+' }}
        </button>
      </div>
      <div v-if="isVisible" class="accordion-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

    const props = defineProps(['title'])
  const isVisible = ref(false);
  
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  </script>
  
  <style scoped>
  .accordion {
    border-style: solid;
    border-width: 2px;
    box-shadow: 2px 3px;
    padding: 1rem;
    margin-top: 1rem;
    background-color: white;
    cursor: pointer;
  }
  
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .accordion-header h3 {
    margin: 0;
  }
  
  .accordion-content {

    padding: 1rem 0;
  }
  
  .toggle-button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #333;
  }
  </style>