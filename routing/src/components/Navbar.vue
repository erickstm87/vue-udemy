<template>
    <nav>
        <ul>
            <li> <router-link to='/'>Home</router-link></li>
            <li> <router-link to='/greetings'>Greetings</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {
            
        }
    }
}
</script>
