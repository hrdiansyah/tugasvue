<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-sm">
    <input v-model="message" @keyup="handleKeyup"/>
    <button @click="clearMessage"> PRESS ME </button>  
    <h5> {{ message }} </h5>
    </div>
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
  </q-page>
</template>

<script>
export default {
  data () {
    return {
    message: 'I LOVE VUE.js'
    }  
  },
  methods: {
    clearMessage() {
      this.message=''
    },
    handleKeyup(e) {
      console.log(e)
      if (e.keyCode==13) {
        this.message='ENTER'
      } else if (e.keyCode==27) {
        this.message='ESC'  
      }
    }
  }

}
</script>
