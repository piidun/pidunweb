<template>
    <div class="task">
      <slot></slot>
      <Icon name="uil:arrow-right" class="arrow-icon" />
    </div>
  </template>
  
  <style scoped>
  .task {
    font-size: 1.5em;
    margin-top: 1em;
    padding: 0.2em;
    display: flex; /* Use flexbox */
    align-items: center; /* Vertically align items */
    justify-content: space-between;
  }
  
  .task:hover {
    background-color: lightblue;
  }
  
  .arrow-icon {
    font-size: 1.5em; /* Adjust size of the icon */
  }
  </style>
  