<template>
      <conversion-title currOne="EUR" currTwo="HRK"></conversion-title>
      <form>
        <div class="form-group row">
          <label for="euro" class="col-sm-4 col-form-label">EUR</label>
          <div class="col-4">
            <input
              type="number"
              min="0"
              class="form-control"
              placeholder="Euro"
              v-model.number="valueEUR"
              @keyup="e2k"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="kuna" class="col-4 col-form-label">HRK</label>
          <div class="col-4">
            <input
              type="number"
              min="0"
              class="form-control"
              placeholder="HRK"
              v-model.number="vauleHRK"
              @keyup="k2e"
            />
          </div>
        </div>
      </form>
      <div>
        <h3>You have inserted value of {{valueEUR}} EUR, which is {{vauleHRK}} HRK.</h3>
      </div> 

  </template>
  
<script>
  export default {
    data() {
      return {
        valueEUR: 1,
        vauleHRK: 7.53450,
      };
    },
    methods: {
      e2k() {
        this.vauleHRK = parseFloat((this.valueEUR * 7.53450).toFixed(5));
      },
      k2e() {
        this.valueEUR = parseFloat((this.vauleHRK / 7.53450).toFixed(5));
      },
    },
    mounted() {
    console.log(`The component is now mounted.`)
  }
    
  };
  </script>
  