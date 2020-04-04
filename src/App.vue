<template>
  <div id="app">
    <h1>Online Form</h1>

    <h2>Select country:</h2>
    <v-select v-model="selected_country" :options="country_options"></v-select>

    <h2>Select language:</h2>
    <v-select v-model="selected_language" :options="language_options"></v-select>
    <button
            class="select"
            :disabled="!selected_country || !selected_language"
            @click="select"
        >
            Send Form
    </button>
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

<style>
body {
  width: 100%;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}

h1,.muted {
  color: #2c3e5099;
}

h1 {
  font-size: 26px;
  font-weight: 600;
}

h2 {
  font-size: 18px;
  font-weight: 400;
}

.select {
    margin-top: 25px;
    width: 99%;
    color: #ffffff !important;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
    background: #5283ec;
    padding: 20px;
    border: 4px solid #2967ad !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
}

.select:disabled {
    color: #ffffff !important;
    background: #888888;
    border-color: #4e4e4e !important;
}

#app {
  width: 99%;
  margin: 1em auto;
}
</style>
