<template>
  <div class="cont_principal">
  	<div class="cont_error"> 
  	  <h1>Oops</h1>  
  	  <p>The page you are looking for is not there.</p>
      <el-button type="primary"><a href="/">Back to home</a></el-button>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'NoPermission'
}
</script>

<style scoped>
.cont_principal {
  height: 100%;
  width:100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.cont_error {
  text-align: center;
  width: 100%;
  height: 300px;
}

.cont_error > h1  {
  font-family: 'Lato', sans-serif;  
  font-weight: 400;
  font-size:150px;
  margin: 0 auto;
  color:#9294AE;
}

.cont_error > p  {
  font-family: 'Lato', sans-serif;  
  font-weight: 300;
  font-size:24px;
  letter-spacing: 5px;
  color:#9294AE;
}

</style>
