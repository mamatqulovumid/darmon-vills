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
    <main>
      <div class="overlay">
        <div class="logo"></div>
        <slot/>
      </div>
    </main>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {
  IonHeader,
  IonBackButton,
  IonTitle,
  IonToolbar,
  IonPage
} from "@ionic/vue";

export default defineComponent({
  name: 'PageLayout',
  components: {
    IonPage,
    IonHeader,
    IonBackButton,
    IonTitle,
    IonToolbar
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
    backButtonText(): string {
      const win = window as any;
      const mode = win && win.Ionic && win.Ionic.mode;
      return mode === 'ios' ? 'Back' : '';
    }
  }
})
</script>
<style scoped>
main {
  height: 100vh;
  margin: 0;
  padding: 0;

  background-image: url("~/src/assets/img/durmonvill.png");
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: brightness(45%);
}

.overlay {
  height: 100%;
  background-color: rgba(0, 0, 0, 40%);
}

/*.logo {*/
/*  position: absolute;*/
/*  left: calc(50% - 100px);*/
/*  top: calc(50% - 100px);*/

/*  width: 200px;*/
/*  height: 200px;*/

/*  background-image: url("~/src/assets/img/logo.png");*/
/*  background-repeat: no-repeat;*/
/*  background-size: cover;*/
/*}*/
</style>
