<template>
  <div>
    <h2>Clients</h2>
    <div class="loading" v-if="loading">Loading...</div>
    <table v-else>
      <thead>
        <tr>
          <th>client_id</th>
          <th>client_name</th>
          <th>branch_id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in clients" :key="client.client_id">
          <td>{{ client.client_id }}</td>
          <td>{{ client.client_name }}</td>
          <td>{{ client.branch_id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const clients = ref([])
const loading = ref(false)

const fetchData = async () => {
  try {
    loading.value = true
    const res = await fetch('/api/client')
    clients.value = await res.json()
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
</script>
