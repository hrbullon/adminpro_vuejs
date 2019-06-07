<template>
    <div>
        <header class="topbar">
            <navbar></navbar>
        </header>
    </div>
</template>

<script>

import Navbar from './NavbarComponent'

export default {
    name:'Header',
    components:{
        Navbar
    }

}
</script>