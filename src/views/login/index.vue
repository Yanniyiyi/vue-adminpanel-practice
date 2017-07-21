<template>

  <div id="login-container"> 
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px" id="login-form">
      <h3>Login</h3>
      <el-form-item prop="email">
        <el-input v-model="loginForm.email" placeholder="email"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" @keyup.enter.native="handleLogin" placeholder="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="handleLogin" :loading='loading' id="login-btn">Login</el-button>
      </el-form-item>
    </el-form>
    <div>
        <ul>
          <li>Email could be any valid email address</li>
          <li>Password is anything you like but at least 6 digits</li>
       </ul>
    </div>
  </div>
  
  
</template>

<script>
export default {
  name: 'app',
  data(){
    const valudateEmail = (rule, value, callback) => {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(value)){
        callback(new Error('Please enter a valid email address'));
      }
      callback();
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('Password length cannot be less than 6'));
      } 
      callback();
    };
    return {
      loading:false,
      loginForm:{
        email:'',
        password:'',
      },
      loginRules:{
        email:[
          {required: true, trigger: 'blur', validator: valudateEmail }
        ],
        password:[
          {required: true, trigger: 'blur', validator: validatePass }
        ]
      }
    }
  },
  methods:{
    handleLogin(){
      this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {

              this.$router.push({ path: '/' });
              console.log('/ pushed');
            }).catch(error => {
              this.loading = false;
              this.$message.error(error.message);
            });
          } else {
            console.log('error submit!');
            return false;
          }
      });
    }
  }
}
</script>

<style scoped>
  h3{
    margin-top: 0px;
  }
  #login-container{
    height: 100vh;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
  }
  #login-btn{
    width: 100%;
  }
  #login-form{
    width:30%;
  }
 
</style>
