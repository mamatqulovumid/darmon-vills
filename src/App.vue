<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex'

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
  methods: {
    ...mapActions(({
      setInitialLights: 'setInitialLights',
      setInitialOthers: 'setInitialOthers',
    }))
  }
});
</script>
