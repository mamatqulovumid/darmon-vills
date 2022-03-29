<template>
  <card-list-item
      @click="openModal"
  >
    <span> {{ house.id }}</span>
    <house-modal
        :value="showModal"
        :house="house"
        @update:value="showModal = $event"
    />
  </card-list-item>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {House} from "@/data/sections";
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
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true
    }
  }
});
</script>
