<template>
  <ion-modal
      :is-open="value"
      :swipe-to-close="true"
      :presenting-element="$parent.$refs.ionRouterOutlet"
      @did-dismiss="closeModal"
  >
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>№ {{ house.id }} квартира </ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal">Закрыть</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <article class="house-info">
      <div
          class="house-info__image"
          :style="{backgroundImage: `url(${imageUrl})`}"
      ></div>
      <h3>85 ADET VİLLA PARSELİ (55.800 m²) {{ house.id }}</h3>
      <p>
        {{ content }}
      </p>

      <ion-button
          :color="btnType"
          strong
          @click="updateLightStatus"
      >
        {{ btnText }}
      </ion-button>
    </article>
  </ion-modal>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {House} from "@/data/sections";
import {IonModal, IonButton, toastController} from "@ionic/vue";
import {getHouseState, turnOffLight, turnOnLight} from "@/data/lights";

export default defineComponent({
  name: 'HouseModal',
  components: {
    IonModal,
    IonButton
  },
  props: {
    value: {
      type: Boolean
    },
    house: {
      type: Object as PropType<House>,
      required: true
    }
  },
  data() {
    return {
      lightStatus: false,
    }
  },
  computed: {
    imageUrl() {
      return 'https://i.pinimg.com/474x/dd/62/56/dd6256b6cb04d6cfe97f0aa68553aa02.jpg'
    },
    content() {
      return `450-500 m² (1 parsel)`


    },
    btnType() {
      return this.lightStatus
          ? 'danger'
          : 'success'
    },
    btnText() {
      return this.lightStatus
          ? 'Отключить'
          : 'Включить'
    }
  },
  mounted() {
    this.lightStatus = getHouseState(this.house)
  },
  methods: {
    closeModal() {
      this.$emit('update:value', false)
    },
    async updateLightStatus() {
      this.lightStatus = !this.lightStatus
      try {
        if (this.lightStatus) {
          await turnOnLight(this.house)
        } else {
          await turnOffLight(this.house)
        }
      } catch (e) {
        if (e instanceof Error) {
          await this.showToast(e)
        }
      }
    },
    async showToast(e: Error) {
      const toast = await toastController
          .create({
            // message: 'Ошибка при соединении с платой',
            message: e.message + e.name,
            position: 'bottom',
            buttons: [
              {
                text: 'Перейти к настройкам',
                handler: this.handleSettings
              }
            ]
          })
      await toast.present();
    },
    handleSettings() {
      location.href = 'settings'
    }
  }
})
</script>

<style scoped>
h3 {
  color: #333333;
}
p {
  color: #737373;
}
ion-title {
   font-weight: bold;
}
.house-info {
  padding: 25px 20px;
}

.house-info__image {
  height: 250px;

  background-size: cover;
}
</style>
