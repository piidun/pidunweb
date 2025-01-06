<template>
    <div class="content">
    <div class="landing-header">
        <div>
        <h1>PIDUN!</h1>
        <p>Et interaktivt, digitalt læreverk for norskfaget</p>
    </div>
</div>

<div class="info-bar">
<div class="info">
    <img src="/assets/img/illustration1.webp">
    Oppgaver basert på læreplanmål i norsk.
</div>

<div class="info">
    <img src="/assets/img/illustration1.webp">
    Logg inn enkelt med feide og opprett din klasse.
</div>

<div class="info">
    <img src="/assets/img/illustration1.webp">
    Start aktiviteter og se elevenes fremgang oppdatert i sanntid.
</div>
</div>
<div class="bottom"><p>Meld din interesse som forsøksklasse</p></div>

    </div>
</template>
<style scoped>


.bottom {
    padding: 4em;
}

.bottom p {
    text-align: center;
}

.info {
    width: 20em;
    color: black;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: -50px;
    padding-bottom: 10px;
    border-radius: 4px;
    border-style: solid;
    border-color:#c6c6c6;
    box-shadow: 5px 7px 25px -11px rgba(0,0,0,0.75);
    border-width: 1px;
}

.info img {
    width: 100%;
}

.info-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.landing-header {
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: Roboto, sans-serif;
    font-size: 1.5rem;
    text-align: center;
  }
</style>