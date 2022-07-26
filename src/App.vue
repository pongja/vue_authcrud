<template>
  <div class="warp">
    <ToHeader></ToHeader>
    <ToView></ToView>
   </div> 
</template>

<script setup>
import ToHeader from '@/components/ToHeader.vue';
import ToView from '@/components/ToView.vue';

</script>

<style>
.wrap {
    width: 100%;
    height: auto;
    cursor: default;
} 
*{
   padding: 0; 
   margin: 0;
  }
body{
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 1.125rem;/*18px-web*/
  font-weight: 400;
  color: #3e3e3e;
  letter-spacing: -0.05em;
  /* line-height: 160%; */ /* press.html의 그룹화 */
  word-break: keep-all;
 -ms-overflow-style: none;/*scroll:none*/
} 
::-webkit-scrollbar { display: none;}/*scroll:none*/
a,
label{
  display: inline-block;
}
.header,
.headerIn,
.footer,
.footerIn,
button,
input,
span,
a,
li{
  box-sizing: border-box;
}
ul,ol,li{list-style:none;}
a,
input,
button{
  text-decoration: none;
  background-color: transparent;
  color: #fff;
   /* letter-spacing: ;
  line-height: ; */
}
img{border:none; vertical-align:bottom;}
a:hover,
select:hover,
button:hover,
input[type="button"]{cursor: pointer;}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/* input{
  color: ;
}
input::placeholder{
  color: ;
} */
select {
background-color: #fff; 
-moz-appearance: none; 
-webkit-appearance: none; 
appearance: none;}
</style>
