<template>
    <div>
      <!-- Drag Source -->
      <div
        v-for="(item, index) in items"
        :key="index"
        class="draggable-box"
        draggable="true"
        @dragstart="onDragStart(item)"
      >
        {{ item }}
      </div>
  
      <!-- Drop Target -->
      <div
        class="drop-area"
        @dragover.prevent
        @drop="onDrop"
      >
        Drop here
      </div>
  
      <!-- Dropped Values -->
      <div class="dropped-values">
        <h3>Dropped Items:</h3>
        <ul>
          <li v-for="(value, index) in droppedItems" :key="index">{{ value }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Array of items to drag
  const items = ref(['Box 1', 'Box 2', 'Box 3']);
  
  // Array to store dropped items
  const droppedItems = ref([]);
  
  // Store the dragged item temporarily
  const currentItem = ref(null);
  
  // Handle drag start
  const onDragStart = (item) => {
    currentItem.value = item;
  };
  
  // Handle drop
  const onDrop = () => {
    if (currentItem.value) {
      droppedItems.value.push(currentItem.value);
      currentItem.value = null; // Clear current item after drop
    }
  };
  </script>
  
  <style scoped>
  .draggable-box {
    display: inline-block;
    padding: 10px;
    margin: 10px;
    background-color: #4caf50;
    color: white;
    cursor: grab;
    border-radius: 5px;
    user-select: none;
  }
  
  .drop-area {
    margin: 20px 0;
    padding: 50px;
    border: 2px dashed #2196f3;
    text-align: center;
    background-color: #e3f2fd;
  }
  
  .dropped-values {
    margin-top: 20px;
  }
  
  .dropped-values ul {
    list-style-type: none;
    padding: 0;
  }
  
  .dropped-values li {
    background-color: #f0f0f0;
    margin: 5px 0;
    padding: 5px 10px;
    border-radius: 5px;
  }
  </style>
  