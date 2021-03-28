<template>
  <dev class="123">
    <p>{{reader}}</p>
    <p>{{obj.title}}</p>
  </dev>
</template>
<script>
import { ref, reactive } from 'vue'

export default ({
  name: 'view',
  setup() {
    const reader = ref(1)
    const obj = reactive({title: 'vue3 test'})

    return {
      reader,
      obj
    }
  },
})
</script>
