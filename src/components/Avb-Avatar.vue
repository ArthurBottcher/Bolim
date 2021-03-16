<template>
  <v-avatar
    size="66"
    color="grey lighten-5"
    class="mr-2"
  >
    <div
      class="imagePreviewWrapper"
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
        }
    }
}
</script>
