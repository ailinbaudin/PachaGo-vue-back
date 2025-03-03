<template>
  <div class="map-container">
    <div ref="mapContainer" class="mapbox-map"></div>
  </div>
</template>

<script>
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Load Mapbox CSS

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
      default: () => [12.4924, 41.8902] // Default to Rome, Italy
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
      accessToken: this.accessToken // Pass accessToken as an option
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  },
  beforeUnmount() {
    if (this.map) this.map.remove();
  }
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100vh;
}
.mapbox-map {
  width: 100%;
  height: 100%;
}
</style>
