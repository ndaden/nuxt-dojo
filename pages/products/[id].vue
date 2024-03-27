<template>
    <div>
<p>Product details for {{ id }}</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod hic quisquam officiis doloribus! Odit ea ab quisquam beatae eligendi ex, unde cupiditate ullam iste.</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped>

</style>