<template>
  <div>
    <carousel-3d>
      <slide :index="0">
        <img
          src="https://images.pexels.com/photos/3564357/pexels-photo-3564357.jpeg?cs=srgb&dl=pexels-wendy-wei-3564357.jpg&fm=jpg"
        />
      </slide>
      <slide :index="1">
        <img
          src="https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?cs=srgb&dl=pexels-matheus-bertelli-1144687.jpg&fm=jpg"
        />
      </slide>
      <slide :index="2">
        <iframe
          data-v-243b6456=""
          src="https://www.youtube.com/embed/3HkggxR_kvE"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
          class="w-100"
          height="280px"
          frameborder="0"
        ></iframe>
      </slide>
    </carousel-3d>
    <modal />
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Modal,
    Carousel3d,
    Slide,
  },
};
</script>
