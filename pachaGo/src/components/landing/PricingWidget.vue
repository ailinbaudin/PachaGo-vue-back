<template>
    <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
        <div class="text-center mb-6">
            <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">"Are you a farmer or a gatherer?"</div>
            <span class="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
        </div>
        <!-- Ajuste de la rejilla para pantallas grandes y pequeñas -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 md:mt-0">
            <!-- Primera tarjeta -->
            <div class="col-span-1 p-0 md:p-4">
                <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                    <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Find your seasonal paid <br> experience in agriculture</div>
                    
                    <!-- Establecer un tamaño fijo para las imágenes -->
                    <img src="/demo/images/landing/recolector.jpg" class="w-full h-64 object-cover mx-auto" alt="free" />
                    <div class="my-8 flex flex-col items-center gap-4">
                        <div class="flex items-center">
                            <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$0</span>
                            <span class="text-surface-600 dark:text-surface-200">per month</span>
                        </div>
                        <Button label="Get Started" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></Button>
                    </div>
                    <Divider class="w-full bg-surface-200"></Divider>
                    <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Responsive Layout</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Unlimited Push Messages</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">50 Support Tickets</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Free Shipping</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Segunda tarjeta -->
            <div class="col-span-1 p-0 md:p-4">
                <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                    <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Show the world how <br> greatest is your farm</div>
                    
                    <!-- Establecer un tamaño fijo para las imágenes -->
                    <img src="/demo/images/landing/tractur.jpg" class="w-full h-64 object-cover mx-auto" alt="startup" />
                    <div class="my-8 flex flex-col items-center gap-4">
                        <div class="flex items-center">
                            <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$1</span>
                            <span class="text-surface-600 dark:text-surface-200">per month</span>
                        </div>
                        <Button label="Get Started" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></Button>
                    </div>
                    <Divider class="w-full bg-surface-200"></Divider>
                    <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Responsive Layout</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Unlimited Push Messages</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">50 Support Tickets</span>
                        </li>
                        <li class="py-2">
                            <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                            <span class="text-xl leading-normal">Free Shipping</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
