<template>
  <q-page class="flex flex-center">
    <q-card style="width: 600px">
      <div id="form" class="q-mx-auto" style="max-width: 400px">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
        <q-card-section>
                  <q-input
                    size 
                    filled
                    placeholder="Masukkan jangka waktu projek"
                    v-model="jangka"
                    label="Jangka Waktu Project *"
                    :rules="[ val => val && val.length > 0 || 'ISI GOBLOK']"
                  />
                  <q-input
                    filled
                    placeholder="Masukkan nama projek"
                    v-model="namaProject"
                    label="Nama Projek "
                    :rules="[
                      val => val !== null && val !== '' || 'ISI GOBLOK',
                    ]"
                  />
                  <q-input
                    filled
                    placeholder="Masukkan tanggal projek"
                    v-model="tanggalProject"
                    label="Tanggal Projek "
                    :rules="[
                      val => val !== null && val !== '' || 'ISI GOBLOK',
                    ]"
                  />
                  <q-input
                    filled
                    placeholder="Masukkan nama ketua projek"
                    v-model="ketuaProject"
                    label="Nama Ketua Projek "
                    :rules="[
                      val => val !== null && val !== '' || 'ISI GOBLOK',
                    ]"
                  />
                  <q-input
                    filled
                    placeholder="Masukkan nama wakil ketua projek"
                    v-model="wakilProject"
                    label="Nama Wakil Ketua Projek "
                    :rules="[
                      val => val !== null && val !== '' || 'ISI GOBLOK',
                    ]"
                  />
                  <div>
                <q-btn class="full-width" size="lg" label="SUBMIT" type="submit" color="primary"/>
              </div>
            </q-card-section>
          </q-form>
        </div>
      </q-card>
    </q-page>
</template>

<style scoped>

  #form{
    margin-top: 10%; 
  }
  
</style>

<script>

import axios from 'axios'
export default {

  data(){
    return{
      jangka : "",
      namaProject : "",
      tanggalProject : "",
      ketuaProject : "",
      wakilProject : ""
    }
  },

  methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:3000/api/projects', {
    jangka: self.jangka,
    namaProject: self.namaProject,
    tanggalProject: self.tanggalProject,
    ketuaProject: self.ketuaProject,
    wakilProject: self.wakilProject
    
    })
    .then(function (response) {
      return  self.$router.push('/tblproject')
         
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>