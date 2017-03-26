<template>
  <div>
    <Row>
      <i-col :xs="24" :sm="24" :md="8" :lg="8">
        <Card class="box-card">
          <barChart></barChart>
        </Card>
      </i-col>
      <i-col :xs="24" :sm="24" :md="8" :lg="8">
        <Card class="box-card">
          <lineChart></lineChart>
        </Card>
      </i-col>
      <i-col :xs="24" :sm="24" :md="8" :lg="8">
        <Card class="box-card">
          <funnelChart></funnelChart>
        </Card>
      </i-col>
    </Row>

    <Row>
      <i-col :xs="24" :sm="24" :md="12" :lg="12">
        <Card class="box-card">
          <pieChart></pieChart>
        </Card>
      </i-col>
      <i-col :xs="24" :sm="24" :md="12" :lg="12">
        <Card class="box-card">
          <radarChart></radarChart>
        </Card>
      </i-col>
    </Row>
  </div>


</template>

<script>
  import barChart from '../../components/charts/Bar.vue'
  import radarChart from '../../components/charts/Radar.vue'
  import pieChart from '../../components/charts/Pie.vue'
  import funnelChart from '../../components/charts/Funnel.vue'
  import lineChart from '../../components/charts/Line.vue'

  export default {
    components: {
      barChart, funnelChart, pieChart, radarChart, lineChart
    },
    methods: {}
  }
</script>
<style scoped>
  .box-card {
    margin: 10px;
  }
</style>
