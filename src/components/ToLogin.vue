<template>
 <div class="mainch">
    로그인
  <form @submit.prevent="submit()">
    <label for="loginId">
      <span>아이디</span>
      <input type="text" class="input_color" id="loginId" v-model="state.login.loginId" />
    </label>
    <label for="loginPw">
      <span>비밀번호</span>
      <input type="password" class="input_color" id="loginPw" v-model="state.login.loginPw" />
    </label>
    <hr />
    <button  class="login_btn">로그인</button>
 </form>
  </div>
</template>
<script>
import axios from "axios"
import { useRouter } from 'vue-router';
import { reactive } from "vue"
export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      login: {
        loginId: "",
        loginPw: "",
      },
    });
    const submit =  async () => {
      const args = new FormData()
      args.append('username', state.login.loginId)
      args.append('password', state.login.loginPw)
      console.log(state.login)
      try {
      await axios.post("http://127.0.0.1:8000/login/token", args, {
        header: { 'Content-Type': 'application/json'}, withCredentials:true 
        })
      .then((res) => {
          console.log(res.data)
          localStorage.setItem('loginId', state.login.loginId)
          localStorage.setItem("access_token", `Bearer ${res.data.access_token}`);
          document.cookie = `access_token=Bearer ${res.data.access_token}`;
    });
    router.push({
      name: 'Home',     
    })
    } catch (error){
      alert('login failed!!')
      console.error(error)
    }
    }
    return { state, submit }
  },
}
</script>

<style scoped>
.mainch{
  display: flex;
  width: 100%;
  padding-top: 150px;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.login_btn{
  color: black;
}
.input_color{
  color: black;
}
</style>