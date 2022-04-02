<template>
  <page-layout
      page-title="Durmon Villalari"
      :has-button="false"
  >
    <div class="container">
      <router-link to="/home">
        <ion-button>
          Секции
        </ion-button>
      </router-link>
      <router-link to="/areas">
        <ion-button>
          Дома по м<sup>2</sup>
        </ion-button>
      </router-link>
          <ion-button
              @click="switchOnAll"
          >
              Включить все
          </ion-button>
          <ion-button
              @click="switchOffAll"
          >
            Выключить все
          </ion-button>
      <router-link to="/settings">
        <ion-button>
          Настройки
        </ion-button>
      </router-link>
    </div>
  </page-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageLayout from '@/components/page/PageLayout.vue'
import { IonButton } from '@ionic/vue'
import {setIpAddress} from "@/data/arduino";
import {getEmptyLights, getFilledLights, updateLights} from "@/data/lights";
import {initialOthers, updateOthers} from "@/data/others";

export default defineComponent({
  components: {
    PageLayout,
    IonButton
  },
  methods: {
    switchOnAll () {
      updateLights(getFilledLights())

      updateOthers(
          [...initialOthers].map(other => ({
            ...other,
            value: true
          }))
      )
    },
    switchOffAll () {
      updateLights(getEmptyLights())

      updateOthers(
          [...initialOthers].map(other => ({
            ...other,
            value: false
          }))
      )
    }
  },
})
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;

  height: 100%;
}

.container ion-button {
  width: 250px;
  height: 150px;
  padding-top: 20px;

}
ion-button{
  font-size: 20px;
}
</style>
