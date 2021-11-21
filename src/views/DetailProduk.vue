<template>
  <div class="detailproduk">
   <HeaderOnlineStore/>
        <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-left">
                    <div class="breadcrumb-text product-more">
                         <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <span>Detail</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="product-big-img" :src="foto_produk" alt="" />
                            </div>
                            <div class="product-thumbs"  v-if="productDetails.galleries.length > 0">
                                <carousel class="product-thumbs-track ps-slider " :nav="false" :dots="false" >
                                    <div 
                                    v-for="ss in productDetails.galleries"
                                    :key="ss.id"
                                    class="pt active" @click="changeImage(ss.photo)" 
                                    :class="ss.photo == foto_produk ? 'active' : '' ">
                                         <img :src="ss.photo" alt />
                                    </div>


                                </carousel>
                            </div>
                        </div>
                        <div class="col-lg-6 text-left">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span>{{productDetails.type}}</span>
                                    <h3>{{productDetails.name}}</h3>
                                </div>
                                <div class="pd-desc">
                                    <p v-html=" productDetails.description">  
                                    </p>
                                    <h4>${{productDetails.price}}</h4>
                                </div>
                                <div class="quantity">
                                    <router-link to="/cart">
                                    <a @click="saveKeranjang(productDetails.id, productDetails.name, productDetails.price, productDetails.galleries[0].photo)"  href="#" class="primary-btn pd-cart">Add To Cart</a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->
    <SaranProduk/>
    <!-- <FooterOnlineStore/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderOnlineStore from '@/components/HeaderOnlineStore.vue';
import carousel from 'vue-owl-carousel';
import SaranProduk from '@/components/SaranProduk.vue';

// import FooterOnlineStore from '@/components/FooterOnlineStore.vue';
import axios from "axios";


export default {
  name: 'detailproduk',
  components: {
    HeaderOnlineStore,
    carousel,
    SaranProduk,
    // FooterOnlineStore,
  },
  data(){
      return{
            foto_produk:"",
            productDetails:[],
            keranjangUser: []
      };
  },
  methods:{
      changeImage(urlImage){
          this.foto_produk=urlImage;
      },
       setDataPicture(data) {
      // replace object productDetails dengan data dari API
      this.productDetails = data;
      // replace value gambar default dengan data dari API (galleries)
      this.foto_produk = data.galleries[0].photo;
    },
      saveKeranjang(idProduct, nameProduct,priceProduct, photoProduct ) {
        var productStored = {
        "id": idProduct,
        "name": nameProduct,
        "price": priceProduct,
        "photo": photoProduct
            }
      this.keranjangUser.push(productStored);
      const parsed = JSON.stringify(this.keranjangUser);
      localStorage.setItem('keranjangUser', parsed);
    }
  },
  
    mounted(){
            if (localStorage.getItem('keranjangUser')) {
                try {
                    this.keranjangUser = JSON.parse(localStorage.getItem('keranjangUser'));
                } catch(e) {
                    localStorage.removeItem('keranjangUser');
                }
                }
      axios
      .get("http://127.0.0.1:8001/api/products", {
          params:{
              id: this.$route.params.id
          }
      })
      .then(res => (this.setDataPicture(res.data.data)))
      .catch(err => console.log(err));
  }
};
</script>
<style scoped>
.product-thumbs .pt{
    margin-right: 13px;
}
</style>