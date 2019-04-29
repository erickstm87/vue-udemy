<template>
    <div>
        <h2>Blogs</h2>
        <p v-for='post in posts' :key='post.id' @click='passFunction(post.title)'>{{ post.title }}</p>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Blogs',
    data(){
        return{
            posts: []
        }
    },
    methods: {
        passFunction: function(title) {
            this.$emit('thisEventType', title)
        }
    },
    created: function() {
        axios.get('https://jsonplaceholder.typicode.com/todos/').then((res) => {
            this.posts = res.data.slice(0, 100);
        });
    }
}
</script>
