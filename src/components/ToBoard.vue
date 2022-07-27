<template>
  <div class="margin-top">
    <div class="display_bet">
      <p class="font">게시판영역</p>
      <button class="write_btn" type="button" @click="writepage"><p class="font-black">글쓰기버튼</p></button>
    </div>
    <table border="1" class="width_table">
      <tr>
        <th>title</th>
        <th>company</th>
        <th>company_url</th>
        <th>location</th>
        <th>description</th>
        <th>date_posted</th>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
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
