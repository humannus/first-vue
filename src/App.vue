<template>
  <div id="app">
    <h1>Vue Select</h1>
    <v-select v-model="selected_country" :options="countries"></v-select>
    <button
            class="select"
            :disabled="!selected_country"
            @click="select"
        >
            Send form
    </button>
  </div>
</template>

<script>
import createMomentsSDK from '@livechat/moments-sdk/es5'

export default {
    name: 'app',
    data() {
      return { 
          countries: ["Poland","England"],
          momentsSDK: null,
          selected: null  
        }
    },
    methods: {
        select () {
            if (!this.selected_country || !this.momentsSDK) {
                return
            }
            this.momentsSDK.setAttributes({ country: selected_country, source: "Organic" });
            this.momentsSDK.sendMessage({ text: "Processing..." })
            this.momentsSDK.close()
        }
    },
    async created () {
        createMomentsSDK({
            title: 'Online form',
        }).then(momentsSDK => {
            this.momentsSDK = momentsSDK
        })
    }
}
</script>

<style>
body {
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

#app {
  width: 100%;
  max-width: 30em;
  margin: 1em auto;
}
</style>
