
<template>
  <div>
    <a-button @click="run" type="primary" size="small">请求</a-button>
    <a-button @click="reset" size="small">Reset</a-button>
    <a-spin :spinning="loading">
      <pre>{{ JSON.stringify(value) }}</pre>
    </a-spin>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery } from '../hooks';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const [run, value, loading, { reset }] = useQuery('/api/queryUserInfo');
    return { value, run, loading, reset };
  },
});
</script>