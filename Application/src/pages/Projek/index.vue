<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn 
        class="sp"
        to="/addprojek" color="red-10" icon="add" label="Tambah Data" />
      <q-table
      :data="admins"
      :columns="columns"
      row-key="name"
      >
       <!-- <template v-slot:body-cell="props">
        <q-td :props="props">
          <q-badge color="blue" :label="props.value" />
        </q-td>
      </template> -->
      </q-table>
    </div>
  </template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      columns: [
        {
          name: 'jangka',
          required: true,
          label: 'Jangka Waktu',
          align: 'center',
          field: row => row.jangka,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'namaProject',
          required: true,
          label: 'Nama Projek',
          align: 'center',
          field: row => row.namaProject,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'tanggalProject',
          required: true,
          label: 'Tanggal Projek',
          align: 'center',
          field: row => row.tanggalProject,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'ketuaProject',
          required: true,
          label: 'Ketua Projek',
          align: 'center',
          field: row => row.ketuaProject,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'wakilProject',
          required: true,
          label: 'Wakil Projek',
          align: 'center',
          field: row => row.wakilProject,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          required: true,
          label: 'Action',
          align: 'center',
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        }
         ],
      admins: [
        {
          // nama : '',
          // email : ''
        }
      ]
    }
  },
  async mounted(){
    const response = await axios.get('http://localhost:3000/api/projects')
    this.admins=response.data
  },
    editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

    deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

    close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

    save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    }
</script>
<style scoped>
    .sp {
        margin-bottom: 10px;
    }
</style>