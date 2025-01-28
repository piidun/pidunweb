<template>
<div>
    <div v-if="userInfo[0].is_teacher">
        <h1>Hovedside</h1>
        <p>Velkommen til pidun.no - Det interaktive læreverket for norskfaget i barneskolen.</p>
        <p>Velg din klasse fra menyen til venstre for å komme i gang. Hvis du ikke har satt opp din klasse, kan du gjøre det <a href="#">her</a> eller på "min side".</p>
    </div>

    <div v-if="!userInfo[0].is_teacher">
        <h1>Dine oppgaver</h1>
        <p>Gratulerer, du har ingen oppgaver igjen!</p>
    </div>
</div>
</template>

<script setup lang="ts">
    const { data: email } = await useFetch('/api/user/username');
    const { data: userInfo } = await useFetch(`/api/user/init/${email.value}`);

    console.log(userInfo.value)
</script>