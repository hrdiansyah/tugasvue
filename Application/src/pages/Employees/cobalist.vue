<template>
  <div class="q-pa-md q-gutter-md">
      <div class="row">
          <div class="col" style="align : center">
    <!-- Qlist awal -->
    <q-list bordered class="rounded-borders q-mx-auto" style="max-width: auto">
      <q-item-label header>
        
        <q-btn color="blue" icon="add_box"  label="employee" class="sp" size="md" @click="add()"/>
        
      </q-item-label>
        
        <q-item class="bg-indigo-13 col-0">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm">No</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Nama</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Jenis Kelamin
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Tanggal Lahir
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Nomor Telepon
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Email
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex-center"> 
          <q-item-label class="q-mt-sm">Action
          </q-item-label>
        </q-item-section>

      </q-item>
        
        <!-- Tabel -->
      <q-item class="bg-grey-2 col-2" v-for="(employee, index ) in Emp" :key="employee.id">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm col-0">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="gt-sm flex flex-center">
          <q-item-label class="q-mt-sm">{{employee.nama}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{employee.jenisKelamin}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{employee.tanggalLahir}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{employee.nomorTelepon}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{employee.email}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex flex-center">
          <q-item-label lines="1">
           
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" @click="edit(employee)"/>
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(employee.id)" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- pagination awal  -->
      <div class="q-pa-lg flex flex-center">
        <q-pagination
            v-model="current"
            color="cyan"
            :max="5"
            :boundary-links="true"
          >
          </q-pagination>
      </div>
    <!-- pagination Akhir -->
      
    </q-list>
        </div>
            </div>
    <!-- Qlist akhir -->

    <!-- Form popup awal  -->
    <q-dialog v-model="dialog" persistent>
      <q-card>
        <q-card-section>
        <div id="form" class="q-mx-auto" style="max-width: 800px">
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="form.nama"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <!-- <q-input
              filled
              v-model="form.jeniskelamin"
              label="Your Gender "
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter your gender',
              ]"
            /> -->
            <q-radio dense v-model="form.jenisKelamin" val="Laki-laki" label="Laki-laki" />
            <q-radio dense v-model="form.jenisKelamin" val="Perempuan" label="Perempuan" />

            <!-- <q-input
              filled
              v-model="form.tanggalLahir"
              label="Your birth "
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter your birth date',
              ]"
            /> -->
                <q-input filled v-model="form.tanggalLahir" mask="date" :rules="['date']">
                <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="form.tanggalLahir" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                    </q-icon>
                </template>
                </q-input>

            <q-input
              filled
              v-model="form.nomorTelepon"
              label="Your phone "
              mask="(+62) ### - #### - ####"
              fill-mask
              hint="Mask: (+62) ### - #### - ####"
              
            />

            <q-input
              filled
              type="email"
              v-model="form.email"
              label="Your email "
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter your email address',
              ]"
            />

            <!-- <q-input filled v-model="form.email" type="email" prefix="Email:" suffix="@gmail.com">
                <template v-slot:prepend>
                    <q-icon name="mail" />
                </template>
            </q-input> -->

            <!-- Button awal -->
            <div>
              <q-btn flat label="Add" type="submit" color="primary" v-close-popup v-show="!updateSubmit"/>
              <q-btn flat label="Update" type="button" color="primary" v-close-popup v-show="updateSubmit" @click="update(form)"/>
              <q-btn flat label="Cancel" color="primary" v-close-popup="cancelEnabled" @click="batal()" />
            
            </div>
            <!-- Button akhir -->

          </q-form>
        </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- Form popup akhir  -->
  </div>
</template>

<script>
import employees from '../../api/Employee/indexs';

export default {
  data () {
    return {
      current:1,
      updateSubmit: false,
      dialog : false,
      cancelEnabled: false,
      Emp: [
        { 

        }
      ],
      form:{
        id : '',
        nama : '',
        jenisKelamin : '',
        tanggalLahir : '',
        nomorTelepon : '',
        email : '@gmail.com'
      }
    }
  },

  // Get data dari Api
  async mounted(){
    const response = await 
    employees.getEmpl(window)
        {
          this.Emp=response
        }
   },
  
  
  methods : {

    // Method untuk delete data By ID
    onDelete(id){
      if (confirm('Apakah anda yakin akan menghapus data ini ?')){
      employees.deleteEmp(window, id)
      .then((res)=>{
        employees.getEmpl(window)
        .then((res)=>{
               this.Emp=res.data
               this.$router.go('/employee')
           })
           .catch(()=>{
               alert('Error load data');
           })
        
      })
      .catch(()=>{
        alert('Error load data');
      })
      console.log("delete called");
      }
    },
    add(){
      this.dialog=true
      this.updateSubmit= false

    },
    
    // method untuk Tambah data
    onSubmit(){
      const self=this
      employees.postEmp(window, self.form.nama, self.form.jenisKelamin, self.form.tanggalLahir, 
      self.form.nomorTelepon, self.form.email
    )
      .then(function(result)
        {
          self.$router.go('/coba')
        })
      .catch(function(err){
        console.log(err);
      });
    },

    edit(employee){
       if (confirm('Anda akan di alihkan ke halaman Edit data, Tekan OK untuk lanjut atau Batal untuk kembali')){
        try {
            this.dialog=true
            this.updateSubmit= true
            this.form.id=employee.id
            this.form.nama=employee.nama
            this.form.jenisKelamin=employee.jenisKelamin
            this.form.tanggalLahir=employee.tanggalLahir
            this.form.nomorTelepon=employee.nomorTelepon
            this.form.email=employee.email
        } catch (error) {
            console.log(error.message)
        }
       }
      
    },
    batal(){
      if (confirm('Apakah Anda yakin ingin keluar proses ini !!!')){
      this.dialog=false
      }
    },
    update(id) {
        const self=this 
        employees.putEmp(window, self.form.id, self.form.nama, self.form.jenisKelamin,
        self.form.tanggalLahir, self.form.nomorTelepon, self.form.email)
        .then(function(result) {
            self.$router.go('/coba')
        })
        .catch(function(err){
            console.log(err);
        }); 
    }
  }
  
}
</script>

<style>
    
</style>