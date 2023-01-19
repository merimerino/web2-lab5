<template>
    <div class="table-wrapper" >
        <table class="fl-table">
        <thead>
        <tr>
            <th>Date</th>
            <th>Exchange rate</th>
        </tr>
        </thead>
        <tbody v-for="(item) in data" :key="item.date">
        <tr>
            <td>{{ item.date }}</td>
            <td>{{item.value}}</td>
        </tr>
    </tbody>
    </table>
</div>

</template>

<script>
export default {
  data() {
    return {
      data:{}
    }; 
  },
  mounted() {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      this.data = data.exchangeRates;
    })
    .catch(error => {
      console.error(error);
    });
}

  
};
</script>

<style scoped>
.table-wrapper{
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}

.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}

.fl-table thead th {
    color: #ffffff;
    background: #4FC3A1;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}



</style>
