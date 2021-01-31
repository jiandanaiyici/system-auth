
<template>
  <div>Axios测试</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { request } from '../utils';

console.log(request.get('/api/login'), 'request');
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>