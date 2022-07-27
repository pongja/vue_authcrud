<template>
    <form method="post" @submit.prevent="formCreate">
    <table>
        <tr>
            <td>제목</td>
            <td><input type="text" class="input_color" name="title" v-model="form.title"></td>
        </tr>
        <tr>
            <td>회사</td>
            <td><input type="text" class="input_color" name="company"  v-model="form.company"></td>
        </tr>
        <tr>
            <td>회사주소</td>
            <td><input type="text" class="input_color" name="company_url"  v-model="form.company_url"></td>
        </tr>
        <tr>
            <td>지역</td>
            <td><input type="text" class="input_color" name="location"  v-model="form.location"></td>
        </tr>
        <tr>
            <td>내용</td>
            <td>
                <textarea name="description"  v-model="form.description" ></textarea>
            </td>
        </tr>
    </table>
    <button value="글쓰기"><p class="color_black">글쓰기</p></button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';


const form = ref({
  title: "",
  company: "",
  company_url: "",
  location: "",
  description: "",
  date_posted:Date.now()
});
const formCreate = async () => {
  try {
    await axios.post("http://127.0.0.1:8000/jobs/create-job", ...form.value, {
      headers: {"Content-Type":"multipart/form-data" }, withCredentials:true
    })
    .then((res) => {
          console.log(res.data)
          localStorage.setItem("access_token", `Bearer ${res.data.access_token}`);
          document.cookie = `access_token=Bearer ${res.data.access_token}`;
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style>
.color_black{
  color: black;
}
</style>