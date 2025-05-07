<template>
    <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
        <div class="text-center mb-6 title">
            <div class="text-surface-900 dark:text-surface-0 font-normal sm:text-xl mb-2 text-4xl">Are you an Experiencer or a
                Host?</div>
            <span class="text-muted-color text-2xl">For everyone, the best benefits.
            </span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 md:mt-0">
            <!-- Primera tarjeta -->
            <div class="col-span-1 p-0 md:p-4">
                <div
                    class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all card">
                    <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Find your seasonal paid
                        <br> experience in agriculture
                    </div>

                    <img src="/demo/images/landing/ergot.png" class="w-full h-64 object-cover mx-auto" alt="free" />

                    <Divider class="w-full bg-surface-200"></Divider>
                    <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Discover new places and job opportunities with our
                                real-time interactive map</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Set filters to find the ideal experience based on your
                                desires and skills: Accommodation,
                                Dietary Preferences, Job Role, Cultivations, Methods, and other additional services
                                (such as
                                WiFi, Pet-Friendly, Pool, etc.) </span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Create your profile, tailor your experience, and land
                                your next agricultural job</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Stay in control: Track your hours and get paid with
                                total transparency</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Segunda tarjeta -->
            <div class="col-span-1 p-0 md:p-4">
                <div
                    class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all card">
                    <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Your Farm is Great
                        <br>
                         Show It Off! </div>

                    <img src="/demo/images/landing/granjero.png" class="w-full h-64 object-cover mx-auto"
                        alt="startup" />

                    <Divider class="w-full bg-surface-200"></Divider>
                    <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal"> List your farm, showcase your strengths, and connect with the best workers</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal"> Find, hire, and manage the perfect team effortlessly
                            </span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal"> Less paperwork, more productivity—handle everything in your language</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal"> Support at every step—Pacha Go has your back!
                            </span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal"> Keep track of your harvest, ensuring nothing is missed
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
