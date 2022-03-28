<template>
  <card-list-item
      @click="openModal"
  >
    <span>Квартира: &#8470;{{ flat.id }}</span>
    <flat-modal
        :value="showModal"
        :flat="flat"
        @update:value="showModal = $event"
    />
  </card-list-item>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {Flat} from "@/data/sections";
import FlatModal from "@/components/flat/FlatModal.vue";
import CardListItem from "@/components/list/CardListItem.vue";

export default defineComponent({
  name: 'FlatListItem',
  components: {
    CardListItem,
    FlatModal
  },
  props: {
    flat: {
      type: Object as PropType<Flat>,
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
