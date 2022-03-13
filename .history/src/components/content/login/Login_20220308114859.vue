<template>
  <div id="login">
    <div class="wrapper">
      <img
        class="wrapper_img"
        src="http://www.dell-lee.com/imgs/vue3/user.png"
      />

      <div class="wrapper_input">
        <input
          class="wrapper_input_content"
          placeholder="请输入手机号"
          v-model="username"
        />
      </div>
      <div class="wrapper_input">
        <input
          class="wrapper_input_content"
          placeholder="请输入密码"
          v-model="password"
        />
      </div>
      <div class="wrapper_login-button" @click="handleLogin">登陆</div>
    </div>
  </div>
</template>

<script>
import { reactive,toRefs,getCurrentInstance} from 'vue';
export default {
  name:"login",
  setup(){
    const {username,password,handleLogin}=useLoginEffect();

    return{
      username,password,
      handleLogin,
    }
  }
}

const useLoginEffect=()=>{
  const data=reactive({username:'',password:''})

  const handleLogin=()=> {
    const {proxy}

    try{
      const result=this.$api.isLoginTrue(this.data)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(result);
    }catch(e){
      console.log('请求失败');
    }
 
  }

  const { username, password } = toRefs(data)
  return {username,password,handleLogin}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &_img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }

  &_input {
    height: 0.48rem;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;

    background: #f9f9f9;

    margin: 0 0.4rem 0.16rem 0.4rem;

    padding: 0 0.16rem;

    &_content {
      width: 100%;

      color: $content-notice-fontcolor;
      line-height: 0.48rem;
      font-size: 0.16rem;

      border: none;
      outline: none;

      background: none;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &_login-button {
    height: 0.48rem;

    line-height: 0.48rem;
    text-align: center;
    color: #ffffff;
    font-size: 0.16rem;
    font-family: "PingFangSC-Regular";

    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;

    background-color: #0091ff;

    margin: 0 0.4rem 0.16rem 0.4rem;
  }
}
</style>