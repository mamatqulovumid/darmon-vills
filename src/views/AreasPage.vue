<template>
  <page-layout
      :page-title="pageTitle"
  >
    <card-list>
      <card-list-item
          v-for="area in areas"
          :key="area.id"
          :link="getLink(area.id)"
          class="area-item"
      >
        <span>
          {{ area.name }}м<sup>2</sup>
        </span>
      </card-list-item>
    </card-list>
  </page-layout>
</template>

<script lang="ts">
import {
  getAreas,
  Area
} from '@/data/sections';
import { defineComponent } from 'vue';
import PageLayout from "@/components/page/PageLayout.vue";
import CardList from "@/components/list/CardList.vue";
import CardListItem from '@/components/list/CardListItem.vue'

type SetupData = {
  areas: Area[]
}

export default defineComponent({
  name: 'AreasPage',
  components: {
    CardListItem,
    CardList,
    PageLayout
  },
  setup (): SetupData | never {
    return {
      areas: getAreas()
    } as SetupData
  },
  computed: {
    pageTitle (): string {
      return 'Площади'
    }
  },
  methods: {
    getLink (area: number) {
      return `/areas/${area}`
    }
  }
});
</script>

<style scoped>
.area-item {
  position: relative;

  margin-bottom: 30px;
}

.area-item span {
  position: absolute;

  font-size: 20px;
  bottom: -36px;
}
</style>
