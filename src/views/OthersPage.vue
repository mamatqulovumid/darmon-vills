<template>
  <page-layout
      :page-title="pageTitle"
  >
    <div class="others-list">
      <ion-button
          v-for="other in others"
          :key="other.id"
          :color="getStatus(other)"
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
import { Other } from '@/data/others'
import { mapActions, mapState } from 'vuex'

export default defineComponent({
  name: 'OthersPage',
  components: {
    IonButton,
    PageLayout
  },
  computed: {
    ...mapState({
      others: 'others'
    }),
    pageTitle (): string {
      return 'Другие'
    }
  },
  methods: {
    ...mapActions({
      updateOthers: 'updateOthers'
    }),
    changeStatus (other: Other) {
      const foundOther = this.others.find((item: Other) => item.id === other.id)!
      foundOther.value = !other.value

      this.updateOthers(this.others)
    },
    getStatus (other: Other): string {
      return !this.others.find((item: Other) => item.id === other.id).value ? 'primary' : 'danger'
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
