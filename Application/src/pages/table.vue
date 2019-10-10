<template>
      <div class="q-pa-md">
    <q-table
      title="Users"
      :data="data"
      :columns="columns"
      row-key="name"
      :pagination.sync="serverPagination"
      :loading="loading"
      @request="request"
      dark
      color="amber"
    />
  </div>
</template>

<script>
import login_api from '../api/table/indextbl';
export default {
    data () {
    return {
      filter: '',
      loading: false,
      serverPagination: {
        page: 1,
        rowsNumber: 10 // specifying this determines pagination is server-side
      },
      data: [],
      serverData: [],
      columns: [
        { name: 'realm', align: 'center', label: 'realm', field: 'realm', sortable: true },
        { name: 'username', label: 'username', field: 'username', sortable: true },
        { name: 'email', label: 'email', field: 'email' },
        { name: 'password', label: 'password', field: 'password' }
      ],
    }
  },
    methods: {
    request ({ pagination, filter }) {
      // we set QTable to "loading" state
      this.loading = true

      // we do the server data fetch, based on pagination and filter received
      // (using Axios here, but can be anything; parameters vary based on backend implementation)

      axios
      .get(`/data/${pagination.page}?sortBy=${pagination.sortBy}&descending=${pagination.descending}&filter=${filter}`)
      .then(({ data }) => {
        // updating pagination to reflect in the UI
        this.serverPagination = pagination
        // we also set (or update) rowsNumber
        this.serverPagination.rowsNumber = data.rowsNumber
        // then we update the rows with the fetched ones
        this.serverData = data.rows
        // finally we tell QTable to exit the "loading" state
        this.loading = false
      })
      .catch(error => {
        // there's an error... do SOMETHING
        // we tell QTable to exit the "loading" state
        this.loading = false
      })
    }
  },
  mounted () {
    // once mounted, we need to trigger the initial server data fetch
    this.request({
      pagination: this.serverPagination,
      filter: this.filter
    })
  }
}
</script>
  
<style scoped>

</style>