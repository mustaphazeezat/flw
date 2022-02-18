<template>
   <div>
       <section class="main-wrapper main-wrapper-y">
            <h2 class="sr">list of blog posts</h2>
            <Posts :posts="postList" />
            <Loader v-if="loading" />
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
    data(){
        return{
            page: 0,
            loadingState: true ,
            postList: []
        }
    },
    components:{
        Posts,
        HomeFooter,
        Loader,
    },
    methods: {
        ...mapActions(['getAllPosts']),
        handleScroll(){
            if (
                window.scrollY + window.innerHeight >= 
                document.body.scrollHeight
            ) {
                this.getAllPosts(this.page + 1)
                this.page = this.page + 1
                this.postList = [...this.postList, ...this.allPosts]
            }
        },
       
    },
    computed: {...mapGetters(['loading', 'allPosts']), },
    created(){
        this.getAllPosts(this.page)
        
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUpdate(){
        this.postList = [...this.postList, ...this.allPosts]
    },
     unmounted() {
            window.removeEventListener('scroll', this.handleScroll);
        }

    
}
 
</script>

<style>

</style>