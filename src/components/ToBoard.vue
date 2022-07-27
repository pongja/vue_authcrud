<template>
  <div class="margin-top">
    <div class="display_bet">
      <p class="font">게시판영역</p>
      
      <button class="write_btn"><p class="font-black">글쓰기버튼</p></button>
    
    
    </div>
    <table border="1" class="width_table">
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>내용</th>
        <th>날짜</th>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
    </table>
  </div>
</template>

<script setup>

</script>

<style>
.margin-top {
margin-top: 100px;
}
.width_table{
  width: 100%;
  margin-top: 10px;
}
.font-black{
  color: black;
}
.display_bet{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>