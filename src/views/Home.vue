<template>
        <Loader v-if="loading" />
   
   <div v-else>
       <section class="main-wrapper main-wrapper-y">
            <h2 class="sr">list of blog posts</h2>
            <Posts :posts="allPosts" />
        </section>
        <HomeFooter/>
   </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Posts from '../components/Posts.vue'
import HomeFooter from '../components/HomeFooter.vue'
import Loader from '../components/Loader.vue'



export default {
    name: "Home",
    components:{
        Posts,
        HomeFooter,
        Loader
    },
    methods: {
        ...mapActions(['getAllPosts'])
    },
    computed: mapGetters(['loading', 'allPosts']),
    created(){
        this.getAllPosts()
        
    }
}
</script>

<style>

</style>