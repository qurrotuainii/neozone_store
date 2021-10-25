<template>
  <div class="home">
   <HeaderOnlineStore/>
    <Hero/>
    <Produk/>
    <Insta/>
    <Partner/>
    <FooterOnlineStore/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderOnlineStore from '@/components/HeaderOnlineStore.vue';
import Hero from '@/components/Hero.vue';
import Produk from '@/components/Produk.vue';
import Insta from '@/components/Insta.vue';
import Partner from '@/components/Partner.vue';
import FooterOnlineStore from '@/components/FooterOnlineStore.vue';


export default {
  name: 'home',
  components: {
    HeaderOnlineStore,
    Hero,
    Produk,
    Insta,
    Partner,
    FooterOnlineStore,
  }
}
</script>
