<template>
    <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
        <div class="text-center mb-6 title">
            <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">"Are you a farmer or a
                gatherer?"</div>
            <span class="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 md:mt-0">
            <!-- Primera tarjeta -->
            <div class="col-span-1 p-0 md:p-4">
                <div
                    class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all card">
                    <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Find your seasonal paid
                        <br> experience in agriculture
                    </div>

                    <img src="/demo/images/landing/collage.png" class="w-full h-64 object-cover mx-auto" alt="free" />

                    <Divider class="w-full bg-surface-200"></Divider>
                    <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Find the ideal experience for your skills and start
                                building your career in agriculture today.</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Customize your profile and agricultural experience, and
                                apply for your next opportunity in agriculture.</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Track your time and tasks, with no surprises in your
                                salary, ensuring complete transparency.</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Explore different locations where you can work, with a
                                live map of available job opportunities across the country.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Segunda tarjeta -->
            <div class="col-span-1 p-0 md:p-4">
                <div
                    class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all card">
                    <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Show the world how <br>
                        greatest is your farm</div>

                    <img src="/demo/images/landing/granjero.png" class="w-full h-64 object-cover mx-auto"
                        alt="startup" />

                    <Divider class="w-full bg-surface-200"></Divider>
                    <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Find your ideal working season, whether in the field,
                                harvest, or processing, anywhere you choose.</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Publish your ad to increase your company's visibility
                                and attract the right candidates to your positions.</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Manage applications easily from numerous workers and
                                choose the best ones for your team.</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Keep track of your harvest, ensuring nothing is missed
                                with complete transparency from planting to packaging.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    padding-bottom: 2%;
}

.card {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card>* {
    flex-grow: 1;
}

img {
    object-fit: cover;
    height: 250px;
}
</style>
