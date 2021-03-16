<template>
  <v-main class="d-flex">
    <AvbAvatar :image="previewImage" />
    {{ name }}
    <v-btn
      color="primary"
      class="text-none ml-2"
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
import AvbAvatar from '../components/Avb-Avatar'
export default {
    components:{AvbAvatar},
    props:{
        name:{
            type: String,
            default:''
        }
    },
    data() {
        return {
            previewImage: null,
            isSelecting: false
        }
    },
    mounted() {
        this.active()
    },
    methods: {
        active(){
            this.previewImage = sessionStorage.getItem('userImage')
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
                    sessionStorage.setItem('userImage', this.previewImage)
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
