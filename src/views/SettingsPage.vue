<template>
  <page-layout
      page-title="Настройки"
      hide-settings-button
  >
    <ul class="container">
      <li>
        <ion-button
            @click="showIpModal = true"
        >
          Изменить IP-адресс
        </ion-button>
      </li>
    </ul>

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
import {defineComponent} from 'vue'
import {IonModal, IonButton, IonInput, IonItem, IonLabel} from "@ionic/vue";
import PageLayout from "@/components/page/PageLayout.vue";
import {getIpAddress, setIpAddress} from "@/data/arduino";

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
  methods: {
    changeIpAddress() {
      setIpAddress(this.ipAddress)
      this.showIpModal = false
    }
  },
  data() {
    return {
      showIpModal: false
    }
  },
  setup() {
    return {
      ipAddress: getIpAddress()
    } as SetupData
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 500px;
  margin: 0 auto;
  padding-top: 100px;
}
</style>
