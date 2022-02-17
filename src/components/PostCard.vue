<template>
  <li :class="['post-card', className]">
    <router-link :to="`/${post.slug}/${post.id}`" class="post">
    <div class="post__image"><img :src="post.jetpack_featured_media_url" /></div>
    <div class="post__content">
      <div class="d-flx-alc post__content--info"><p class="post__tag">Frontend</p><p class="post__date">{{timePast(post.date)}} ago</p></div>
      <h3 v-html="post.title.rendered" class="post__title"></h3>
      <p v-html="`${post.excerpt.rendered.slice(0, 180)} ...`" class="post__excerpt"></p>
      <div class="d-flx-alc-jsb post__content--extras">
        <p class="post__read-time">{{readTime(post.content.rendered)}} min read</p>
        <p class="post__action text-w-icon">
          <span>read full</span>
          <Icon icon="arrow"/>
        </p>
      </div>
    </div>
  </router-link>
  </li>
</template>

<script>
  import {readTime, timePast} from '../utils/helpers'
  import Icon from './Icon.vue'

export default {
  name: "PostCard",
  props:{
    post: Object,
    className: String
  },
  components:{
    Icon,
  },
  methods: {
    readTime,
    timePast,
  }

}
</script>

<style scoped lang="scss">
.post-card{
  border: $border;
  padding: 1rem;
  transition: box-shadow 0.3s ease;
  &:hover{
      box-shadow: $shadow;
  }
  
  &:first-of-type {
    &.home-post-list{
       @media #{$tablet}{
      grid-column-start: 1;
      grid-column-end: -1;
      .post{
        display: flex;
        padding-bottom: 0;
        &__image{
            min-width: 45%;
            max-width: 45%;
            height: 280px;
        }
        &__content{
          position: relative;
          margin-top: 0;
          padding-left: 1.55rem;
          &--extras{
           padding-left: 1.55rem;
          }
        }
        &__title{
          font-family: $ff-heavy;
          font-size: 2.2rem;
          color: $black;
        }
        &__excerpt{
          padding-right: 3rem;
        }
        
      }
    }
    }
   
  }
}
.post{
  position: relative;
  display: block;
  font-family: $ff-body;
  color: $black-20;
  height: 100%;
  @media #{$tablet}{
    padding-bottom: 3rem;
  }
  @media #{$laptop}{
    padding-bottom: 2rem;
  }
  
  &__image{
    width: 100%;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  &__content{
    margin-top: 2rem;
    &--info{
      p{
        font-size: 1.2rem;
      }
    }
    &--extras{
      @media #{$tablet}{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    } 
      
    }
  }
  &__tag{
    font-family: $ff-medium;
    color: $black-30;
  }
  &__date{
    position: relative;
    color: $black-20;
    padding-left: 2rem;
    text-transform: capitalize;
    &::before{
      content: '';
      position: absolute;
      left: 1rem;
      top: 50%;
      width: 3px;
      height: 3px;
      background: $black-20;
      transform: translateY(-50%);
      
    }
  }
  &__title{
    margin: 1rem 0;
    font-size: 1.8rem;
    line-height: 1.3;
    color: $black;
  }
  &__excerpt{
    font-size: 1.4rem;
    margin-bottom: 2.1rem;
    font-weight: 500;
  }
  &__read-time{
    font-family: $ff-medium;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  &__action{
    font-family: $ff-medium;
    font-size: 1.2rem;
    color: $blue; 
  }
}

</style>