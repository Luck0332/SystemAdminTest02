<script setup lang="ts">
import {ref} from 'vue'
// import hw from '../components/HelloWorld.vue'
import input_group from '../components/InputGroup.vue'
import { useCounterStore } from '../stores/counter2'


let my_title = ref("123")
const store = useCounterStore()
</script>
<template>
    <div class="login-page bg-body-secondary">
    <div class="login-box">
        <div class="login-logo"> <a href="javascript::void()"><b>Admin</b>LTE</a> </div> <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <h1>count: {{store.count}}</h1>
                <form action="javascript::void()" method="post">
                    
                    <input_group type="email" v-model="my_title"
                    placeholder="Email" icon="bi bi-envelope" />
                    <!-- <input_group type="password" placeholder="Password" icon="bi bi-lock-fill" /> -->

                    <div class="input-group mb-3">
                        <input type="email" v-model="my_title" class="form-control" placeholder="Email" >
                        <div class="input-group-text"><span class="bi bi-envelope"></span></div>
                    </div>

                    <div class="input-group mb-3"> <input type="password" class="form-control" placeholder="Password">
                        <div class="input-group-text"> <span class="bi bi-lock-fill"></span> </div>
                    </div>

                    <div class="row">
                        <div class="col-8">
                            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> <label class="form-check-label" for="flexCheckDefault">
                                    Remember Me
                                </label> </div>
                        </div> <!-- /.col -->
                        <div class="col-4">
                            <div class="d-grid gap-2"> <button type="button" class="btn btn-primary">Sign In</button> </div>
                        </div> <!-- /.col -->
                    </div> <!--end::Row-->
                </form>
              </div>
        </div>
    </div>
  </div> 
</template>