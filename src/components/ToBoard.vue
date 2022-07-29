<template>
  <div class="margin-top">
    <div class="display_bet">
      <p class="font">게시판영역</p>
      <button class="write_btn" type="button" @click="writepage"><p class="font-black">글쓰기버튼</p></button>
    </div>
    <table border="1" class="width_table">
      <tr>
        <th>제목</th>
        <th>회사</th>
        <th>회사주소</th>
        <th>지역</th>
        <th>내용</th>
        <th>날짜</th>
      </tr>
      <tr>
        <td>{{item.title}}</td>
        <td>{{item.company}}</td>
        <td>{{item.company_url}}</td>
        <td>{{item.location}}</td>
        <td>{{item.description}}</td>
        <td>{{item.date_posted}}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';





axios.get("http://127.0.0.1:8000/jobs/all" )

const router = useRouter();
const writepage = () => {
  router.push({
    name: 'BoardCreate',
  });
};
</script>

<style>
.margin-top {
  margin-top: 100px;
}
.width_table {
  width: 100%;
  margin-top: 10px;
}
.font-black {
  color: black;
}
.display_bet {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
