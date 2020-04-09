<template>
  <div id="app">
    <div class="mt-0">
        <b-card bg-variant="light" class="text-center">
            <b-card-text>
                <h3 class="mt-3 font-weight-normal">What's your country?</h3>
                <v-select class="pt-1" v-model="country" :options="countryList"></v-select>

                <h3 class="pt-4 font-weight-normal">What's your industry?</h3>
                <v-select class="pt-1" v-model="industry" :options="industryList"></v-select>

                <h3 class="pt-4 font-weight-normal">What is your monthly volume for credit card sales?</h3>
                <input v-model.number="volume" style="display:block; width: 100%;" type="number">

                <b-button
                        class="mt-5 display-4 btn-lg"
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
    body
        text-rendering: optimizelegibility
        -moz-osx-font-smoothing: grayscale
        -moz-text-size-adjust: none
</style>
