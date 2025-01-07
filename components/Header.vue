<template>
    <header>
        <div>PIDUN</div>
        <div class="menu">
            <button class="header-button" @click="go('mypage')">
                Min klasse
            </button>

            <button>
                <div class="avatar">JD</div>
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
const go = (to: string) => {
    navigateTo(to);
}
</script>

<style scoped>

.avatar {
    border-radius: 100%;
    background-color: white;
    padding: 0.4em;
    margin: 0px;
}

.menu {

}

.menu button{
    border: none;
    margin: 0px 0px 0px 1em;
    font-size: 1em;
    background: none;
}

header {
    max-height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--ancient-green);
    padding: 1rem;
    font-family: "DM Serif Text", serif;
}
</style>