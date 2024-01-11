<template>
    <!-- <Navbar></Navbar> -->
    
    <div class="hero-page text-center py-20 pb-5 px-5 md:px-10 max-w-screen-xl mx-auto">
        <h2 class="text-white text-2xl md:text-3xl my-10 font-bold">Web Design & Development</h2>
        <!-- <h1 class="text-yellow-400 drop-shadow-xl shadow-yellow-400/50 text-7xl my-10 font-bold">Design Websites</h1> -->
        <h1 class="text-yellow-400 drop-shadow-xl leading-relaxed shadow-yellow-400/50 text-3xl md:text-5xl my-10 font-bold">SchoolShare</h1>
        <h6 class="text-gray-400 my-4 text-center">
            <span class="p-1 px-3 text-neutral-900 m-2 bg-yellow-400 rounded-full text-md">VueJS</span>
            <span class="p-1 px-3 text-neutral-900 m-2 bg-pink-400 rounded-full text-md">Firebase</span>
            <span class="p-1 px-3 text-neutral-900 m-2 bg-orange-400 rounded-full text-md">HTML</span>
        </h6>
        <ClientOnly>
            <carousel :items-to-show="1" snap-align="start" :wrap-around="true" class="my-10">
                <slide v-for="slide in 12" :key="slide" class="p-3">
                    <img src="https://picsum.photos/720/1080" class="rounded-lg shadow-lg" alt="">
                </slide>

                <template #addons>
                    <!-- <navigation /> -->
                    <pagination />
                </template>
            </carousel>
        </ClientOnly>
        <a class="rounded-full inline-block white-text p-4 px-6 bg-yellow-400 mt-20 shadow-md shadow-yellow-400/50 font-bold uppercase hover:scale-110 transition-all hover:shadow-lg active:scale-95 active:shadow-sm" href="#!">VISIT PROJECT!</a>
    </div>
    
    <div class="more-projects min-h-full py-20 pt-5 px-5 md:px-10 text-center max-w-screen-xl mx-auto">
        <div class="my-2 flex flex-wrap flex-row blog-content">

            <h1 class="">Network Matching</h1>
            <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore dolores distinctio excepturi rerum quia ullam temporibus provident harum? Quos ullam voluptas aperiam nihil sequi sit incidunt provident quaerat voluptates officia recusandae dignissimos iure praesentium in, minima optio nesciunt placeat laboriosam labore quidem quis reprehenderit voluptate modi! Blanditiis, nam cumque.</p>
            <h1 class="">Network Matching</h1>
            <p class="">Lorem, <b>ipsum</b> <a href="#!" class="" _blank>dolor</a> sit amet consectetur adipisicing elit. Natus labore dolores distinctio excepturi rerum quia ullam temporibus provident harum? Quos ullam voluptas aperiam nihil sequi sit incidunt provident quaerat voluptates officia recusandae dignissimos iure praesentium in, minima optio nesciunt placeat laboriosam labore quidem quis reprehenderit voluptate modi! Blanditiis, nam cumque.</p>

            <img src="https://picsum.photos/1080/720" class="" alt="">

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