<template>
    <div>
        <h1>Oppgaver for fjerdetrinn</h1>
        <Accordion title="Lesing og lytting">
            <p>Dette læreplanmålet handler om å lese og lytte til fortellinger, eventyr, sangtekster, faktabøker og andre tekster på bokmål og nynorsk og i oversettelse fra samiske og andre språk, og samtale om hva tekstene betyr for eleven</p>
            <Task>Sang og lyrikk - Lytt og skriv teksten</Task>
            <Task>Sang og lyrikk - Skriv en egen sangtekst</Task>
            <Task>Eventyr - Eventyr med bilder</Task>
            <Task>Eventyr - Eventyr med emojier</Task>
            <Task>Faktabøker - Fleip eller fakta</Task>
            <Task>Bokmål - Velg riktig ord</Task>
            <Task>Nynorsk - Velg riktig ord</Task>
        </Accordion>

        <Accordion title="Bibliotek">
            <p>Velge bøker fra bibliotek ut fra egne interesser og leseferdigheter</p>
            <Task @click="newAssignment('booksort')">
                Bibliotek - Sorter bøkene
            </Task>
            <Task>Bøker - Lim sammen sidene</Task>
            <Task>Bøker - Hvilken side mangler?</Task>
        </Accordion>

        <Accordion title="Flyt og forståelse">
            <p>Lese tekster med flyt og forståelse og bruke lesestrategier målrettet for å lære</p>
            <Task>Lesestrategier - Del 1</Task>
            <Task>Lesestrategier - Del 2</Task>
        </Accordion>
    </div>
</template>

<script setup lang="ts">
const go = (to: string) => {
    navigateTo("/modules/booksort")
}

const newAssignment = (assignment: string) => {
    
}
</script>