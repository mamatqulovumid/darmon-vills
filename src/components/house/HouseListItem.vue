<template>
  <card-list-item
      :active="lightStatus"
      @click="updateLightStatus"
  >
    <span>
      {{ label }}
    </span>
    <b v-if="section">
      Секция: {{ section.name }}
    </b>
  </card-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { House, getSection, getSectionHouses } from "@/data/sections";
import CardListItem from "@/components/list/CardListItem.vue";
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'HouseListItem',
  components: {
    CardListItem
  },
  props: {
    house: {
      type: Object as PropType<House>,
      required: true
    },
    showSection: {
      type: Boolean,
      required: false,
      default: false
    },
    showByOrder: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      houseInfo: null,
      slideOpts: {
        initialSlide: 1,
        speed: 400
      }
    }
  },
  computed: {
    ...mapGetters({
      houseState: 'houseState'
    }),
    lightStatus () {
      return this.houseState(this.house)
    },
    label () {
      if (this.showByOrder) {
        return this.house.id - this.getLastHousesCount()
      }
      return this.house.id
    },
    section () {
      if (this.showSection) {
        return getSection(this.house.section_id)
      }
      return null
    }
  },
  methods: {
    ...mapActions({
      turnOnLight: 'turnOnLight',
      turnOffLight: 'turnOffLight'
    }),
    getLastHousesCount () {
      let result = 0
      let iter = this.house.section_id

      while (iter-- > 0) {
        result += getSectionHouses(iter).length
      }

      return result
    },
    async updateLightStatus () {
      const status = !this.lightStatus
      try {
        if (status) {
          this.turnOnLight(this.house)
        } else {
          this.turnOffLight(this.house)
        }
        // eslint-disable-next-line no-empty
      } catch (e) {
      }
    }
  }
});
</script>
