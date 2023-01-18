<template>
  <h3>{{ titleMessage }}</h3>
  <h3>We are using two currencies: {{currOne}} and {{currTwo}}</h3>
</template>
<script>
export default {
  props: {
    currOne: String,
    currTwo: String,
  },
  computed: {
    titleMessage() {
      return "Conversion on date: "+ new Date().toLocaleDateString("hr-HR")
    }
  }
};
</script>
