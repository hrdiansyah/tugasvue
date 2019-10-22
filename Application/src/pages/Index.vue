<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-sm">
    <!-- <input v-model="message" @keypress="handleKeyup"/>
    <button @click="clearMessage"> PRESS ME </button>   -->
    <!-- <h5> {{ message }} </h5> -->
    <!-- <h5 v-if="message.length">{{ message }}</h5>
    <h6 v-else>No Message</h6>
    <p> {{ uppercaseMessage() }} </p> -->
    <ul> 
      <li v-for="task in tasks"
          :key="task.name">
      <div> {{ task.name }} </div>
      <small> due {{ task.dueDate }} @ {{ task.dueTime }} </small>
      </li>
      </ul>
    </div>
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
  </q-page>
</template>

<script>
export default {
  data () {
    return {
    message: 'I LOVE VUE.js',
    tasks: [{
          name: "Go to Office",
          dueDate: "2019/10/10",
          dueTime: "08:25"
          },
          {
          name: "Coding Program",
          dueDate: "2019/10/10",
          dueTime: "04:20"
          },
          {
          name: "Go to Sleep",
          dueDate: "2019/10/10",
          dueTime: "23:15"
          }
      ]
    }  
  },
  methods: {
    clearMessage() {
      this.message=''
    },
    handleKeyup(e) {
      // console.log(e)
      if (e.keyCode==13) {
        this.message='ENTER'
      } else if (e.keyCode==27) {
        this.message='ESC'  
      }
    },
    uppercaseMessage() {
    return this.message.toUpperCase()
      }  
    }
  }
</script>
