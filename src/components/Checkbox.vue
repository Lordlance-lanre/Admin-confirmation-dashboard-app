<template>
<div>
	<input class="absolute mt-1" v-model="isSelected" @click="toggleSelection" type="checkbox" name="">
</div>
</template>

<script setup>
import { ref } from 'vue';

// const isChecked = ref(false);

const { user } = defineProps(['user']);
const emit  = defineEmits(['select']);

const isSelected = ref(user.selected);

const toggleSelection = () => {
  isSelected.value = !isSelected.value;
  emit('select', user.id);
};
</script>