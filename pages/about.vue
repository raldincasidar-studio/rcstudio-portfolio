<template>
    <!-- <Navbar></Navbar> -->
    
    <div class="hero-page text-center py-20 px-5 md:px-10 max-w-screen-xl mx-auto">
        <h2 class="text-white text-2xl md:text-4xl my-10 font-bold">About Us</h2>
        <!-- <h1 class="text-yellow-400 drop-shadow-xl shadow-yellow-400/50 text-7xl my-10 font-bold">Design Websites</h1> -->
        <h1 class="text-yellow-400 drop-shadow-xl leading-relaxed md:leading-relaxed shadow-yellow-400/50 text-4xl md:text-6xl my-10 font-bold">We help you with your Software Projects</h1>
        <p class="text-white/70 text-md md:text-lg  leading-10 md:leading-loose">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and.</p>
        <a class="rounded-full inline-block white-text p-4 px-6 bg-yellow-400 mt-20 shadow-md shadow-yellow-400/50 font-bold uppercase hover:scale-110 transition-all hover:shadow-lg active:scale-95 active:shadow-sm" href="#!">CREATE YOUR PROJECTS!</a>
    </div>
    
    <div class="who-are-we flex flex-column md:flex-row flex-wrap-reverse max-w-screen-2xl py-20 mx-auto min-h-full items-center px-3 md:px-10">
        <div class="box-1 p-4 w-full lg:w-2/4">
            <h3 class=" text-xl md:text-2xl text-white my-5 font-bold">Who are we?</h3>
            <h2 class="text-4xl md:text-5xl text-yellow-400 drop-shadow-xl font-bold my-10 leading-relaxed">We are a team of software experts</h2>
            <p class="text-md md:text-lg text-white/70 leading-10">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one.</p>
        </div>
        <div class="box-2 p-0 md:p-4 w-full lg:w-2/4 justify-center">
            <div class="flex flex-row p-0 md:p-10 justify-center gap-x-3 max-w-full md:max-w-xl m-auto">
                <div class="flex flex-col mt-20">
                    <img src="~/assets/img/team-1.png" class="w-72 cursor-pointer hover:-rotate-6 transition-transform hover:scale-110" alt="Team 1: Raldin Casidar">
                    <img src="~/assets/img/team-2.png" class="w-72 cursor-pointer hover:rotate-6 transition-transform hover:scale-110" alt="Team 2: Raldin Casidar">
                </div>
                <div class="flex flex-col">
                    <img src="~/assets/img/team-3.png" class="w-72 cursor-pointer hover:-rotate-6 transition-transform hover:scale-110" alt="Team 3: Raldin Casidar">
                    <img src="~/assets/img/team-4.png" class="w-72 cursor-pointer hover:rotate-6 transition-transform hover:scale-110" alt="Team 4: Raldin Casidar">
                </div>
            </div>
        </div>
    </div>

    <div class="h-[80vh]">
        <LMap
        ref="map"
        :zoom="zoom"
        :center="[8.580053, 123.355817]"
        >
            <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&amp;copy; <a href=&quot;https://www.raldincasidar.studio/&quot;>Raldin Casidar Studio</a> 2023"
                layer-type="base"
                name="OpenStreetMap"
            />
            <LMarker :lat-lng="[8.580053, 123.355817]" name="Raldin Casidar Studio">
                <LPopup class="text-center text-white p-4 leading-loose">
                    <img src="/favicon.ico" class="h-14 mx-auto" alt="">    <br>
                    <b class="text-grey-700 text-lg">RC Studio Main Office</b><br>
                    Turno, Dipolog City<br>
                    main@raldincasidar.studio
                    <br><br>
                    <a href="https://maps.app.goo.gl/D5GNvi3Hi7wYyNwTA" target="_blank" class="block p-2 bg-blue-100 rounded-full px-4">Open on Google Maps</a>
                </LPopup>
            </LMarker>
        </LMap>
    </div>
    
    <div class="our-team-experts min-h-full py-20 px-5 md:px-10 text-center max-w-screen-xl mx-auto">
        <h3 class="text-white text-4xl font-bold  mb-20 ">Our Team Experts</h3>
        <div class="flex flex-row flex-wrap gap-0 justify-center">
            <div class="w-full md:w-1/2 lg:w-2/6 text-center group cursor-pointer hover:bg-yellow-400/5 transition-colors py-5 rounded-xl focus:ring-2 ring-white">
                <img src="~/assets/img/team-1.png" class="transition-transform w-full max-w-xs mx-auto group-hover:-rotate-6 group-hover:scale-110" alt="Team 1: Raldin Casidar">
                <h4 class="text-white font-bold text-2xl mb-5">Raldin C. Disomimba</h4>
                <div class="tag text-yellow-400 border-2 border-yellow-400 font-bold inline-block rounded-100 group-hover:bg-yellow-400 group-hover:text-gray-800 transition-colors cursor-pointer p-2 text-sm rounded-full px-6 mb-5">Backend Developer</div>
                <p class="text-white/70 mb-6">Expert in PHP, MySQL & Python</p>
                <p>
                    <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">facebook</i></a>
                    <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">public</i></a>
                    <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">mail</i></a>
                </p>
            </div>
            <div class="w-full md:w-1/2 lg:w-2/6 text-center group cursor-pointer hover:bg-yellow-400/5 transition-colors py-5 rounded-xl focus:ring-2 ring-white">
                <img src="~/assets/img/team-4.png" class="transition-transform w-full max-w-xs mx-auto group-hover:-translate-y-3 group-hover:scale-110" alt="Team 1: Raldin Casidar">
                <h4 class="text-white font-bold text-2xl mb-5">Jebray Sorronda</h4>
                <div class="tag text-yellow-400 border-2 border-yellow-400 font-bold inline-block rounded-100 group-hover:bg-yellow-400 group-hover:text-gray-800 transition-colors cursor-pointer p-2 text-sm rounded-full px-6 mb-5">Frontend Developer</div>
                <p class="text-white/70 mb-6">Expert in Web, VueJS and ReactJS</p>
                <p>
                    <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">facebook</i></a>
                    <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">public</i></a>
                    <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">mail</i></a>
                </p>
            </div>
            <div class="w-full md:w-1/2 lg:w-2/6 text-center group cursor-pointer hover:bg-yellow-400/5 transition-colors py-5 rounded-xl focus:ring-2 ring-white">
                <img src="~/assets/img/team-3.png" class="transition-transform w-full max-w-xs mx-auto group-hover:rotate-6 group-hover:scale-110" alt="Team 1: Raldin Casidar">
                <h4 class="text-white font-bold text-2xl mb-5">Maveric Marano</h4>
                <div class="tag text-yellow-400 border-2 border-yellow-400 font-bold inline-block rounded-100 group-hover:bg-yellow-400 group-hover:text-gray-800 transition-colors cursor-pointer p-2 text-sm rounded-full px-6 mb-5">Lead Marketing</div>
                <p class="text-white/70 mb-6">Expert in Marketing</p>
                <p>
                    <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">facebook</i></a>
                    <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">public</i></a>
                    <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">mail</i></a>
                </p>
            </div>
        </div>
    </div>
    
    <div class="our-previous-work our-services min-h-full py-20 px-3 md:px-10 text-center max-w-screen-xl mx-auto">
        <h3 class="text-white text-4xl font-bold ">Our Previous Work</h3>
        <img class="mx-auto mb-20" src="~/assets/img/divider.svg" alt="">
    
        <project-highlights></project-highlights>
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