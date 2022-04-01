<template>
  <page-layout
      :page-title="pageTitle"
  >
    <div class="others-list">
      <ion-button
          v-for="other in others"
          :key="other.id"
          @click="changeStatus(other)"
      >
        {{ other.label }}
      </ion-button>
    </div>
  </page-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue'
import PageLayout from "@/components/page/PageLayout.vue";
import { getOthers, Other } from '@/data/others'
import { updateOthers } from '@/data/others'

export default defineComponent({
  name: 'OthersPage',
  components: {
    IonButton,
    PageLayout
  },
  setup (): {
    others: Other[]
  } {
    return {
      others: getOthers()
    }
  },
  computed: {
    pageTitle (): string {
      return 'Другие'
    }
  },
  methods: {
    changeStatus (other: Other) {
      const foundOther = this.others.find(item => item.id === other.id)!
      foundOther.value = !other.value

      updateOthers(this.others)
    }
  }
});
</script>

<style scoped>
.others-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  max-width: 500px;
  margin: 0 auto;
  padding-top: 100px;
}

.others-list ion-button {
  width: 48%;
}
</style>
