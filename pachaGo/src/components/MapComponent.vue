<script>
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import CardExperiencie from './CardExperiencie.vue';
export default {
  name: "MapComponent",
  props: {
    accessToken: {
      type: String,
      required: true
    },
    mapStyle: {
      type: String,
      default: "mapbox://styles/mapbox/streets-v11"
    },
    center: {
      type: Array,
      default: () => [12.4924, 41.8902] // Por defecto, Roma, Italia
    },
    zoom: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: this.mapStyle,
      center: this.center,
      zoom: this.zoom,
      accessToken: this.accessToken
    });

    // Agregar el control de navegación (zoom, rotación)
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', () => {
      const geocoder = new MapboxGeocoder({
        accessToken: this.accessToken,
        mapboxgl: mapboxgl
      });
      this.map.addControl(geocoder, 'top-left');
      this.map.setPaintProperty('water', 'saturation', 0.5);
      this.map.setPaintProperty('land', 'saturation', 1.5);
    });
  },
  beforeUnmount() {
    if (this.map) this.map.remove();
  }
};
</script>

<template>
  <CardExperiencie />

  <div class="map-container border-round-lg shadow-3">

    <div ref="mapContainer" class="mapbox-map border-2 border-primary"></div>
  </div>
</template>

<style scoped>
.text {
  align-items: center;
}

.map-container {
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  padding: 3%;
  margin-top: 0;
}

.mapbox-map {
  width: 86%;
  height: 100%;
  border-radius: 10px;
  padding-top: 0;
  margin-top: 0;
}
</style>
