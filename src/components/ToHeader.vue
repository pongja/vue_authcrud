<template>
  <header class="header">
    <div class="headerIn">
      <h1 class="header_logo">
        <router-link to="/">
          <img src="@/assets/logo_wh.svg" alt="로고" class="gmc_logo" />
        </router-link>
      </h1>
      <div class="ul_div">
        <ul class="display_ul">
          <li class="padding-left">
            <router-link to="/">메인</router-link>
          </li>
          <li><router-link to="/Board">게시판</router-link></li>
        </ul>
        <ul class="display_ul2" v-if="usertoken">
          <li class="padding-left2">
            <router-link to="/Login">{{usertoken}}</router-link>
          </li>
          <li>
            <router-link to="/Signup">로그아웃</router-link>
          </li>
        </ul>
        <ul class="display_ul2" v-else>
          <li class="padding-left2">
            <router-link to="/Login">로그인</router-link>
          </li>
          <li>
            <router-link to="/Signup">회원가입</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    let usertoken = localStorage.getItem("loginID");
     return { usertoken }
  },
 
};
</script>

<style scoped>
.ul_div {
  display: flex;
  justify-content: space-between;
  color: white;
}
.display_ul {
  display: flex;
  justify-content: space-between;
}
.padding-left {
  padding-right: 80px;
}
.padding-left2 {
  padding-right: 40px;
}
.display_ul2 {
  display: flex;
}
.header {
  width: 100%;
  background: #ab1645;
}
.headerIn {
  width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 60px;
}
.headerIn .gmc_logo {
  width: 184px;
}
@media screen and (max-width: 768px) {
  .headerIn {
    width: 100%;
    padding-left: 32px;
  }
}
</style>
