<template>
  <div id="app">
    <div class="mt-0">
        <b-card bg-variant="light" class="text-center">
            <b-card-text>
                <h5 class="mt-3 font-weight-normal">What's your country?</h5>
                <v-select class="pt-1" v-model="country" :options="countryList"></v-select>

                <h5 class="pt-4 font-weight-normal">What's your industry?</h5>
                <v-select class="pt-1" v-model="industry" :options="industryList"></v-select>

                <h5 class="pt-4 font-weight-normal">What is your monthly volume for credit card sales?</h5>
                <input class="pt-1 t-input" v-model.number="volume" style="width: 100%;" type="number">

                <b-button
                        class="mt-5 display-4 btn-md"
                        block
                        variant="primary"
                        :disabled="!country || !industry || !volume"
                        @click="select"
                    >
                        Send form 👉
                </b-button>
            </b-card-text>
        </b-card>
    </div>
  </div>
</template>

<script>
import createMomentsSDK from '@livechat/moments-sdk/es5'
import countryCodes from '../data/countryCodes';
import industries from '../data/industries';

export default {
    name: 'app',
    data() {
      return { 
          countryList: countryCodes,
          industryList: industries,
          momentsSDK: null,
          country: null,
          industry: null,
          volume: null
        }
    },
    methods: {
        select () {
            if (!this.country || !this.momentsSDK) {
                return
            }
            this.momentsSDK.setAttributes({ country: this.country, industry: this.industry, volume: this.volume});
            this.momentsSDK.sendMessage({ text: "⚙️ Processing..." })
            this.momentsSDK.close()
        }
    },
    async created () {
        createMomentsSDK({
            title: '📝 Online Form',
        }).then(momentsSDK => {
            this.momentsSDK = momentsSDK
        })
    }
}
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap')
    body
        font-family: 'Source Sans Pro', sans-serif
        text-rendering: optimizelegibility
        -moz-osx-font-smoothing: grayscale
        -moz-text-size-adjust: none
    .t-input
        background-color: #f8f9fa
        border: 1px solid rgba(60,60,60,.26)
</style>
