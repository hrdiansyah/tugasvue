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
                    placeholder="Masukkan Nama Employee"
                    v-model="nama"
                    label="Nama Employee *"
                    :rules="[ val => val && val.length > 0 || 'ISI GOBLOK']"
                  />
                  <q-input
                    filled
                    placeholder="Masukkan jenis kelamin"
                    v-model="jenisKelamin"
                    label="Jenis Kelamin "
                    :rules="[
                      val => val !== null && val !== '' || 'ISI GOBLOK',
                    ]"
                  />
                  <div class="q-gutter-sm">
                    <q-radio v-model="shape" val="laki-laki" label="Laki-laki" />
                    <q-radio v-model="shape" val="perempuan" label="Perempuan" />
                  </div>
                  <q-input
                    filled
                    placeholder="Masukkan tanggal lahir"
                    v-model="tanggalLahir"
                    label="Tanggal Lahir "
                    :rules="[
                      val => val !== null && val !== '' || 'ISI GOBLOK',
                    ]"
                  />
                  <q-input filled v-model="date" mask="date" :rules="['date']">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date 
                            v-model="date" 
                            @input="() => $refs.qDateProxy.hide()"
                            />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-input
                    filled
                    placeholder="Masukkan nomor telepon"
                    v-model="nomorTelepon"
                    label="Nomor telepon "
                    :rules="[
                      val => val !== null && val !== '' || 'ISI GOBLOK',
                    ]"
                  />
                  <q-input
                    filled
                    placeholder="Masukkan email"
                    v-model="email"
                    label="Email "
                    :rules="[
                      val => val !== null && val !== '' || 'ISI GOBLOK',
                    ]"
                  />
                  <div>
                <q-btn class="half-width" size="md" label="Submit" type="submit" color="primary"/>
              </div>
            </q-card-section>
          </q-form>
        </div>
      </q-card>
        <div class="q-pa-md" style="max-width: 250px;">
    <q-toggle v-model="visible" label="Visible image" class="q-mb-sm" />

    <q-slide-transition>
      <div v-show="visible">
        <img
          class="responsive"
          src="~assets/tes.jpeg"
        >
      </div>
    </q-slide-transition>
  </div>
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
    return {
      visible: true,
      shape: 'Laki-laki',
      date: '2019/10/16',
      nama : "",
      jenisKelamin : "",
      tanggalLahir : "",
      nomorTelepon : "",
      email : ""
    }
  },

  methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:3000/api/Employees', {
    nama: self.nama,
    jenisKelamin: self.jenisKelamin,
    tanggalLahir: self.tanggalLahir,
    nomorTelepon: self.nomorTelepon,
    email: self.email
    
    })
    .then(function (response) {
      return  self.$router.push('/table')
         
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>