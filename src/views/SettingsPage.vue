<template>
  <page-layout
      page-title="Настройки"
      hide-settings-button
  >
    <div class="wrapper">
      <ul class="container container--first">
        <li>
          <ion-button
              @click="showIpModal = true"
          >
            Изменить IP-адресс
          </ion-button>
        </li>
      </ul>
      <ul class="container container--second">
        <li>
          <ion-button
              @click="switchOnAll"
          >
            Включить все
          </ion-button>
        </li>
        <li>
          <ion-button
              @click="switchOffAll"
          >
            Выключить все
          </ion-button>
        </li>
      </ul>
    </div>

    <ion-modal
        :is-open="showIpModal"
        :swipe-to-close="true"
        :presenting-element="$parent.$refs.ionRouterOutlet"
        @did-dismiss="showIpModal = false"
    >
      <ion-item>
        <ion-label position="stacked">IP адрес</ion-label>
        <ion-input
            v-model="ipAddress"
            placeholder="127.0.0.1"
        />
      </ion-item>
      <div style="padding: 20px; display: flex; justify-content: flex-end">
        <ion-button
            color="success"
            @click="changeIpAddress"
        >
          Сохранить
        </ion-button>
      </div>
    </ion-modal>
  </page-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonModal, IonButton, IonInput, IonItem, IonLabel } from "@ionic/vue";
import PageLayout from "@/components/page/PageLayout.vue";
import { getIpAddress, setIpAddress } from "@/data/arduino";
import { getEmptyLights, getFilledLights, updateLights } from '@/data/lights'
import { initialOthers, updateOthers } from '@/data/others'

type SetupData = {
  ipAddress: string
}

export default defineComponent({
  name: 'SettingsPage',
  components: {
    PageLayout,
    IonModal,
    IonButton,
    IonInput,
    IonItem,
    IonLabel
  },
  data () {
    return {
      showIpModal: false
    }
  },
  setup () {
    return {
      ipAddress: getIpAddress()
    } as SetupData
  },
  methods: {
    changeIpAddress () {
      setIpAddress(this.ipAddress)
      this.showIpModal = false
    },
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
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
}

.container {
  justify-content: center;
  display: flex;
  align-items: center;

  max-width: 500px;
  margin: 0 auto;
}

.container--second {
  justify-content: center;
  display: flex;
  align-items: center;

  padding-top: 20px;
}

.container--second ion-button:first-child {
  padding-right: 10px;
}

.container--second ion-button:last-child {
  padding-left: 10px;
}
</style>
