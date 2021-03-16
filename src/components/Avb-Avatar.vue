<template>
  <v-avatar
    :size="size"
    color="grey lighten-5"
    class="mr-2"
  >
    <div
      :class="size!='66px'?'imagePreviewWrapperSmall':'imagePreviewWrapper'"
      :style="{'background-image': `url(${image})`}"
    />
  </v-avatar>
</template>
<script>
export default {
    name: 'AvbAvatar',
    props:{
        image:{
            type: String,
            default: ''
        },
        size:{
            type: String,
            default: '66px'
        }
    }
}
</script>
<style >
.imagePreviewWrapper {
    width: 50px;
    height: 50px;
    display: block;
    cursor: pointer;
    margin: 0 auto;
    background-size: contain;
    background-position: center center;
}

.imagePreviewWrapperSmall{
    width: 32px;
    height: 32px;
    display: block;
    cursor: pointer;
    margin: 0 auto;
    background-size: contain;
    background-position: center center;
}
</style>
