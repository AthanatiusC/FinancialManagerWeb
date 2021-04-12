<template>
  <card class="card-user">
    <p class="card-text"></p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <a href="javascript:void(0)">
        <img class="avatar" src="../../assets/icons/Cyberpunk Augmentation.png" alt="..." />
        <h5 class="title">{{data.fullname}}</h5>
      </a>
      <p class="description">Member</p>
    </div>
    <p></p>
    <div class="card-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, reiciendis alias sequi tempore temporibus inventore? Laboriosam, ea, hic praesentium officiis quod natus dolorem nisi animi magnam obcaecati nulla. Perferendis, amet!
    </div>
  </card>
</template>
<script>
export default{
  props:[
    'data'
  ]
}
</script>
<style></style>
