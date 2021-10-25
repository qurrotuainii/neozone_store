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
                            <div class="product-thumbs">
                                <carousel class="product-thumbs-track ps-slider " :nav="false" :dots="false" >
                                    <div class="pt active" @click="changeImage(thumbs[0])" :class="thumbs[0] == foto_produk ? 'active' : '' ">
                                        <img src="img/NCT_127_Sticker_Dad_Hat_Box_V3.png" alt="" />
                                    </div>

                                    <div class="pt"  @click="changeImage(thumbs[1])" :class="thumbs[1] == foto_produk ? 'active' : '' ">
                                        <img src="img/detail1.png" alt="" />
                                    </div>

                                    <div class="pt"  @click="changeImage(thumbs[2])" :class="thumbs[2] == foto_produk ? 'active' : '' ">
                                        <img src="img/detail2.png" alt="" />
                                    </div>

                                    <div class="pt"  @click="changeImage(thumbs[3])" :class="thumbs[3] == foto_produk ? 'active' : '' ">
                                        <img src="img/detail3.png" alt="" />
                                    </div>
                                </carousel>
                            </div>
                        </div>
                        <div class="col-lg-6 text-left">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span>Album</span>
                                    <h3>NCT 127 'STICKER' DAD HAT DELUXE BOX</h3>
                                </div>
                                <div class="pd-desc">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita animi nulla aspernatur.
                                        Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil dolores.
                                        Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                                        impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                                    </p>
                                    <h4>$26.00</h4>
                                </div>
                                <div class="quantity">
                                    <router-link to="/cart"><a href="shopping-cart.html" class="primary-btn pd-cart">Add To Cart</a></router-link>
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
          foto_produk:"img/NCT_127_Sticker_Dad_Hat_Box_V3.png",
          thumbs:[
              "img/NCT_127_Sticker_Dad_Hat_Box_V3.png.png",
              "img/detail1.png",
              "img/detail2.png",
              "img/detail3.png"
          ]
      }
  },
  methods:{
      changeImage(urlImage){
          this.foto_produk=urlImage;
      }
  }
};
</script>
<style scoped>
.product-thumbs .pt{
    margin-right: 13px;
}
</style>