<template>
  <footer class="main-wrapper-y main-wrapper">
    <div class="footer">
        <h2 class="footer__title">Join our Team of Writers</h2>
        <p class="footer__text">On dasdas, writers earn a living doing what they love. <br/>
          Getting started is easy. Just pay a one time <span>$25 fee</span> and everything is ready to go.</p>
          <button class="footer__btn" @click="handleClick">join us</button>
          <button class="footer__float" @click="handleClick">
            <span class="footer__float--action" >join us</span>
            <span class="footer__float--text">at dasdas for $25 </span>
          </button>
    </div>
    
    

  </footer>
</template>

<script>
const flwKey = process.env.VUE_APP_FLW_SEC_KEY;

export default {
  name: "HomeFooter",
  data() {
    return {
      status: "",
      show: false
    };
  },
  created() {
      const script = document.createElement("script");
      script.src = "https://checkout.flutterwave.com/v3.js";
      document.getElementsByTagName("head")[0].appendChild(script);
     
    },
  methods:{
    handleClick(){
      window.FlutterwaveCheckout({
      public_key: flwKey,
      tx_ref: "RX1",
      amount: 25,
      currency: "USD",
      country: "US",
      payment_options: " ",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "mustaphazeezat@gmail.com",
        phone_number: "07031334141",
        name: "Flutterwave Developers",
      },
      onclose: function() {
        this.show = true
      },
      customizations: {
        title: "dasdas",
        description: "one time $25 fee and everything is ready to go",
      },
    });
    }
  }
}
</script>

<style scoped lang="scss">
  .footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media #{$tablet}{
      padding: 4rem 0;
      padding-bottom: 6rem;
    }
    &__title{
      font-family: $ff-body;
      color: $black;
      font-size: 2.4rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      @media #{$tablet}{
        font-size: 2.8rem;
      }
      @media #{$laptop}{
        font-size: 3.2rem;
      }
    }
    &__text{
      font-size: 1.8rem;
      width: 90%;
      max-width: 741px;
      margin-bottom: 3rem;
      letter-spacing: -1.5px;
      @media #{$tablet}{
        font-size: 2.2rem;
      }
      span{
        font-family: $ff-heading;
      }
    }
    &__btn{
      font-family: $ff-body;
      text-transform: uppercase;
      font-size: 1.4rem;
      line-height: 1.2;
      padding: 1.175rem 5rem;
      background: #000;
      color: #fff;
      @media #{$tablet}{
        font-size: 1.8rem;
      }
    }
    &__float{
      position: fixed;
      bottom: 5vh;
      right: 0;
      display: flex;
      align-items: center;
      background: #000;
      color: #fff;
      transition: all 0.3s ease;
      &--text{
        padding-right: 1rem;
        font-size: 1.6rem;
        display: none;
      }
      &--action{
        padding: 1rem;
        font-size: 1.6rem;
        text-transform: capitalize;
      }
      &:hover{
        .footer__float--text{
          display: block;
        }
      }
    }
  }

</style>