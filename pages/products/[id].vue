<template>
    <div>
        <p>Product # {{ product.id }}</p>
        <p>{{ product.title }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} $</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params

const uri = `https://fakestoreapi.com/products/${id}`

// fetch the products
const { data: product } = await useFetch(uri)

definePageMeta({
    layout: 'products'
})
</script>

<style scoped></style>
