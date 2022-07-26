<template>
  <div class="mainch">
    회원가입
    <div>
      <label for="loginId">
        <span>아이디</span>
        <input
          type="text"
          class="input_color"
          id="loginId"
          v-model="state.form.SignId"
        />
      </label>
      <label for="email">
        <span>이메일</span>
        <input
          type="text"
          class="input_color"
          id="SignEmail"
          v-model="state.form.SignEmail"
        />
      </label>
      <label for="loginPw">
        <span>비밀번호</span>
        <input
          type="password"
          class="input_color"
          id="loginPw"
          v-model="state.form.SignPw"
        />
      </label>
      <hr />
      <button @click="submit()" class="login_btn">회원가입</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from 'vue-router';
import { reactive } from "vue";
export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      form: {
        SignId: "",
        SignPw: "",
        SignEmail: "",
      },
    });
    const submit = async () => {
      const args = {
        username: state.form.SignId,
        email: state.form.SignEmail,
        password: state.form.SignPw,
      };
      try {
          await axios.post("http://127.0.0.1:8000/users/", args, {
            header: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            console.log(res.data);
          });
          router.push({
            name: 'Login'
          });
      } catch (error) {
        alert('회원가입실패!')
        console.error(error);
      }
    };
    return { state, submit };
  },
};
</script>

<style>
.mainch {
  display: flex;
  width: 100%;
  padding-top: 150px;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.login_btn {
  color: black;
}
.input_color {
  color: black;
}
</style>
