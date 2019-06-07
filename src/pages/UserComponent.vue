<template>
    <div>
        <h3>Users list</h3>
        <span>{{ id }}</span>
        <ul class="list-group">
            <li v-for="(user,key) in users" class="list-group-item" :key="key"> {{ user.name }}</li>
        </ul>    
    </div>
</template>

<script>
export default {
    name:'user-component',
    data(){
        return {
            id: this.$route.params.id,
            users: {}
        }
    },
    created() {
        /* this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(users => {
            this.users = users
        }) */

        var users = [
            {name:'Haderson Bullón',profession:'Developer',age:28},
            {name:'Haidelyn Bullón',profession:'HairDrasser',age:27},
            {name:'Harrinson Bullón',profession:'Mechanical',age:35}
        ]

        this.users = users;
    },

}
</script>