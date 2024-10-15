<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useCounterStore } from '../stores/counter2'

defineProps<{type:string, placeholder:string, icon:string, modelValue:string}>()
const emit = defineEmits(['update:modelValue'])
const store = useCounterStore()
// :value="modelValue" @input="emit('update:modelValue', $event.target.value)"
</script>

<template>
    <div class="input-group mb-3">
        <input :type="type" v-model="store.count"  class="form-control" :placeholder="placeholder">
        <div class="input-group-text"><span :class="icon"></span></div>
    </div>
</template>