<script lang="ts" setup>
import { ref } from 'vue';
import Navbar from '../components/layout/Navbar.vue';
import Sidebar from '../components/layout/Sidebar.vue';
import Footer from '../components/layout/Footer.vue';
import CSS from '../components/layout/list.css';

// Data for CRUD (mocked)
const items = ref([
    { id: 1, user: 'John Doe', date: '2024-10-06', status: 'Active' },
    { id: 2, user: 'Jane Doe', date: '2024-10-05', status: 'Inactive' },
]);

// Variables for managing new or edited item
const newItem = ref({ id: null, user: '', date: '', status: '' });
const isEditing = ref(false);  // Track if in edit mode

const addItem = () => {
    if (isEditing.value) {
        // Update existing item
        const index = items.value.findIndex(item => item.id === newItem.value.id);
        if (index !== -1) {
            items.value[index] = { ...newItem.value }; // Update item
        }
        isEditing.value = false;  // Exit edit mode
    } else {
        // Add new item
        const newId = items.value.length ? items.value[items.value.length - 1].id + 1 : 1;
        items.value.push({ id: newId, ...newItem.value });
    }

    // Reset form fields
    newItem.value = { id: null, user: '', date: '', status: '' };
};

const deleteItem = (id: number) => {
    items.value = items.value.filter(item => item.id !== id);
};

const editItem = (item: any) => {
    newItem.value = { ...item };  // Populate form with item data
    isEditing.value = true;  // Enter edit mode
};
</script>

<template>
    <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">
        <div class="app-wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <main class="app-main">
                <div class="app-content-header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <h3 class="mb-0">List</h3>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-end">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="app-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-7 connectedSortable">
                                <div class="card mb-4">
                                    <div class="card-header flex items-center">
                                        <!-- Add/Edit item form -->
                                        <div>
                                            <input v-model="newItem.user" placeholder="User" />
                                            <input v-model="newItem.date" placeholder="Date" type="date" />
                                            <!-- Status dropdown -->
                                            <select v-model="newItem.status">
                                                <option value="">Select Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                            <button @click="addItem" class="add-item-btn">
                                                {{ isEditing ? 'Update Item' : 'Add Item' }}
                                            </button>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-head-fixed text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>User</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in items" :key="item.id">
                                                        <td>{{ item.id }}</td>
                                                        <td>{{ item.user }}</td>
                                                        <td>{{ item.date }}</td>
                                                        <td>{{ item.status }}</td>
                                                        <td>
                                                            <button @click="editItem(item)">Edit</button>
                                                            <button @click="deleteItem(item.id)">Delete</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    </body>
</template>
