<template>
    <header>
        <div>PIDUN</div>
        <div class="menu">
            <button>
                Min klasse
            </button>

            <button>
                Innstillinger
            </button>

            <button>
                Logg ut
            </button>
        </div>
    </header>
</template>

<style scoped>

.menu {

}

.menu button{
    border: none;
    margin: 0px 0px 0px 1em;
    font-size: 1em;
    background: none;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--ancient-green);
    padding: 1rem;
    font-family: "DM Serif Text", serif;
}
</style>