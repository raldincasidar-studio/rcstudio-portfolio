<template>

<div class="navbar">
    <div class="w-full flex justify-between items-center p-3 px-5 md:px-10 max-w-screen-2xl mx-auto">
        <nuxt-link to="/" class="logo hover:opacity-70 transition-opacity">
            <img src="~/assets/img/raldin-casidar-logo.png" class="h-12 md:h-16 m-1 md:m-0" alt="">
        </nuxt-link>
        <div class="nav-links">
            <a href="#!" @click="openSidenav = true" class="inline-block lg:hidden border-white border-1 p-3 rounded-full active:bg-yellow-400/10 transition-colors">
                <i class="material-icons text-yellow-400 text-2xl align-middle">menu</i>
            </a>
            <nuxt-link to="/" class="uppercase hidden lg:inline-block text-white border-3 border-white font-bold p-3 px-5 rounded-full hover:bg-yellow-400/10 transition-colors focus:ring-2 ring-white" :class="{'text-yellow-400': false}">Home</nuxt-link>
            <nuxt-link to="/about" class="uppercase hidden lg:inline-block text-white border-3 border-white font-bold p-3 px-5 rounded-full hover:bg-yellow-400/10 transition-colors focus:ring-2 ring-white  hover:text-white" :class="{'text-yellow-400': false}">About</nuxt-link>
            <nuxt-link to="/" class="uppercase hidden lg:inline-block text-white border-3 border-white font-bold p-3 px-5 rounded-full hover:bg-yellow-400/10 transition-colors focus:ring-2 ring-white  hover:text-white" :class="{'text-yellow-400': false}">Projects</nuxt-link>
            <nuxt-link to="/" class="uppercase hidden lg:inline-block text-white border-3 border-white font-bold p-3 px-5 rounded-full hover:bg-yellow-400/10 transition-colors focus:ring-2 ring-white  hover:text-white" :class="{'text-yellow-400': false}">Blogs</nuxt-link>
            <nuxt-link to="/" class="uppercase hidden lg:inline-block text-white border-3 font-bold p-3 px-5 rounded-full hover:bg-yellow-400/10 transition-colors border-2 border-yellow-400 hover:text-white ml-2">FREE QUOTE!</nuxt-link>
        </div>
    </div>
</div>

<div class="sidebar fixed z-40 bg-neutral-900 inset-0 text-center py-14 px-10 transition-all duration-1000" :class="{'active': openSidenav}">
    <nuxt-link @click="goTo('/')" class="logo hover:opacity-70 transition-opacity mb-16 inline-block">
        <img src="~/assets/img/raldin-casidar-logo.png" class="h-14 mt-12 m-1 md:m-0 mx-auto" alt="">
    </nuxt-link>
    <nuxt-link @click="goTo('/')" class="block border-yellow-400/10 border active:bg-yellow-400/10 transition-all p-3 text-lg text-yellow-400 font-bold rounded-lg my-5">
        <i class="material-icons align-middle text-2xl mr-2">home</i> HOME
    </nuxt-link>
    <nuxt-link @click="goTo('/about')" class="block border-yellow-400/10 border active:bg-yellow-400/10 transition-all p-3 text-lg text-yellow-400 font-bold rounded-lg my-5">
        <i class="material-icons align-middle text-2xl mr-2">home</i> About
    </nuxt-link>
    <nuxt-link @click="goTo('/')" class="block border-yellow-400/10 border active:bg-yellow-400/10 transition-all p-3 text-lg text-yellow-400 font-bold rounded-lg my-5">
        <i class="material-icons align-middle text-2xl mr-2">home</i> Projects
    </nuxt-link>
    <nuxt-link @click="goTo('/')" class="block border-yellow-400/10 border active:bg-yellow-400/10 transition-all p-3 text-lg text-yellow-400 font-bold rounded-lg my-5">
        <i class="material-icons align-middle text-2xl mr-2">code</i> Blogs
    </nuxt-link>
    <a href="#!" @click="openSidenav = false" class="block border-yellow-400/0 border active:bg-white/10 transition-all p-3 text-md text-white/80 font-bold rounded-lg my-5">
        <i class="material-icons align-middle text-xl mr-2">close</i> Close Menu
    </a>
</div>

</template>

<style scoped lang="scss">
.sidebar {
    background: url('~/assets/img/bg.png') no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    overflow: hidden;
    transform: translateX(100%);

    &::before {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        content: '';
        background-color: rgb(250 204 21);
        transition: all .5s ease;
        transition-delay: 0;
        z-index: 50;
    }

    &.active {
        transform: translateX(0);

        &::before {
            transition-delay: .3s;
            width: 0;
            height: 100%;
            position: fixed;
            top: 0;
            display: block;
            content: '';
            background-color: rgb(250 204 21);
        }
    }
}
</style>

<script setup>

const openSidenav = ref(false)
const router = useRouter()

function goTo(page) {

    router.push(page);

    openSidenav.value = false;

}

</script>