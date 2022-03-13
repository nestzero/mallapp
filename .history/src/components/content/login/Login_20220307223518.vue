<template>
  <div id="login">
    <div class="wrapper">
      <img
        class="wrapper_img"
        src="http://www.dell-lee.com/imgs/vue3/user.png"
      />

      <div class="wrapper_input">
        <input class="wrapper_input_content" placeholder="请输入手机号" />
      </div>
      <div class="wrapper_input">
        <input class="wrapper_input_content" placeholder="请输入密码" />
      </div>
      <div class="wrapper_login-button">登陆</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper{
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &_img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }

  &_input{
    width: ;
  }
}
</style>