<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { getLights, Lights, setLights } from "@/data/lights";
import { syncLights } from "@/api/lights";
import { ROW } from "@/data/sections";
import { fetchIpAddress, getIpAddress, setIpAddress } from "@/data/arduino";
import { getOthers, updateOthers } from '@/data/others'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  beforeMount () {
    this.setInitialLights()
    this.setInitialOthers()
  },
  mounted () {
    this.setInitialAddress()
  },
  methods: {
    async setInitialAddress () {
      setIpAddress(
          (await fetchIpAddress()).data
      )
    },
    setInitialLights () {
      const lights: Lights = getLights()
      Object.keys(ROW).forEach(row => {
        if (!isNaN(parseInt(row)) && !(row in lights)) {
          lights[parseInt(row)] = []
        }
      })
      setLights(lights)
      syncLights(lights)
    },
    setInitialOthers () {
      updateOthers(getOthers())
    }
  }
});
</script>
