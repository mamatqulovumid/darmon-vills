<template>
  <page-layout
      :page-title="pageTitle"
  >
    <card-list>
      <house-list-item
          v-for="house in houses"
          :key="house.id"
          :house="house"
          show-section
      />
      <card-list-item
          :active="isAllActive"
          @click="switchAreaLights"
      >
        Все
      </card-list-item>
    </card-list>
  </page-layout>
</template>

<script lang="ts">
import {
  getAreaHouses,
  getArea,
  Area,
  House
} from '@/data/sections';
import { defineComponent } from 'vue';
import PageLayout from "@/components/page/PageLayout.vue";
import CardList from "@/components/list/CardList.vue";
import CardListItem from '@/components/list/CardListItem.vue'
import { getEmptyLights, Lights } from '@/data/lights'
import HouseListItem from '@/components/house/HouseListItem.vue'
import { useRoute, useRouter } from 'vue-router'
import { HOME_PAGE_URL } from '@/utils/routes'
import { mapActions } from 'vuex'

type SetupData = {
  area: Area
  houses: House[]
}

export default defineComponent({
  name: 'AreasHousePage',
  components: {
    HouseListItem,
    CardListItem,
    CardList,
    PageLayout
  },
  setup (): SetupData | never {
    const route = useRoute();
    const area = getArea(parseInt(route.params.area as string))

    if (!area) {
      const router = useRouter();
      router.push(HOME_PAGE_URL);
    }

    return {
      area,
      houses: getAreaHouses(area!.id)
    } as SetupData
  },
  data () {
    return {
      isAllActive: false
    } as {
      isAllActive: boolean
    }
  },
  computed: {
    pageTitle (): string {
      return `Площадь: ${this.area.name}`
    }
  },
  methods: {
    ...mapActions({
      updateLights: 'updateLights'
    }),
    switchAreaLights () {
      const lights: Lights = getEmptyLights()
      this.isAllActive = !this.isAllActive

      if (this.isAllActive) {
        this.houses.forEach((house: House) => {
          lights[house.row].push(house.col)
        })
      }

      this.updateLights(lights)
    }
  }
});
</script>
