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
      <router-link to="/settings">
        <ion-button>
          Настройки
        </ion-button>
      </router-link>
      <router-link to="/areas">
        <ion-button>
          Дома по м<sup>2</sup>
        </ion-button>
      </router-link>
    </div>
  </page-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageLayout from '@/components/page/PageLayout.vue'
import { IonButton } from '@ionic/vue'

export default defineComponent({
  components: {
    PageLayout,
    IonButton
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  height: 100%;
}

.container ion-button {
  width: 200px;
  height: 50px;
}
</style>
