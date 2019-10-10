<template>
  <div id= "bbg" class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Input Your Username *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Input Your Password *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your password',
        ]"
      />
      <div class="q-gutter-md">
        <q-btn 
          label="LOGIN" 
          type="submit" 
          color="secondary"
          />
        <q-btn 
          label="REGISTER" 
          type="submit" 
          color="warning"/>
      </div>
    </q-form>

  </div>
</template>

<style scoped>
#bbg {
    margin-top: 10%;
    margin-left: 30%;
    margin-right: 30%;
}
</style>

<script>
import login_api from '../api/login/index';
export default {
data () {
      return {
          username: "",
          password: ""
      }
  },
  methods : {
      onSubmit() {
          let self = this;
          login_api
            .userlogin(window, self.username, self.password)
            .then (function(result) {
                console.log(result)
                if (result) {
                    self.$router.push('/');
                }
            })
            .catch(function(err){
            console.log(err);
            });
      }
  }
}
</script>
