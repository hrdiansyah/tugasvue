<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        /> -->

        <q-toolbar-title class=absolute-center>
          Awesome To Do
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    
    <q-footer>
       <q-tabs>
        <q-route-tab 
               v-for="nav in navs" 
               :key="nav.label"
               :to="nav.to"
               :icon="nav.icon" 
               :label="nav.label" />
        <!-- <q-route-tab  
               to="/setting"
               icon="settings_applications" 
               label="Settings" /> -->
        </q-tabs>
    </q-footer>
    
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="200"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header></q-item-label>
        <q-item clickable tag="a" href="/#/login">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
            <q-item-label caption>Login Form</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/register">
          <q-item-section avatar>
            <q-icon name="laptop" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Register</q-item-label>
            <q-item-label caption>Register New Account</q-item-label>
          </q-item-section>
        </q-item>

        <q-item 
          v-for="nav in navs"          
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact 
          clickable>  
          <q-item-section avatar>
          <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
          <q-item-label> {{ nav.label }} </q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item to="/setting" exact clickable>
          <q-item-section avatar>
            <q-icon name="settings_applications" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Setting</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item clickable tag="a" href="/#/coba">
          <q-item-section avatar>
            <q-icon name="folder" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Data Karyawan</q-item-label>
            <q-item-label caption>Menampilkan data Karyawan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/tampilprojek">
          <q-item-section avatar>
            <q-icon name="bookmarks" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Data Projek</q-item-label>
            <q-item-label caption>Menampilkan data projek</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        { 
          label:'ToDo',
          icon:'list',
          to:'/todo'
        },
        { 
          label:'Setting',
          icon:'settings_applications',
          to:'/setting'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }

    .q-drawer {
      .q-router-link--active {
      color: white !important;
      } 
    }
</style>