<template>
    <div class="container py-5">
        <h1>404</h1>
        <p>halaman <code>{{  $route.params.notFound }}</code> yang anda tuju tidak ditemukan</p>
        <router-link :to="{ name: 'tasks' }">kembali ke halaman awal</router-link>
    </div>
    </template>