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
import { useRouter } from 'vue-router';


const router = useRouter();
const state = reactive({
  form: {
  title: "",
  company: "",
  company_url: "",
  location: "",
  description: "",
  date_posted: ""
  },
});
const formCreate = async () => {
    let token = localStorage.getItem("access_token")
     const postdata = {
        title: state.form.title,
        company: state.form.company,
        company_url: state.form.company_url,
        location: state.form.location,
        description: state.form.description,
        date_posted: state.form.date_posted,
      };
      console.log(postdata)
      
  try {
    await axios.post("http://127.0.0.1:8000/jobs/create-job/", postdata, {
      headers: {
        'Content-Type': 'application/json' ,
         'Authorization' : token
        }, 
      withCredentials:true,
    })
    .then((res)=>{
    console.log(res.data)
    })
     alert('성공')
    router.push({
        name:'Boardlist'
    })
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