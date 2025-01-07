<template>
  <div>
    <Header v-if="!isLandingPage"/>
    <div v-if="!isLandingPage" class="layout">
      <div>
        <NavBar />
      </div>
        <main>
          <NuxtPage />
        </main>
    </div>

    <Footer v-if="!isLandingPage"></Footer>

    <div v-if="isLandingPage">
      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const isLandingPage = route.name === 'landingpage';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;

}

main {
  font-family: Roboto, sans-serif;
  max-width: 100vw; /* Ensures content does not exceed parent width */
  width: 100%; /* Matches the parent container */
  padding: 1rem; /* Optional padding for better spacing */
  box-sizing: border-box; /* Include padding in width calculation */
}
</style>
