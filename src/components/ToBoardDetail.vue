<template>
  <div>
    게시글 상세페이지
  </div>
   <table>
        <tr>
            <td>제목</td>
            <td><input type="text" class="input_color" id="title" name="title" v-model="form.title"></td>
        </tr>
        <tr>
            <td>회사</td>
            <td><input type="text" class="input_color" name="company" id="company" v-model="params.company"></td>
        </tr>
        <tr>
            <td>회사주소</td>
            <td><input type="text" class="input_color" name="company_url" id="company_url" v-model="params.company_url"></td>
        </tr>
        <tr>
            <td>지역</td>
            <td><input type="text" class="input_color" name="location"  id="location" v-model="params.location"></td>
        </tr>
        <tr>
            <td>내용</td>
            <td>
                <textarea name="description"  id="description" v-model="params.description" ></textarea>
            </td>
        </tr>
          <tr>
            <td>오늘날짜</td>
            <td><input type="text" class="input_color" name="location"  id="date_posted" v-model="params.date_posted"></td>
        </tr>
    </table>
</template>

<script setup>
import { ref } from "vue";
import axios from 'axios';


const form = ref([]);

axios.get("http://127.0.0.1:8000/jobs/get/{id}",{
  params: {
        title: "",
        company: "",
        company_url: "",
        location: "",
        description: "",
        date_posted: "",
  }
})
.then((res)=>{
  console.log(res.data)
  form.value = res.data;
})
</script>

<style>

</style>