<template>
  <card-list-item
      @click="openModal"
  >
    <span> {{ label }} </span>
    <house-modal
        v-if="showModal"
        :value="showModal"
        :house="house"
        @update:value="showModal = $event"
    />
  </card-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { House, getSectionHouses } from "@/data/sections";
import HouseModal from "@/components/house/HouseModal.vue";
import CardListItem from "@/components/list/CardListItem.vue";

export default defineComponent({
  name: 'HouseListItem',
  components: {
    CardListItem,
    HouseModal
  },
  props: {
    house: {
      type: Object as PropType<House>,
      required: true
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  computed: {
    label () {
      return this.house.id - this.getLastHousesCount()
    }
  },
  methods: {
    openModal () {
      this.showModal = true
    },
    getLastHousesCount () {
      let result = 0
      let iter = this.house.section_id

      while (iter-- > 0) {
        result += getSectionHouses(iter).length
      }

      return result
    }
  }
});
</script>
