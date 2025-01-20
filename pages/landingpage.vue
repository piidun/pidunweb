<template>
    <div class="content">
        <div class="landing-header">
            <div>
                <h1>PiDUN!</h1>
                <p>Et interaktivt, digitalt læreverk for norskfaget<span class="blink">|</span></p>
            </div>
        </div>

        <div class="info-bar">
            <div class="info">
                <div>
                    <div><img class="icon-illustration" src="assets/illustrations/note.svg"></div>
                </div>
                <div>Oppgaver basert på læreplanmål i norsk</div>
            </div>

            <div class="info">
                <div><img class="icon-illustration" src="assets/illustrations/shield-2.svg"></div>
                <div>Logg inn enkelt og trygt med feide</div>
            </div>

            <div class="info">
                <div><img class="icon-illustration" src="assets/illustrations/dashboard-2.svg"></div>
                <div>Start aktiviteter og se elevenes fremgang.</div>
            </div>
        </div>

        <div class="section1">
            Pidun lar deg tildele oppgaver til hele klassen - eller individuelt!
        </div>

        <div class="section2">
            Bevar oversikten over arbeidet som elevene har levert gjennom året.
        </div>

        <div class="bottom">
            <p>Kommer i 2025</p>
        </div>

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: bottom;
    width: 100%;
    color: black;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgba(255, 255, 255, 1);
    height: 300px;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border:solid 3px rgb(65, 59, 59);
}

.icon-illustration {
    width: 8em;
    height: 8em;
    margin: 2em;
}

.info img {
    width: 80%;
    opacity: 0.8;
}

.info-bar {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-top: -50px;
}

.info-bar div {
    width: 20em;
}

.section1 {
    z-index: 100;
    margin-top: -80px;
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, #1f3852 0%, #53daff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 0px 15px 225px 15px/15px 0px 15px 0px;
    border:solid 3px rgb(65, 59, 59);
}

.section2 {
    width: 100%;
    height: 800px;
    background: url("/assets/img/students-working.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -300px;
    display: flex;
    padding-top: 2em;
    align-items: top;
    justify-content: center;
    color: black;
    font-size: 1.5rem;
    text-align: center;
}

.landing-header {
        width: 100%;
        height: 300px;
        background: linear-gradient(124deg, rgba(244,244,244,0.7) 0%, rgba(170,213,215,0.7) 100%), 
                    url("/assets/img/notes.jpg");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
        background-color: rgba(204, 204, 204, 0.8); /* Slightly opaque background color */
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        text-align: center;
        color: black;

        border-radius: 0px 15px 225px 15px/15px 0px 15px 0px;
        border:solid 3px rgb(65, 59, 59);
}

.landing-header h1 {
    font-family: "Pangolin", serif;
}

.landing-header p {
    font-family: "Jersey 15", serif;
}

.blink {
    display: inline-block;
    font-size: 1.5rem; /* Adjust the size of the cursor */
    font-family: monospace; /* Monospace font to match typeahead style */
    animation: blink 1s steps(1) infinite;
  }
  
  @keyframes blink {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }

  @media (max-width: 1100px) {
    .info-bar div {
        width: 15em;
    }
}

@media (max-width: 900px) {
    .info-bar div {
        width: 100%;
    }

    .info-bar {
        margin-left: 20px;
        margin-right: 20px;
    }
}
  
</style>