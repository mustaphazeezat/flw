<template>
  <section class="main-wrapper">
      <div class="more">
          <h2 class="more__title">More Articles</h2>
          <ul class="post-list">
              <PostCard v-for="post in newfilteredpost" :key="post.id" :post="post"/>
          </ul>
      </div>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PostCard from '../components/PostCard.vue'

export default {
    name: "MoreArticle",
    data(){
        return{
            filtered : []
        }
    },
    props:{
        loadingState: Boolean,
    
    },
    components:{
        PostCard,
    },
    methods: {
        ...mapActions(['getFiltered']),
    },
    computed: mapGetters(['newfilteredpost']),
    created(){
        this.getFiltered()  
    }
}
</script>

<style lang="scss" scoped>
.more{
    &__title{
        font-family: $ff-heavy;
        color: $black;
        font-size: 2rem;
        text-transform: capitalize;
        margin-bottom: 2.3rem;
        @media #{ $tablet }{
            font-size: 2.4rem;
        }
    }
}
</style>>
