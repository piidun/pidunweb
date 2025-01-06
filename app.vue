<template>
  <div>
    <Header v-if="!isLandingPage"/>
    <div v-if="!isLandingPage" class="layout">
      <div>
        <NavBar />
      </div>
      <div>
        <main>
          <NuxtPage />
        </main>
      </div>
    </div>
    <div v-else>
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
  height: 100vh;
}

main {
  font-family: Roboto, sans-serif;
}
</style>
