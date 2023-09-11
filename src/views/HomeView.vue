<script setup>
import { ref, computed, onMounted} from 'vue';
import {storeToRefs} from 'pinia';
import {useUserData} from '../stores/UserData.js';

const userStore = useUserData();

const totalObj = ref("");

const { unpaidAndOverdueAmount }  = storeToRefs(userStore);

onMounted(() =>{
  totalObj.value = unpaidAndOverdueAmount.value;
  console.log("Obj>>>", totalObj.value);
})


</script>

<template>
  <main class="hidden md:block bg-zinc-200 w-full h-full pl-7 pt-7">
    <h2 class="font-bold text-sm tracking-wider">TABLE HEADING</h2>
    <div class="border-b border-slate-300 flex justify-between mt-5 text-sm">
      <div>
        <router-link to="/all" class="mr-4 hover:border-slate-700 hover:border-b-2">All</router-link>
        <router-link to="/paid" class="mx-5 hover:border-slate-700 hover:border-b-2">Paid</router-link>
        <router-link to="/unpaid" class="mx-5 hover:border-slate-700 hover:border-b-2">Unpaid</router-link>
        <router-link to="/overdue" class="mx-5 hover:border-slate-700 hover:border-b-2">Overdue</router-link>
      </div>

      <div class="mr-5">
        <p class="text-sm">Total payable amount: <span class="text-purple-400 font-bold">{{totalObj}} USD</span></p>
      </div>
    </div>
    <RouterView></RouterView>
  </main>
</template>
