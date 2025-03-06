<script setup lang="ts">

import FooterWidget from '@/components/landing/FooterWidget.vue';
import HeroWidget from '@/components/landing/HeroWidget.vue';
import HighlightsWidget from '@/components/landing/HighlightsWidget.vue';
import PricingWidget from '@/components/landing/PricingWidget.vue';
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
import MapComponent from '@/components/MapComponent.vue';
const AccessToken = 'pk.eyJ1IjoicGFjaGFnbzI0IiwiYSI6ImNsdndlNXVvZTF5NHYybHJybGNjamxqajAifQ.R3tQ8_ZrNP0gJbLHL1BWBA';
const mapStyle = 'mapbox://styles/mapbox/streets-v11';
const mapCenter = [12.4924, 41.8902];
const mapZoom = 10;

</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static">
                <TopbarWidget />
            </div>
            <HeroWidget />
            <MapComponent :accessToken="AccessToken" :mapStyle="mapStyle" :center="mapCenter" :zoom="mapZoom" />
            <HighlightsWidget />
            <PricingWidget />
            <FooterWidget />
        </div>
    </div>
</template>
