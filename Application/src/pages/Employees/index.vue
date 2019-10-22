<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn class="spasi" to="/add" color="deep-orange-7" icon="add" label="Tambah Data" />
    <q-btn class="spasi" color="cyan-7" icon="show_chart" label="show" @click="getdata()" />
    <!-- <q-btn class="spasi" color="red-7" icon="keyboard_hide" label="hide" @click="getdata()" /> -->
    <div>
      <q-table
      :data="dataEmployee"
      :columns="columns"
      row-key="name"
      >
      </q-table> 
    </div>
  </div>
</template>

<script>

import employee from '../../api/Employee/indexs';

export default {
  data () {
    return {
      columns: [
        {
          name: 'nama',
          required: true,
          label: 'Nama',
          align: 'center',
          field: row => row.nama,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'jenisKelamin',
          required: true,
          label: 'Jenis Kelamin',
          align: 'center',
          field: row => row.jenisKelamin,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'tanggalLahir',
          required: true,
          label: 'Tanggal Lahir',
          align: 'center',
          field: row => row.tanggalLahir,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'nomorTelepon',
          required: true,
          label: 'Telp',
          align: 'center',
          field: row => row.nomorTelepon,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'email',
          required: true,
          label: 'Email',
          align: 'center',
          field: row => row.email,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        }
      ],
      dataEmployee: [
      {}
      ]
    }
  },
  methods: {
  getdata() {
        let self = this;
        employee.getEmpl(window).then(function(result) {
        self.dataEmployee = result
      })
    }
  }
}
</script>

<style>
  .spasi {
    margin-bottom: 10px;
  }
</style>