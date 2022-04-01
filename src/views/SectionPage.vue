<template>
  <page-layout
      :page-title="pageTitle"
  >
    <card-list>
      <house-list-item
          v-for="house in houses"
          :key="house.id"
          :house="house"
      />
    </card-list>
  </page-layout>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { getSection, getSectionHouses, House, Section } from '@/data/sections';
import { defineComponent } from 'vue';
import { HOME_PAGE_URL } from "@/utils/routes";
import HouseListItem from "@/components/house/HouseListItem.vue";
import PageLayout from "@/components/page/PageLayout.vue";
import CardList from "@/components/list/CardList.vue";

type SetupData = {
  section: Section
  houses: House[]
}

export default defineComponent({
  name: 'SectionPage',
  components: {
    CardList,
    PageLayout,
    HouseListItem
  },
  setup (): SetupData | never {
    const route = useRoute();
    const section = getSection(parseInt(route.params.section as string));

    if (!section) {
      const router = useRouter();
      router.push(HOME_PAGE_URL);
    }

    return {
      section,
      houses: getSectionHouses(section!.id)
    } as SetupData
  },
  computed: {
    pageTitle (): string {
      return `Секция: ${this.section.name}`
    }
  },
});
</script>
