<template>
    <div class="vueCarousel">
        <div class="carousel-images">
            <ul class="u">
                <li v-for="(image, index) in carouselImages" :key="index"
                class="item"
                v-show="index == showIndex">
                <img :src="image.src" alt="轮播图">
                </li>
            </ul>
            <ul class="dots">
                <li v-for="(img, index) in carouselImages" :key="index" 
                :class="['dot', index==showIndex? 'selected-dot' : 'normal-dot']">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'carouselImage',
    props: {
        carouselImages: {
            type: Array,
            required: true
        },
        delay: {
            type: Number,
            default: function() {
                return 2000;
            }
        },
        imgWidth: {
            default: function() {
                return 600;
            }
        },
        imgHeight: {
            default: function() {
                return 100;
            }
        },
        dotWidth: {
            default: function() {
                return 20;
            }
        }
    },
    data: function() {
        return {
            showIndex:0
        }
    }
}
</script>

<style lang="less">

</style>