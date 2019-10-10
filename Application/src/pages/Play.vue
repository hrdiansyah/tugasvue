<template>
  <q-page padding>
    <div class="q-gutter-md">
      <div class="col">
        Hardiancrown@gmail.com
      </div>
      <div>
      <q-btn color="red" @click="showLoading" label="NOW LOADING" />
      <q-btn color="primary" label="TEKAN" @click="handleClick"/>
      <q-input outlined v-model="MyInput" label="Masukkan nama"/>
      </div>
      <q-page padding>
          <p v-for="n in 15 " :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>

          <!-- place QPageScroller at end of page -->
          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>
        </q-page>
    <div>
      <q-btn class="glossy" rounded color="deep-orange" label="Glossy Rounded" />
       <q-btn unelevated color="secondary" label="Unelevated" />
    <q-btn unelevated rounded color="secondary" label="Unelevated Rounded" />
    <q-btn unelevated round color="secondary" icon="card_giftcard" />
    </div>
    </div>
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <div>
      Lorem ipsum.
      </div>
  </q-page>
</template>

<script>
import { QSpinnerFacebook } from 'quasar'
export default {
  data () {
    return {
      MyInput: ''
    }
  },
  methods: {
    handleClick () {
      this.MyInput = 'TERTEKAN'
    },
    showLoading () {
      const spinner = typeof QSpinnerFacebook !== 'undefined'
        ? QSpinnerFacebook // Non-UMD, imported above
          : Quasar.components.QSpinnerFacebook // eslint-disable-line
      /* End of Codepen workaround */
      this.$q.loading.show({
        spinner,
        spinnerColor: 'blue',
        spinnerSize: 100,
        backgroundColor: 'grey',
        message: 'Some important process is in progress. Tunggu Sebentar',
        messageColor: 'black'
      })
      // hiding in 3s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 3000)
    }
  }
}
</script>
