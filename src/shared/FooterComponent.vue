<template>
    <footer class="footer">
        © {{ year }} Admin Pro - Vue.JS 
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            year: '2019'
        }
    }
}
</script>