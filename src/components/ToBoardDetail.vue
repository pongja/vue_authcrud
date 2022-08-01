<template>
  <div>
    게시글 상세페이지
  </div>
       <div v-for="params in form" :key="params" class="line-height">
          <div class="display_f">
            <div>제목</div>
            <p>{{params.title}}``</p>
          </div>
          <hr/>
          <div class="display_f">
            <div>회사</div>
            <p> {{params.company}}</p>
          </div>
          <hr/>
          <div class="display_f">
            <div>회사주소</div>
            <p> {{params.company_url}}</p>
          </div>
          <hr/>
          <div class="display_f">
            <div>지역</div>
            <p>{{params.location}}</p>
          </div>
          <hr/>
          <div class="display_f">
            <div>내용</div>
            <div class="write_widt"><p>{{params.description}}</p></div>
          </div>
          <hr/>
          <div class="display_f">
            <div>날짜</div>
            <p>{{params.date_posted}}</p>
          </div>
       </div>
</template>

<script setup>
import { ref } from "vue";
import axios from 'axios';


const form = ref([]);

axios.get("http://127.0.0.1:8000/jobs/get/{id}",{
  params: {
        title: null,
        company: null,
        company_url: null,
        location: null,
        description: null,
        date_posted: null
  }
})
.then((res)=>{
  console.log(res.data)
  form.value = res.data;
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