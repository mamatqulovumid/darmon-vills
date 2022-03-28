<template>
  <page-layout
      :page-title="pageTitle"
  >
    <card-list>
      <flat-list-item
          class="house--bag"
          v-for="flat in flats"
          :key="flat.id"
          :flat="flat"
      />
    </card-list>
  </page-layout>
</template>

<script lang="ts">
import {useRoute, useRouter} from 'vue-router'
import {Flat, getHouse, getHouseFlats, House} from '@/data/sections';
import {defineComponent} from 'vue';
import {HOME_PAGE_URL} from "@/utils/routes";
import PageLayout from "@/components/page/PageLayout.vue";
import FlatListItem from "@/components/flat/FlatListItem.vue";
import CardList from "@/components/list/CardList.vue";

type SetupData = {
  house: House
  flats: Flat[]
}

export default defineComponent({
  name: 'HousePage',
  components: {
    CardList,
    FlatListItem,
    PageLayout
  },
  setup(): SetupData {
    const route = useRoute();
    const house = getHouse(
        parseInt(route.params.house as string)
    );

    if (!house) {
      const router = useRouter();
      router.push(HOME_PAGE_URL)
    }

    return {
      house,
      flats: getHouseFlats(house!.id)
    } as SetupData
  },
  computed: {
    pageTitle(): string {
      return `Дом: ${this.house.id}`
    }
  }
});
</script>
