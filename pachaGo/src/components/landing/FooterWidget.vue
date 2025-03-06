<template>
    <div class="py-6 px-6 mx-0 mt-20 l bg-gradient-footer">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-2 flex justify-center items-center relative">
                <!-- Contenedor que incluye el logo y el círculo -->
                <div id="logo-container">
                    <!-- Círculo detrás del logo -->
                    <div id="logo-circle"></div>
                    <!-- Logo encima del círculo -->
                    <img src="/demo/images/landing/logo.png" alt="Hero Image" class="logo-img" />
                </div>
            </div>
            <div class="col-span-12 md:col-span-10">
                <div class="grid grid-cols-12 gap-8 text-center md:text-left">
                    <div class="col-span-12 md:col-span-3">
                        <h4 id="title"
                            class="font-medium text-white text-2xl leading-normal mb-4 text-surface-900 dark:text-surface-0">
                            Connect With Us
                        </h4>
                        <a href="https://www.instagram.com/pacha.go?igsh=aTZsamo2aTk0dWU1" target="_blank"
                            class="text-white leading-normal text-xl flex items-center cursor-pointer mb-2 text-surface-700 dark:text-surface-100">
                            <i class="pi text-white pi-instagram text-2xl mr-2"></i> Instagram
                        </a>
                        <a href="https://www.linkedin.com/company/pachago/posts/?feedView=all" target="_blank"
                            class="leading-normal text-white text-xl flex items-center cursor-pointer mb-2 text-surface-700 dark:text-surface-100">
                            <i class="pi pi-linkedin text-white text-2xl mr-2"></i> Linkedin
                        </a>
                        <a href="https://www.tiktok.com/@pachago2024" target="_blank"
                            class="text-white leading-normal text-xl flex items-center cursor-pointer mb-2 text-surface-700 dark:text-surface-100">
                            <i class="pi pi-tiktok text-white text-2xl mr-2"></i> TikTok
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Fondo degradado con clip-path */
.bg-gradient-footer {
    background: linear-gradient(180deg, rgb(255, 234, 9), rgb(147, 190, 67), rgb(11, 190, 67));
    width: 100%;
    padding-bottom: 50px;
    /* Ajusta según necesites */
}

/* Contenedor principal del logo */
#logo-container {
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Círculo blanco detrás del logo */
#logo-circle {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    border-radius: 50%;
    z-index: 0;
}

/* Imagen del logo encima del círculo */
.logo-img {
    position: relative;
    max-width: 70px;
    max-height: 70px;
    z-index: 1;
}
</style>
