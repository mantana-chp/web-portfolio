<script setup></script>

<template>
  <div class="w-full font-poppins p-5 fixed top-0 z-50">
    <div class="flex justify-between">
      <div class="tracking-[0.3em] text-xl">MANTANA WEBFLIO</div>
      <div class="flex gap-5">
        <RouterLink :to="{ name: 'home' }">
          <button class="nav-button hover:text-red-400 active:text-red-400">
            Home
          </button></RouterLink
        >
        <button class="nav-button hover:text-purple-400 active:text-purple-400">
          About me
        </button>
        <button class="nav-button hover:text-[#3CA598] active:text-[#3CA598]">
          Skills
        </button>
        <button class="nav-button hover:text-[#DF61A5] active:text-[#DF61A5]">
          Projects
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-button {
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 5px 15px;
  border-radius: 100px;
}

.nav-button:hover {
  background-color: rgb(248, 248, 248);
  border-radius: 100px;
}

.nav-button:active {
  background-color: rgb(255, 255, 255);
  border-radius: 100px;
}
</style>
