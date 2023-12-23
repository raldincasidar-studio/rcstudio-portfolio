<template>

<div class="navbar">
    <div class="w-full flex justify-between items-center p-3 px-5 md:px-10 max-w-screen-2xl mx-auto">
        
        <nuxt-link to="/" class="logo hover:opacity-70 transition-opacity">
            <img src="~/assets/img/raldin-casidar-logo.png" class="h-12 md:h-16 m-1 md:m-0" alt="">
        </nuxt-link>
        <div class="nav-links">
            <a href="#!" class="inline-block lg:hidden border-white border-1 p-3 rounded-full active:bg-yellow-400/10 transition-colors">
                <i class="material-icons text-yellow-400 text-2xl align-middle">menu</i>
            </a>
            <nuxt-link to="/" class="uppercase hidden lg:inline-block text-white border-3 border-white font-bold p-3 px-5 rounded-full hover:bg-yellow-400/10 transition-colors focus:ring-2 ring-white" :class="{'text-yellow-400': false}">Home</nuxt-link>
            <nuxt-link to="/about" class="uppercase hidden lg:inline-block text-white border-3 border-white font-bold p-3 px-5 rounded-full hover:bg-yellow-400/10 transition-colors focus:ring-2 ring-white  hover:text-white" :class="{'text-yellow-400': false}">About</nuxt-link>
            <nuxt-link to="/" class="uppercase hidden lg:inline-block text-white border-3 border-white font-bold p-3 px-5 rounded-full hover:bg-yellow-400/10 transition-colors focus:ring-2 ring-white  hover:text-white" :class="{'text-yellow-400': false}">Projects</nuxt-link>
            <nuxt-link to="/" class="uppercase hidden lg:inline-block text-white border-3 border-white font-bold p-3 px-5 rounded-full hover:bg-yellow-400/10 transition-colors focus:ring-2 ring-white  hover:text-white" :class="{'text-yellow-400': false}">Blogs</nuxt-link>
            <nuxt-link to="/" class="uppercase hidden lg:inline-block text-white border-3 border-white font-bold p-3 px-5 rounded-full hover:bg-yellow-400/10 transition-colors border-2 border-yellow-400 hover:text-white ml-2">FREE QUOTE!</nuxt-link>
        </div>
    </div>
</div>

</template>