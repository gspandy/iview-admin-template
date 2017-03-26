<template>
  <Row>
    <i-col :xs="24" :sm="24" :md="12" :lg="12">
      <Card class="box-card">
        <common-form></common-form>
      </Card>
    </i-col>
    <i-col :xs="24" :sm="24" :md="12" :lg="12">
      <Card class="box-card">
        <validate-form></validate-form>
      </Card>
    </i-col>
  </Row>
</template>
<script>
  import commonForm from '../../components/forms/CommonForm.vue'
  import validateForm from '../../components/forms/ValidateForm.vue'
  export default {
    components: {
      commonForm, validateForm
    }
  }
</script>
<style scoped>
  .box-card {
    margin: 10px;
  }
</style>
