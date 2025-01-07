<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    border-style: solid;
    border-width: 2px;
    box-shadow: 2px 3px;
    padding: 2rem;
    margin-top: 1rem;
    background-color: white;
}
</style>