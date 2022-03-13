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
@import '@/assets/css/viriables.scss';

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
    height: .48rem;

    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;

    background: #F9F9F9;

    margin: 0 .4rem .16rem .4rem;

    padding: 0 .16rem;
    

    &_content{
      width: 100%;

      color: $content-notice-fontcolor;
      line-height: .48rem;
      font-size: .16rem;

      border: none;
      outline: none;

      background: none;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &_login-button{
    width: 100%;
    height: .48rem;

    
    text-align: center;

    background-color: #fff;

    margin: 0 .4rem .16rem .4rem;
  }
}
</style>