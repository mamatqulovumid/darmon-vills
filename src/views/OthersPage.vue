<template>
  <page-layout
      :page-title="pageTitle"
  >
    <card-list>
      <card-list-item
          v-for="other in others"
          :key="other.id"
          @click="changeStatus(other)"
      >
        {{ other.label }}
      </card-list-item>
    </card-list>
  </page-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageLayout from "@/components/page/PageLayout.vue";
import CardList from "@/components/list/CardList.vue";
import CardListItem from '@/components/list/CardListItem.vue'
import { getOthers, Other } from '@/data/others'
import { updateOthers } from '@/data/others'

export default defineComponent({
  name: 'OthersPage',
  components: {
    CardListItem,
    CardList,
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
