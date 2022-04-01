<template>
  <ion-modal
      :is-open="value"
      :swipe-to-close="true"
      :presenting-element="$parent.$refs.ionRouterOutlet"
      @did-dismiss="closeModal"
  >
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Дом №{{ house.id }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal">Закрыть</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <article
        class="house-info"
    >
      <div
        v-if="houseInfo"
      >
        <ion-slides :options="slideOpts">
          <ion-slide
              v-for="image in houseInfo.images"
              :key="image"
          >
            <div class="house-info__image">
              <img
                  :src="image"
                  :alt="image"
              >
            </div>
          </ion-slide>
        </ion-slides>
        <p>
          {{ houseInfo.description }}
        </p>
      </div>
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
import { defineComponent, PropType } from 'vue'
import { House } from "@/data/sections";
import { IonModal, IonButton, toastController, IonSlides, IonSlide } from "@ionic/vue";
import { getHouseState, turnOffLight, turnOnLight } from "@/data/lights";
import { getHouseInfo } from '@/api/houses'

export default defineComponent({
  name: 'HouseModal',
  components: {
    IonModal,
    IonButton,
    IonSlides,
    IonSlide
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
  data () {
    return {
      lightStatus: false,
      houseInfo: null,
      slideOpts: {
        initialSlide: 1,
        speed: 400
      }
    }
  },
  computed: {
    btnType () {
      return this.lightStatus
          ? 'danger'
          : 'success'
    },
    btnText () {
      return this.lightStatus
          ? 'Отключить'
          : 'Включить'
    }
  },
  mounted () {
    this.lightStatus = getHouseState(this.house)
    this.setHouseInfo()
  },
  methods: {
    closeModal () {
      this.$emit('update:value', false)
    },
    async updateLightStatus () {
      this.lightStatus = !this.lightStatus
      try {
        if (this.lightStatus) {
          await turnOnLight(this.house)
        } else {
          await turnOffLight(this.house)
        }
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },
    handleSettings () {
      location.href = 'settings'
    },
    async setHouseInfo () {
      const { data } = await getHouseInfo(this.house.id)
      if (data) {
        this.houseInfo = data
      }
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
}
</style>
