<template>
    <Loader v-if="loading" />
    <article v-else class="post main-wrapper main-wrapper-y">
       <div class="d-flx-alc post__info"> <p class="post__info--author">By Ryan Jackson</p><p class="post__info--date">{{timePast(singlePost.date)}} </p></div>
       <h2 class="post__title">{{singlePost.title.rendered}}</h2>
       <div v-html="singlePost.content.rendered" class="post__content" ></div>
    </article>
    <more-article :loadingState="loading"></more-article>
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
  methods: {
    ...mapActions(['getSinglePost']),
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
.post__content ::v-deep a{
    display: inline;
    font-family: $ff-body;
}
.post__content ::v-deep p{
    margin-bottom: 2rem;
}
</style>