<template>
  <div id="app">
    <h1>Vue Select</h1>
    <v-select v-model="selected" :options="options"></v-select>
    <button
            class="select"
            :disabled="!selected"
            @click="select"
        >
            Select country
    </button>
  </div>
</template>

<script>
import createMomentsSDK from '@livechat/moments-sdk/es5'

export default {
    name: 'app',
    data() {
      return { 
          options: ["Poland","England"],
          momentsSDK: null,
          selected: null  
        }
    },
    methods: {
        select () {
            if (!this.selected || !this.momentsSDK) {
                return
            }
            this.momentsSDK.sendMessage({ text: this.selected })
            this.momentsSDK.close()
        }
    },
    async created () {
        createMomentsSDK({
            title: 'Date picker',
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
  max-width: 30em;
  margin: 1em auto;
}
</style>
