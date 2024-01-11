<template>
    <div class="call-to-action my-20 py-10">
        <div class="box border-t-2 border-b-2 border-yellow-400 bg-[#222222]">
            <div class="flex mx-auto max-w-screen-xl items-center">
                <div class="p-8 py-[40px] w-full md:w-2/4 text-center md:text-left">
                    <i class="material-icons text-[50px] md:text-[70px] text-yellow-400">schedule</i>
                    <h2 class="text-xl md:text-2xl font-bold text-white">Let's Schedule your</h2>
                    <h2 class="text-2xl md:text-4xl font-bold text-yellow-400 my-7">FREE CONSULTATION</h2>
                    <p class="text-lg text-gray-300 leading-loose">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was.</p>
                    <a href="#!" class="inline-block bg-yellow-400 m-4 p-3 px-6 text-nowrap overflow-hidden truncate max-w-full rounded-full font-bold mt-12 text-lg shadow-lg shadow-yellow-400/30 active:scale-105 active:shadow-xl transition-all">FREE CONSULTATION <i class="material-icons align-middle text-xl ml-2">arrow_forward</i></a>
                </div>
                <div class="hidden md:block p-8 w-2/4">
                    <div class="calendly-inline-widget shadow-yellow-400/20 shadow-lg rounded-xl h-[700px] -my-16 max-w-md mx-auto overflow-hidden" data-url="https://calendly.com/raldincasidar/free-consultation"></div>
                <!-- <div class="">
                </div> -->
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

onMounted( () => {
    window.recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    document.head.appendChild(recaptchaScript)
} )

onBeforeUnmount( () => {
    window.recaptchaScript.remove();
})
</script>