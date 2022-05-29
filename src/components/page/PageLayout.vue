<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-back-button
            v-if="hasButton"
            slot="start"
            :text="backButtonText"
            default-href="/">
        </ion-back-button>
        <ion-title>
          {{ pageTitle }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div :style="{padding: `50px 0`}">
        <slot />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonHeader,
  IonBackButton,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent
} from "@ionic/vue";
import { fetchIpAddress, setIpAddress } from '@/data/arduino'

export default defineComponent({
  name: 'PageLayout',
  components: {
    IonPage,
    IonHeader,
    IonBackButton,
    IonTitle,
    IonToolbar,
    IonContent
  },
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    hasButton: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  mounted () {
    this.setInitialAddress()
  },
  computed: {
    backButtonText (): string {
      const win = window as any;
      const mode = win && win.Ionic && win.Ionic.mode;
      return mode === 'ios' ? 'Back' : '';
    }
  },
  methods: {
    async setInitialAddress () {
      setIpAddress(
          (await fetchIpAddress()).data
      )
    },
  }
})
</script>
<style scoped>
ion-title {
  color: #000000;
  font-weight: 700;
}

ion-content {
  --background: url("~/src/assets/img/bg-durmon.jpg");
  --background-repeat: no-repeat;
  --background-size: cover;

  backdrop-filter: brightness(110%);
}
</style>
