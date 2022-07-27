<template>
    <table>
        <tr>
            <td>제목</td>
            <td><input type="text" class="input_color" id="title" name="title" v-model="state.form.title"></td>
        </tr>
        <tr>
            <td>회사</td>
            <td><input type="text" class="input_color" name="company" id="company" v-model="state.form.company"></td>
        </tr>
        <tr>
            <td>회사주소</td>
            <td><input type="text" class="input_color" name="company_url" id="company_url" v-model="state.form.company_url"></td>
        </tr>
        <tr>
            <td>지역</td>
            <td><input type="text" class="input_color" name="location"  id="location" v-model="state.form.location"></td>
        </tr>
        <tr>
            <td>내용</td>
            <td>
                <textarea name="description"  id="description" v-model="state.form.description" ></textarea>
            </td>
        </tr>
          <tr>
            <td>오늘날짜</td>
            <td><input type="text" class="input_color" name="location"  id="date_posted" v-model="state.form.date_posted"></td>
        </tr>
    </table>
    <button @click="formCreate()"><p class="color_black">글쓰기</p></button>
</template>

<script setup>
import { reactive } from "vue"
import axios from "axios"


const state = reactive({
  form: {
  title: "",
  company: "",
  company_url: "",
  location: "",
  description: "",
  date_posted: Date.now()
  },
});
const formCreate = async () => {
    
     const postdata = {
        title: state.form.title,
        company: state.form.company,
        company_url: state.form.company_url,
        location: state.form.location,
        description: state.form.description,
        date_posted: state.form.date_posted,
      };
  try {
    
    await axios.post("http://127.0.0.1:8000/jobs/create-job", postdata, {
      headers: {'Content-Type': 'application/json' }, withCredentials:true
    })
    .then((res) => {
          console.log(res.data)
          localStorage.getItem("access_token", `Bearer ${res.data.access_token}`);
          document.cookie = `access_token=Bearer ${res.data.access_token}`;
    });
  } catch (error) {
    console.log(error);
    alert('실패')
     
  }
};
</script>

<style>
.color_black{
  color: black;
}
</style>