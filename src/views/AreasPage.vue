<template>
  <page-layout
      :page-title="pageTitle"
  >
    <card-list>
      <card-list-item
          v-for="area in areas"
          :key="area.id"
          class="area-item"
          @click="switchAreaLights(area)"
      >
        <span :class="{'active': activeArea === area.id}">
          {{ area.name }}м<sup>2</sup>
        </span>
      </card-list-item>
    </card-list>
  </page-layout>
</template>

<script lang="ts">
import {
  getAreas,
  getAreaHouses,
  Area, House
} from '@/data/sections';
import { defineComponent } from 'vue';
import PageLayout from "@/components/page/PageLayout.vue";
import CardList from "@/components/list/CardList.vue";
import CardListItem from '@/components/list/CardListItem.vue'
import { getEmptyLights, Lights, updateLights } from '@/data/lights'

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
  data () {
    return {
      activeArea: null
    } as {
      activeArea: null | number
    }
  },
  computed: {
    pageTitle (): string {
      return 'Площади'
    }
  },
  methods: {
    switchAreaLights (area: Area) {
      this.activeArea = area.id

      const houses = getAreaHouses(area.id)
      const lights: Lights = getEmptyLights()

      houses.forEach((house: House) => {
        lights[house.row].push(house.col)
      })

      updateLights(lights)
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

.area-item span.active {
  text-decoration: underline;
}
</style>
