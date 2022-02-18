<template>
    <Loader v-if="loading" />
    <article v-else class="post main-wrapper main-wrapper-y">
       <div class="d-flx-alc post__info"> <p class="post__info--author">By Ryan Jackson</p><p class="post__info--date">{{timePast(singlePost.date)}} </p></div>
       <h1 class="post__title" v-html="singlePost.title.rendered"></h1>
       <div v-html="singlePost.content.rendered" class="post__content" ></div>
    </article>
    <more-article></more-article>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import {readTime, timePast} from '../utils/helpers'
import Loader from '../components/Loader.vue'
import MoreArticle from '../components/MoreArticle.vue'


export default {
    name: "Post",
    data() {
        return {
        id: ""
     };
  },
    components:{
        Loader,
        MoreArticle,
  },
    watch: {
    '$route.path': 'getData'
  },    
  methods: {
    ...mapActions(['getSinglePost']),
    getData () {
        this.id = this.$route.params.id;
       this.getSinglePost(this.id) 
    },
    readTime,
    timePast,
  },
    computed:{ ...mapGetters(['loading', 'singlePost']),  },
    created(){
       this.id = this.$route.params.id;
       this.getSinglePost(this.id) 
    }
}
</script>

<style scoped lang="scss">
    .post{
        max-width: 705px;
        &__info{
            margin-bottom: 1rem;
            font-family: $ff-medium;
            p{
                font-size: 1.2rem;
            }
            &--author{
                margin-right: 1rem;
                color: $black-30;
            }  
            &--date{
                color: $black-20;
            }  
        }
        &__title{
            font-family: $ff-heavy;
            font-size: 2.2rem;
            color: $black;
            letter-spacing: -2px;
            margin-bottom: 2.3rem;
            @media #{$tablet}{
                font-size: 2.8rem;
            }
            @media #{$laptop}{
                font-size: 3.2rem;
            }

        }
    }
.post__content :deep(a){
    display: inline;
    font-family: $ff-body;
}
.post__content :deep(p){
    margin-bottom: 2rem;
}
.post__content :deep(.wp-caption){
    width: 80% !important;
    max-width: 510px !important;
    margin: 5rem auto;
    img{
    width: 100% !important;
    height: 320px ;
}
}
.post__content :deep(h2,h3,h4){
    color: $black;
}
    
</style>