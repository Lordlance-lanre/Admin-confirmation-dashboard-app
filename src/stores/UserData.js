import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserData = defineStore('Users', {
 state: () => {
  return{
     users: [
  {
    id: 1,
    name: "Justin Septimus",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$200"
  },
  {
    id: 2,
    name: "Anika Rhiel Madsen",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Overdue",
    paymentDate: "15/APR/2020",
    amount: "$300"
  },
  {
    id: 3,
    name: "Miracle Vaccaro",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$250"
  },
  {
    id: 4,
    name: "Erin Levin",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Unpaid",
    paymentDate: "15/APR/2020",
    amount: "$200"
  },
  {
    id: 5,
    name: "Mira Herwitz",
    email: "example@email.com",
    userStatus: "Inactive",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$200"
  },
  {
    id: 6,
    name: "Jaxson Siphron",
    email: "example@email.com",
    userStatus: "Inactive",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$750"
  },
  {
    id: 7,
    name: "Mira Levin",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Unpaid",
    paymentDate: "15/APR/2020",
    amount: "$200"
  },
  {
    id: 8,
    name: "Lincoln Levin",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$370"
  },
  {
    id: 9,
    name: "Phillip Saris",
    email: "example@email.com",
    userStatus: "Inactive",
    loginDate: "14/APR/2020",
    paymentStatus: "Unpaid",
    paymentDate: "15/APR/2020",
    amount: "$200"
  },
  {
    id: 10,
    name: "Cheyenne Ekstrom Bothman",
    email: "example@email.com",
    userStatus: "Inactive",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$150"
  },
  {
    id: 11,
    name: "Micheal Andrews",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$400"
  },
  {
    id: 12,
    name: "Sandra Kiernan Madsen",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Overdue",
    paymentDate: "15/APR/2020",
    amount: "$600"
  },
  {
    id: 13,
    name: "Luigi Viccario",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$250"
  },
  {
    id: 14,
    name: "Devin Collin",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Unpaid",
    paymentDate: "15/APR/2020",
    amount: "$420"
  },
  {
    id: 15,
    name: "Samara Herwitz",
    email: "example@email.com",
    userStatus: "Inactive",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$600"
  },
  {
    id: 16,
    name: "Jax Almiron",
    email: "example@email.com",
    userStatus: "Inactive",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$750"
  },
  {
    id: 17,
    name: "Andrea Matters",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Unpaid",
    paymentDate: "15/APR/2020",
    amount: "$100"
  },
  {
    id: 18,
    name: "Lexter Lauder",
    email: "example@email.com",
    userStatus: "Active",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$370"
  },
  {
    id: 19,
    name: "Phillipa Baris",
    email: "example@email.com",
    userStatus: "Inactive",
    loginDate: "14/APR/2020",
    paymentStatus: "Unpaid",
    paymentDate: "15/APR/2020",
    amount: "$200"
  },
  {
    id: 20,
    name: "Catherine Lang",
    email: "example@email.com",
    userStatus: "Inactive",
    loginDate: "14/APR/2020",
    paymentStatus: "Paid",
    paymentDate: "15/APR/2020",
    amount: "$150"
  }
  ]
  }
},
actions: {
    updatePaymentStatus(user, newStatus) {
      const userIndex = this.users.findIndex(u => u.id === user.id);
      if (userIndex !== -1) {
        this.users[userIndex].paymentStatus = newStatus;
      }
    },
  },
 getters: {
  getPaymentStatusColor: (state) => (paymentStatus) => {
      if (paymentStatus === 'Paid') {
        return 'green'; 
      } else if (paymentStatus === 'Overdue') {
        return 'red'; 
      } else {
        return 'yellow'; 
      }
    },
    getPaymentStatusBackgroundColor: (state) => (paymentStatus) => {
      if (paymentStatus === 'Paid') {
        return 'lightgreen'; 
      } else if (paymentStatus === 'Overdue') {
        return 'salmon'; 
      } else {
        return 'lightyellow'; 
      }
    },
    getUserStatusColor: (state) => (userStatus) => {
      if (userStatus === 'Active') {
        return 'blue'; 
      } else if (userStatus === 'Inactive') {
        return 'grey'; 
      }
    },
     unpaidAndOverdueAmount: state => {
      
      const unpaidAndOverdueUsers = state.users.filter(user =>
        user.paymentStatus === 'Unpaid' || user.paymentStatus === 'Overdue'
      )
      const totalAmount = unpaidAndOverdueUsers.reduce((total, user) => { 
        const amount = Number(user.amount.slice(1).replace(',', ''))
        return total + amount
      }, 0)
      return `$${totalAmount.toFixed(2)}`
    },
     paidUserAmounts: (state) => {
      const paidUsers = state.users.filter(user => user.paymentStatus === 'Paid');
      return paidUsers; 
    },
     unpaidUserAmounts: (state) => {
      const unpaidUsers = state.users.filter(user => user.paymentStatus === 'Unpaid');
      return unpaidUsers;
    },
    overdueUserAmounts: (state) => {
      const overdueUsers = state.users.filter(user => user.paymentStatus === 'Overdue');
      return overdueUsers;
    }
  }
})

