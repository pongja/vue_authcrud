<template>
  <div>
    게시글 상세페이지
  </div>
       <div class="line-height" v-for="forms in form" :key="forms">
          <div class="display_f">
            <div>제목</div>
            <p>{{forms.title}}</p>
          </div>
          <hr/>
          <div class="display_f">
            <div>회사</div>
            <p> {{forms.company}}</p>
          </div>
          <hr/>
          <div class="display_f">
            <div>회사주소</div>
            <p> {{forms.company_url}}</p>
          </div>
          <hr/>
          <div class="display_f">
            <div>지역</div>
            <p>{{forms.location}}</p>
          </div>
          <hr/>
          <div class="display_f">
            <div>내용</div>
            <div class="write_widt"><p>{{forms.description}}</p></div>
          </div>
          <hr/>
          <div class="display_f">
            <div>날짜</div>
            <p>{{forms.date_posted}}</p>
          </div>
       </div>
</template>

<script setup>
import { ref } from "vue";
import axios from 'axios';


const form = ref([]);

console.log(form)
axios.get("http://127.0.0.1:8000/jobs/get/{id}",{
    params: {
      form:{
        title: "",
        company: "",
        company_url: "",
        location: "",
        description: "",
        date_posted: "",
        }
  }
})
.then((res)=>{
  console.log(res.data)
  form.value = res.data;
})
.catch((error)=>{
  console.log(error)
  console.log(form)
})
</script>

<style>
.display_f{
  display: flex;
}
.write_widt{
  width: 150px;
  height: 300px;
  word-break: break-all;
}
.line-height{
  line-height: 30px;
}
</style>