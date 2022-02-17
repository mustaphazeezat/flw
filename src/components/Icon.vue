<template>
  <svg :class="className">
      <use 
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :href="`/icon.svg#${icon}`"></use>
    </svg>
</template>

<script>
export default {
    name: "Icon",
    props: {
        icon: String,
        className: String
    }
}
</script>

<style>

</style>