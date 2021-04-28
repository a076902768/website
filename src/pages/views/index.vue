<template>
  <dev class="123">
    <p>{{reader.email}}</p>
    <p>{{obj.title}}</p>
    <button @click="user">user</button>
    <!-- <div>{{user}}</div> -->
  </dev>
</template>
<script>
import { ref, reactive,onMounted } from 'vue'
import { useRouter, useRoute } from "vue-router";
import frontendApi from '/@/assets/js/api/frontendApi'

export default ({
  name: 'view',
  setup() {
    const router = useRouter();
    const route = useRoute();

    const reader = ref(null)
    const obj = reactive({title: 'vue3 test'})
    async function getUser() {
      const res = await frontendApi.getUserInfo();
      console.log(res.results);
      reader.value = res.results[0]
    }
    getUser();

    const user = () => {
      router.push('@/pages/user')
    }
    
    // onMounted(() => {
    //   getUser();
    // });

    return {
      reader,
      obj,
      user
    }
  },
})
</script>
