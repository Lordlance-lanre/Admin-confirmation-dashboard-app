<template>
<div class="pt-7">
	<div class="flex flex-col">
  <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div class="py-2 inline-block min-w-full pr-5">
      <div class="overflow-hidden rounded-lg">
        <div class="bg-white flex justify-between py-2">
            <div class="flex">
               <button class="flex border-solid border border-gray-300 px-3 py-2 mx-6 rounded">
                <img src="../assets/filter.svg" class="w-5 ">
                <p class="text-sm ml-2">Filter</p>
               </button>

                <div class="flex ml-8">
                    <img src="../assets/searches.svg" alt="" class="w-5 absolute mt-2 ml-2">
                    <input v-model="searchPayElems" @input="filteredPayList" type="text" placeholder="Search Users by Name, Email or Date" class="text-sm w-[340px] px-8 py-1 bg-gray-100 outline-blue-200 font-semibold">
                </div>
            </div>

                <button class=" bg-purple-400 px-2 py-1 text-white text-sm rounded mr-7 font-semibold">
                PAY DUES
                </button>
          </div>


        <table class="min-w-full ">
          <thead class="bg-slate-300 border-b">
            <tr class="bg-gray-100">
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <input type="checkbox" name="">
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               NAME
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                USER STATUS
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                PAYMENT STATUS
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                AMOUNT
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <button>
                  <img src="../assets/Button.png" alt="">
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b" v-for="user in filteredPayUsers" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <input type="checkbox" name="">

                <button class="border border-gray-300 rounded-full px-1 py-1 ml-5">
                  <img src="../assets/arrow.svg" class="w-3 " alt="">
                </button>
              </td>

              <td class="text-sm flex flex-col text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="font-semibold">{{user.name}}</span>
                <span>{{user.email}}</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="font-semibold bg-gray-200 px-4 rounded-lg">
                  <img src="../assets/dot.svg" class="w-5 absolute mr-20" alt="">
                  {{user.userStatus}}</span>
                <span class="flex flex-col">Last login: {{user.loginDate}}</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span :style="{ color: getPaymentStatusColor(user.paymentStatus), backgroundColor: getPaymentStatusBackgroundColor(user.paymentStatus) }" class="font-semibold px-4 rounded-lg">
                  <img src="../assets/dot.svg" class="w-5 absolute mr-16" alt="">
                  {{user.paymentStatus}}
              </span>
                <span class="flex flex-col">Paid on  {{user.paymentDate}}</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {{user.amount}}
              </td>
              <td class="text-[12px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                View More
              </td>
              <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                <button>
                  <img src="../assets/Button.png" alt="">
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div  class="bg-slate-300 border-b flex justify-end py-3 text-sm">
          <p class="">Rows per page: 2</p>
          <img src="../assets/dropdown.svg" alt="" class="w-5">
          <p class="px-3">1-10 of 276</p>

          <div class="mr-10 gap-5">
            <button class="">
              <img src="../assets/arrow-left.svg" alt="" class="w-4">
            </button> 

            <button class=" ml-10">
              <img src="../assets/arrow-next.svg" alt="" class="w-4">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script setup>
import { ref, computed, onMounted} from 'vue';
import {storeToRefs} from 'pinia';
import {useUserData} from '../stores/UserData.js';

const searchPayElems = ref("");

const payStore = useUserData();
const {paidUserAmounts,getPaymentStatusColor, getPaymentStatusBackgroundColor}  = storeToRefs(payStore);

onMounted(() =>{
console.log("userAmounts>>", paidUserAmounts.value);
})

const filteredPayUsers = computed(() => {
  return paidUserAmounts.value.filter(item =>
    item.name.toLowerCase().includes(searchPayElems.value.toLowerCase()) || item.email.toLowerCase().includes(searchPayElems.value.toLowerCase())
   );
});

const filteredPayList = () => {
   console.log("searched field");  
 };
</script>