<template>
    <div id="container-principal" class="flex  flex-col pt-6 px-6 lg:px-20 overflow-hidden"
        style="background: linear-gradient(180deg, rgb(255, 234, 9), rgb(147, 190, 67), rgb(11, 190, 67)); clip-path: ellipse(140% 75% at 50% 13%); ">
        <!---->
        <div>
            <!-- <div id=" top" class="md:text-5xl sm:text-3xl text-white">
                Join the <br> Community of <br>
                Pacha.go
            </div> -->
            <div class="title">
                <h3 class="md:text-7xl sm:text-3xl text-white">FIND YOUR SEASONAL <br>PAID EXPERIENCE <br> IN
                    AGRICOLTURE
                </h3>
            </div>
        </div>
        <div id="top" class="flex justify-center md:justify-end mt-[-5%]">
            <img src="/demo/images/landing/cel-pacha.png" alt="Hero Image" class="w-7/12 md:w-auto" />
        </div>
    </div>
    <!-- <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-7xl  title2">
        Join the Community of
        Pacha.go
    </div> -->
</template>

<style scoped>
.title {
    align-items: left;
    text-align: left;
    padding-top: 2%;
    margin-top: 0%;
}

.title2 {
    text-align: center;
    padding-bottom: 3%;

}



.title2 h2 {
    position: relative;
    z-index: 1;
    margin: 0;
}

#container-principal {
    padding-bottom: 0%;
    margin-bottom: 0%;

}

#top {
    padding-top: 2%;
    padding-bottom: 0%;
    margin-bottom: 0%;
}

.gradient-map-background {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

/* Contenido encima del fondo */
.content {
    position: relative;
    color: white;
    padding: 20px;
}

/* Estilos del texto */
.title {
    font-size: 3rem;
    font-weight: bold;
}

.subtitle {
    font-size: 1.5rem;
}
</style>