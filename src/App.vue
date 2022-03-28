<template>
  <ion-app>
    <ion-router-outlet/>
  </ion-app>
</template>

<script lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import {defineComponent} from 'vue';
import {getLights, Lights, setLights} from "@/data/lights";
import {syncLights} from "@/api/lights";
import {ROW} from "@/data/sections";
import {getIpAddress, setIpAddress} from "@/data/arduino";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  mounted() {
    this.setInitialAddress()
    this.setInitialLights()
  },
  methods: {
    setInitialAddress() {
      setIpAddress(getIpAddress())
    },
    setInitialLights() {
      const lights: Lights = getLights()
      Object.keys(ROW).forEach(row => {
        if (!(row in lights)) {
          lights[parseInt(row)] = []
        }
      })
      setLights(lights)
      syncLights(lights)
    }
  }
});
</script>
