<template>
    <div class="nav-bar">
        <button class="nav-item">
            <span class="nav-icon"><Icon name="uil:basketball-hoop" size="1.5em"/></span>
            <span class="nav-text">Aktiviteter</span>
        </button>
        <button class="nav-item" @click="go('/assignments')">
            <span class="nav-icon"><Icon name="uil:list-ol-alt" size="1.5em"/></span>
            <span class="nav-text">Oppgaver</span>
        </button>
        <button class="nav-item">
            <span class="nav-icon"><Icon name="uil:play" size="1.5em"/></span>
            <span class="nav-text">Animasjoner</span>
        </button>
        <button class="nav-item">
            <span class="nav-icon"><Icon name="uil:book-alt" size="1.5em"/></span>
            <span class="nav-text">Læreplanmål</span>
        </button>
    </div>
</template>

<script setup lang="ts">
const go = async (to: string) => {
    await navigateTo(to);
}
</script>

<style scoped>
.nav-bar {
    width: 15rem;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.nav-item {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 0.5rem;
    width: 90%;
    text-align: left;
    background: none;
    border: none;
    color: #303030;
    font-family: Roboto, sans-serif;
}

.nav-item:hover {
    background-color: lightblue;
    cursor: pointer;
}

.nav-icon {
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
}

.nav-text {
    flex: 1;
    font-size: 1.5em;
    color: #5d5d5d;

}
</style>
