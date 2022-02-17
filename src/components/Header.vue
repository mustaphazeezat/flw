<template>
  <header class="header">
  <div class="header__wrapper main-wrapper">
    <router-link to="/" class="header__logo"> <img src="../assets/logo.png"/></router-link>
  <ul class="header__sm-list">
    <li><a><Icon icon='twitter' class="icon"/></a></li>
    <li ><a><Icon icon='dribble' class="icon"/></a></li>
    <li><a><Icon icon='figma' class="icon"/></a></li>
    <li><a><Icon icon='github' class="icon"/></a></li>

  </ul>
  </div>

  </header>
</template>

<script>
import Icon from "./Icon.vue"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
     Icon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
  background: 100%;
  padding: 1rem 2rem;
  &__wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: $maxwidth-xl;
    margin: 0 auto;
  }
  &__logo{
    img{
        width: 50px;
        height: 50px;
        @media #{ $tablet }{
          width: 80px;
          height: 80px;
        }
    }
  }
  &__sm-list{
    display: flex;
    align-items: center;
    a{
      padding: 1rem;
      transition: color 0.3s ease;
      &:hover{
        color: $black;
      }
    }
    svg{
      width: 20px;
      height: 20px;
    }
  }
}

</style>
