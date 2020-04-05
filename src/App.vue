<template>
  <div id="app">
    <div class="mt-0">
        <b-card-group deck>
            <b-card bg-variant="light" class="text-center">
                <b-card-text>
                    <h3 class="pt-3">Select country:</h3>
                    <v-select class="pt-1" v-model="selected_country" :options="country_options"></v-select>

                    <h3 class="pt-4">Select language:</h3>
                    <v-select class="pt-1" v-model="selected_language" :options="language_options"></v-select>
                    <b-button
                            class="mt-5 select"
                            block
                            variant="primary"
                            :disabled="!selected_country || !selected_language"
                            @click="select"
                        >
                            Send form 👉
                    </b-button>
                    <country-select />
                </b-card-text>
            </b-card>
        </b-card-group>
    </div>
  </div>
</template>

<script>
import createMomentsSDK from '@livechat/moments-sdk/es5'

export default {
    name: 'app',
    data() {
      return { 
          country_options: ["Poland","England"],
          language_options: ["Polish","English"],
          momentsSDK: null,
          selected_country: null,
          selected_language: null
        }
    },
    methods: {
        select () {
            if (!this.selected_country || !this.momentsSDK) {
                return
            }
            this.momentsSDK.setAttributes({ selected_country: this.selected_country, selected_language: this.selected_language});
            this.momentsSDK.sendMessage({ text: "Processing..." })
            this.momentsSDK.close()
        }
    },
    async created () {
        createMomentsSDK({
            title: 'Online Form',
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
