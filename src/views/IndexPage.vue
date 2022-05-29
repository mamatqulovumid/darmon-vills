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
      <router-link to="/others">
        <ion-button>
          Другие
        </ion-button>
      </router-link>
    </div>
  </page-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageLayout from '@/components/page/PageLayout.vue'
import { IonButton } from '@ionic/vue'
import { getEmptyLights, getFilledLights } from "@/data/lights";
import { getFilledOthers, initialOthers } from "@/data/others";
import { mapActions } from 'vuex'

export default defineComponent({
  components: {
    PageLayout,
    IonButton
  },
  methods: {
    ...mapActions({
      updateLights: 'updateLights',
      updateOthers: 'updateOthers'
    }),
    switchOnAll () {
      this.updateLights(getFilledLights())
      this.updateOthers(getFilledOthers())
    },
    switchOffAll () {
      this.updateLights(getEmptyLights())
      this.updateOthers(initialOthers)
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

ion-button {
  font-size: 20px;
}
</style>
