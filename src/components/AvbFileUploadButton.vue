<template>
  <v-main>
    <v-avatar
      size="66"
      color="grey lighten-5"
    >
      <div
        class="imagePreviewWrapper"
        :style="{'background-image': `url(${previewImage})`}"
        @click="selectImage"
      />
    </v-avatar>



    <p class="mx-3">
      Arthur V Bottcher
    </p>
    <v-btn
      color="primary"
      class="text-none"
      rounded
      depressed
      :loading="isSelecting"
      @click="onButtonClick"
    >
      <v-icon left>
        mdi-cloud-upload
      </v-icon>
      Enviar arquivo
    </v-btn>
    <input
      ref="fileInput"
      class="d-none"
      type="file"
      accept="image/*"
      @input="pickFile"
    >
  </v-main>
</template>

<script>
export default {
    data() {
        return {
            previewImage: null,
            isSelecting: false
        }
    },
    methods: {
        selectImage () {
            this.$refs.fileInput.click()
        },
        onButtonClick() {

            this.$refs.fileInput.click()
        },
        pickFile () {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    this.previewImage = e.target.result

                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        }
    }
}
</script>

<style scoped lang="scss">
.imagePreviewWrapper {
    width: 50px;
    height: 50px;
    display: block;
    cursor: pointer;
    margin: 0 auto;
    background-size: contain;
    background-position: center center;
}


</style>
