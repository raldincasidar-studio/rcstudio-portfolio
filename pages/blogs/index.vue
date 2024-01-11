<template>
    <!-- <Navbar></Navbar> -->
    
    <div class="hero-page text-center py-20 px-5 md:px-10 max-w-screen-xl mx-auto">
        <h2 class="text-white text-2xl md:text-3xl my-10 font-bold">DevBlogs</h2>
        <!-- <h1 class="text-yellow-400 drop-shadow-xl shadow-yellow-400/50 text-7xl my-10 font-bold">Design Websites</h1> -->
        <h1 class="text-yellow-400 drop-shadow-xl leading-relaxed shadow-yellow-400/50 text-3xl md:text-5xl my-10 font-bold">Developer's Post</h1>
    </div>
    
    <div class="more-projects min-h-full py-20 px-3 md:px-10 text-center max-w-screen-xl mx-auto">
        <div class="my-2 flex flex-wrap flex-row">

            <div class="w-full md:w-1/2 p-10" v-for="i in 5" :key="i">
                <blog-card></blog-card>
            </div>

        </div>

    </div>

    
    <call-to-action></call-to-action>
    
    
    
    
    <!-- <Footer></Footer> -->
    
    
    </template>
    
    <style>
    .is-typed span.cursor {
      display: inline-block;
      width: 3px;
      background-color: #FFD118;
      animation: blink 1s infinite;
    }
    
    .is-typed span.underscore {
      display: inline-flex;
      width: 17px;
      height: 7px;
      align-items:flex-end;
      background-color: #FFD118;
      animation: blink 1s infinite;
    }

    .leaflet-popup-content-wrapper {
        background-color: #1C1C1C;
    }
    
    @keyframes blink {
      49% {
        background-color: #FFD118;
      }
      50% {
        background-color: transparent;
      }
      99% {
        background-color: transparent;
      }
    }
    
    iframe::-webkit-scrollbar {
        display: none;
    }
    
    </style>
    
    <script setup>
    import VueWriter from "vue-writer";
    
    useHead({
      title: 'Raldin Casidar Studios | Expert Software Engineers Crafting Innovative Solutions',
      meta: [
        { name: 'description', content: 'At Raldin Casidar Studios, we are a dynamic team of software engineers dedicated to building cutting-edge software, websites, and mobile apps. Partner with us to elevate your business with tailor-made technological solutions. Visit us at raldincasidar.studio for transformative tech expertise.' }
      ],
      bodyAttrs: {
        class: 'test'
      },
      script: [
            { src: 'https://assets.calendly.com/assets/external/widget.js'}
        ]
    })
    
    const zoom = ref(20)

    const showCarouselItem = ref(2.5)
    
    function listenAndAdjust(e) {
        const width = window.innerWidth
        if (width < 767) {
            showCarouselItem.value = 1.1
        }
        else {
            showCarouselItem.value = 2.5
        }
    }
    
    onMounted(() => {
        listenAndAdjust()
        window.addEventListener('resize', listenAndAdjust, true);

        
    })
    
    onUnmounted(() => {
        window.removeEventListener('resize', listenAndAdjust, true);
    })
    </script>