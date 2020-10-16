<template>
  <div>
    <h4>Current Coordinates</h4>
    <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longtitude</p>
    <hr />

    <h4>Custom Coordinates</h4>
    <p>{{ dclat }} Latitude, {{ dclng }} Longtitude</p>
    <hr />
    <h4>Map Coordinates</h4>
    <p>{{ mapdata.lat }} Latitude, {{ mapdata.lng }} Longtitude</p>
    <hr />
    <input type="text" v-model="cust.clat" placeholder="latitude" />
    <input type="text" v-model="cust.clng" placeholder="longtitude" />
    <button v-on:click="getData">Click</button>
    <hr />
    <GmapMap
      :center="coordinates"
      :zoom="5"
      map-type-id="terrain"
      style="width: 900px; height: 400px"
      ref="mapRef"
    ></GmapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      dclat: null,
      dclng: null,

      coordinates: {
        lat: 0,
        lng: 0,
      },
      cust: {
        clat: null,
        clng: null,
      },
    };
  },
  created() {
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((error) => alert(error));
  },
  methods: {
    getData() {
      //alert('test');
      this.dclat = this.cust.clat;
      this.dclng = this.cust.clng;
      // this.lat=this.cust.clat
      // this.lng=this.cust.clng
    },
  },
  mounted() {
    // this.map1=new H.map1{
    //     this.$refs.map1,
    //     this.platform.createDefaultLayers().vector.normal.map,
    //     {
    //         zoom:this.zoom,
    //         center:{lat:coordinates.lat,lng:coordinates.lng}
    //     }
    // };

    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  computed: {
    mapdata() {
      if (!this.map) {
        return {
          lat: 0,
          lon: 0,
        };
      }
      return {
        //lat:50,
        //lng:90
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
    },
  },
};
</script>