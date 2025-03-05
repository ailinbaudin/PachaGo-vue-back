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
            <section class="d-flex justify-content-center py-4">
                <img src="/src/assets/demo/Hands-title.jpg" width="95%" height="400px" className="rounded-3" />
            </section>
            <section class="section-overview">
                <h2><b>BECOME A MEMBER <br />OF</b></h2>
                <img src="#" alt="Pacha-Go" width="60%" height="100px" />
                <div class="content-grid">
                    <div class="overview-card">
                        <h3>Do you need labor hands for your farm?</h3>
                        <ul>
                            <li>Personalizza il tuo profilo e esperienza in agricoltura e candidati per la tua prossima
                                esperienza in agricoltura</li>
                            <li>Trova l’esperienza ideale per le tue competenze.</li>
                            <li>Monitora il tuo tempo e le tue mansioni, senza sorprese nel tuo stipendio.</li>
                        </ul>
                    </div>
                    <div class="overview-card">
                        <h3>Do you want to find your working season everywhere?</h3>
                        <ul>
                            <li>Pubblica il tuo annuncio e aumenta la visibilità della tua azienda.</li>
                            <li>Gestisci agevolmente le canditature fra numerosi lavoratori.</li>
                            <li>Tieni traccia del tuo raccolto e non farti sfuggire nulla, in completa trasparenza.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sezione 2: Experience Benefits */}
            <section class="section-experience">
                <h2><b>MAKE AN EXPERIENCE MEANS:</b></h2>
                <div class="benefits-grid">
                    <div class="benefit-item">
                        <img src="#" alt="Make Network" />
                        <span>Make Network</span>
                    </div>
                    <div class="benefit-item">
                        <img src="#" alt="Skill Up" />
                        <span>Skill Up</span>
                    </div>
                    <div class="benefit-item">
                        <img src="#" alt="Contact with Nature" />
                        <span>Contact with Nature</span>
                    </div>
                    <div class="benefit-item">
                        <img src="#" alt="Make Money" />
                        <span>Make Money</span>
                    </div>
                    <div class="benefit-item">
                        <img src="#" alt="Practice Knowledge" />
                        <span>Practice Knowledge</span>
                    </div>
                    <div class="benefit-item">
                        <img src="#" alt="Have Responsibilities" />
                        <span>Have Responsibilities</span>
                    </div>
                </div>
            </section>

            {/* Sezione 3: Recruiting */}
            <section class="section-recruiting">
                <h2><b>RECRUITING</b></h2>
                <div class="recruiting-grid">
                    <div class="recruiting-left">
                        <h3>the others</h3>
                        <ul>
                            <li>Spend money to wait until someone spot your ad</li>
                            <li>Post your ad, and ask people you don’t really know to come work for you</li>
                            <li>No map based solution</li>
                        </ul>
                    </div>
                    <div class="recruiting-right">
                        <h3>with pachago</h3>
                        <ul>
                            <li>Find the perfect team when and where you need it</li>
                            <li>No more flying papers, it’s all here: the hours, the money spent, team’s contact,
                                interactive graphs</li>
                            <li>All the members are verified person and often you can know what opinions they left from
                                previous experiences</li>
                            <li>Search for the people you need in a map</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sezione 4: Vantaggi */}
            <section class="section-advantages">
                <h2>I vantaggi dell’essere un <br /><b>Experiencer</b></h2>
                <img src="#" alt="experiencer" width="100%" />
                <h2>I vantaggi dell’essere un <br /><b>Host</b></h2>
                <img src="#" alt="host" width="100%" />
            </section>

            {/* Sezione 5: Images to change */}
            <section class="section-images">
                <h2 class="pt-4"><b>An overview of candidates on PachaGo</b></h2>
                <img src="#" alt="Placeholder" width="100%" />
                <h2 class="pt-4"><b>Places & people to discover</b></h2>
                <img src="#" alt="Placeholder" width="100%" />
            </section>

            {/* Sezione 6: Travel Tips */}
            <section class="section-travel-tips">
                <h2>Travel Tips & Adventure Advice</h2>
                <div class="tips-grid">
                    <div class="tip-item">
                        <img src="#" alt="Seasonal Job" />
                        <p>Back from seasonal job abroad? Learn how to receive more money!</p>
                    </div>
                    <div class="tip-item">
                        <img src="#" alt="Alsatian Vegetable" />
                        <p>Have you tried Alsatian vegetable? Discover the sauerkraut!</p>
                    </div>
                    <div class="tip-item">
                        <img src="#" alt="France Wine" />
                        <p>France and wine culture: Learn where to find experiences.</p>
                    </div>
                    <div class="tip-item">
                        <img src="#" alt="CV Advice" />
                        <p>Look professional on your CV. We provide tips for your CV.</p>
                    </div>
                </div>
            </section>
            <HighlightsWidget />
            <PricingWidget />
            <FooterWidget />
        </div>
    </div>
</template>
