<template>
  <a-card title="测试自定义 Hooks">
    <a-button :type="value ? 'primary' : 'danger'" @click="toggle">
      {{ value }}
    </a-button>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useBoolean } from '../hooks';

export default defineComponent({
  name: 'CustomHooks',
  setup() {
    const { value, toggle } = useBoolean();

    return {
      value,
      toggle,
    };
  },
});
</script>