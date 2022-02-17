<template>
  <ul class="post-list">
    <PostCard v-for="post in posts" :key="post.id" :post="post" className="home-post-list"/>
  </ul>
</template>

<script>
import PostCard from './PostCard.vue'

export default {
    name: "Posts",
    props:{
        posts: Array
    },
    components:{
        PostCard,
    } 
}
</script>

<style lang="scss">
    .post-list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 3rem;
        @media #{$tablet}{
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        @media #{$laptop}{
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 3rem;
        }
        @media #{$desktop}{
            grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
            grid-gap: 4.5rem;
        }
    }
</style>