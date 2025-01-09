<template>
  <div>
    <h1>Helt kaos!</h1>

    <!-- Drag Source -->
    <div class="library">

      <div class="shelves">
        <div class="drop-area" @dragover.prevent @drop="onDrop('A')">
          <div class="letter">
            A
          </div>
          <div class="placed-books">
            <div class="placed-book" v-for="(value, index) in droppedItems['A']" :key="index">{{ value }}</div>
          </div>
        </div>
        <div class="drop-area" @dragover.prevent @drop="onDrop('B')">
          <div class="letter">
            B
          </div>
          <div class="placed-books">
            <div class="placed-book" v-for="(value, index) in droppedItems['B']" :key="index">{{ value }}</div>
          </div>
        </div>
        <div class="drop-area" @dragover.prevent @drop="onDrop('C')">
          <div class="dropped-values">
            <div class="letter">
              C
            </div>
            <div class="placed-books">
              <div class="placed-book" v-for="(value, index) in droppedItems['C']" :key="index">{{ value }}</div>
            </div>
          </div>
        </div>
        <div class="drop-area" @dragover.prevent @drop="onDrop('D')">
          <div class="letter">
            D
          </div>
          <div class="placed-books">
            <div class="placed-book" v-for="(value, index) in droppedItems['D']" :key="index">{{ value }}</div>
          </div>
        </div>
        <div class="drop-area" @dragover.prevent @drop="onDrop('E')">
          <div class="dropped-values">
            <div class="letter">
              E
            </div>
            <div class="placed-books">
              <div class="placed-book" v-for="(value, index) in droppedItems['E']" :key="index">{{ value }}</div>
            </div>
          </div>
        </div>
        <div class="drop-area" @dragover.prevent @drop="onDrop('F')">
          <div class="dropped-values">
            <div class="letter">
              F
            </div>
            <div class="placed-books">
              <div class="placed-book" v-for="(value, index) in droppedItems['F']" :key="index">{{ value }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-for="(item, index) in items" :key="index" class="draggable-box" draggable="true"
        @dragstart="onDragStart(item)">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const items = ref([
  'Lie, Frank',
  'Abu, Anne',
  'Clint, Jeff',
  'Barb, Jude',
  'Earl, John',
  'Brønd, Bjarne'
]);
const droppedItems = ref<Record<string, string[]>>({});
const currentItem = ref(null);
const restart = () => {
  items.value = ['Prøysen, Alf', 'Nesbø, Jo', 'Ragde, Anne B'];
  droppedItems.value = {}; // Reset droppedItems to an empty object
};

// Handle drag start
const onDragStart = (item: any) => {
  currentItem.value = item;
};


// Handle drop
const onDrop = (letter: string) => {
  if (currentItem.value) {
    // Add the dragged item to the droppedItems array
    if (!droppedItems.value[letter]) {
      droppedItems.value[letter] = [];
    }
    droppedItems.value[letter].push(currentItem.value);

    // Remove the item from the items array
    const index = items.value.indexOf(currentItem.value);
    if (index > -1) {
      items.value.splice(index, 1);
    }

    // Clear the currentItem reference
    currentItem.value = null;
  }
};

// Check if the droppedItems array is sorted

</script>

<style scoped>
.confused {
  width: 200px;
}

.library {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
}

.letter {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 2em;
  height: 1.5em;
  background-color: white;
  box-shadow: 2px 3px 3px black;
  transform: rotate(2DEG)
}

.draggable-box {
  height: 100px;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  background-color: #58261d;
  box-shadow: 2px 3px black;
  color: white;
  cursor: grab;
  border-radius: 5px;
  user-select: none;
}

.shelves {
display: grid; 
grid-template-columns: repeat(2, 1fr); 
grid-template-rows: repeat(4, 1fr); 
grid-column-gap: 0px;
grid-row-gap: 0px; 
}

.drop-area {
  position: relative;
  box-shadow: 2px 3px black;
  height: 2em;
  width: 12em;
  padding-top: 50px;
  padding-bottom: 50px;
  border: 4px solid #c07a2a;
  text-align: center;
  background-color: #593211;
}

.placed-books {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: bottom;
  gap: 2px;
}

.placed-book {
  overflow-wrap: break-word;
  background-color: #f0f0f0;
  width: 28px;
  height: 100px;
  border-radius: 5px;
  font-size: 14px;
}
</style>
