<template>
  <div>
    <h2>Employee</h2>
    <div class="loading" v-if="loading">Loading...</div>
    <table v-else>
      <thead>
        <tr>
          <th>emp_id</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>birth_date</th>
          <th>sex</th>
          <th>salary</th>
          <th>super_id</th>
          <th>branch_id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.emp_id">
          <td>{{ employee.emp_id }}</td>
          <td>{{ employee.first_name }}</td>
          <td>{{ employee.last_name }}</td>
          <td>{{ employee.birth_date }}</td>
          <td>{{ employee.sex }}</td>
          <td>{{ employee.salary }}</td>
          <td>{{ employee.super_id }}</td>
          <td>{{ employee.branch_id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const employees = ref([])
const loading = ref(false)

const fetchData = async () => {
  try {
    loading.value = true
    const res = await fetch('/api/employee')
    employees.value = await res.json()
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
</script>

<style>
h2 {
  text-align: center;
  font-size: 30px;
}

table {
  width: 100%;
  margin: 30px 0;
  border-collapse: collapse;
  & th,
  & td {
    padding: 10px;
    border: 1px solid var(--color-text);
    text-align: center;
  }
  & th {
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>
