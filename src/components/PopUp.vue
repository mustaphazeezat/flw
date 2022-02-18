<template>
  <div>
    <vue-final-modal v-model="showModal">
      <div>
          <h3>hlo</h3>
          <button class="footer__btn" @click="handleClick">join us</button>
      </div>
    </vue-final-modal>
  </div>
</template>


<script>
const flwKey = process.env.VUE_APP_FLW_SEC_KEY;
import {  VueFinalModal} from 'vue-final-modal'
export default {
  data: () => ({
    showModal: false
  }),
  components: {
    VueFinalModal
  },
  methods:{
      setShow() {
      setTimeout(() => {
        this.showModal = true;
      }, 3000);
    },
     handleClick(){
      window.FlutterwaveCheckout({
      public_key: flwKey,
      tx_ref: "RX2",
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
         this.showModal = false;
         console.log(this.showModal)
      },
      customizations: {
        title: "dasdas",
        description: "one time $25 fee and everything is ready to go",
      },
    });
  }
  },
  mounted(){
      this.setShow()
  }
}
</script>

<style>

</style>