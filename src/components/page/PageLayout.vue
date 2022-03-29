<template>
  <ion-page>
    <ion-header :translucent="true">
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
        <router-link
            v-if="!hideSettingsButton"
            slot="end"
            to="/settings"
        >
          <ion-button
              strong
          >
            Настройки
          </ion-button>
        </router-link>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <main>
        <div class="overlay">
          <slot />
        </div>
      </main>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonHeader,
  IonBackButton,
  IonTitle,
  IonToolbar,
  IonPage,
  IonContent
} from "@ionic/vue";

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
    },
    hideSettingsButton: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    backButtonText (): string {
      const win = window as any;
      const mode = win && win.Ionic && win.Ionic.mode;
      return mode === 'ios' ? 'Back' : '';
    }
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Lato:wght@100;300;400;700;900&family=Roboto+Slab:wght@100;300;400;500;600;700&family=Yeseva+One&display=swap');

ion-title {
  color: #000000;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
}

main {
  min-height: 100vh;
  margin: 0;
  padding: 0;

  background-image: url("~/src/assets/img/bg-durmon.png");
  background-repeat: no-repeat;
  background-size: cover;
  /*backdrop-filter: brightness(45%);*/
}

ion-button {
  padding: 0px 20px;
}

.overlay {
  height: 100vh;
  background-color: rgba(0, 0, 0, 80%);
}

</style>
