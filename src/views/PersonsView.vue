<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
import { computed } from 'vue'

interface RawUser {
  id: number
  name: string
  username: string
  email: string
}

const maxPersons = defineModel({ default: 20 })
const url = computed(() => `https://www.freetestapi.com/api/v1/users?limit=${maxPersons.value}`)

const { data: users, errorMessage, isLoading } = useFetch<RawUser[]>(url)
</script>

<template>
  <main>
    <div v-if="isLoading">Loading...</div>
    <div v-if="errorMessage">Oops! Error encountered: {{ errorMessage }}</div>
    <div v-else-if="users?.length">
      <h1>Persons</h1>
      <input v-model="maxPersons" type="number" min="1" max="100" />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid white;
    text-align: left;
    padding: 10px;
  }

  th {
    font-weight: bold;
    background: #666;
  }

  tr:nth-child(even) {
    background-color: #333;
  }
}
</style>
