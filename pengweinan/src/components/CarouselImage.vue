<template>
    <div class="slider">
        <div class="window">
            <div class="container" :style="containerStyle">
                <div class="image">
                    <img class="img" :src="carouselImages[carouselImages.length-1].img" alt="">
                </div>
                <div class="image" v-for="(image, index) in carouselImages" :key="index">
                    <img class="img" :src="image.img" alt="">
                </div>
                <div class="image">
                    <img class="img" :src="carouselImages[0].img" alt="">
                </div>
            </div>
            <div class="icon-left-arrow"></div>
            <div class="icon-right-arrow"></div>
            <div class="dots">
                <div class="dot" v-for="(image, index) in carouselImages"></div>
            </div>
            
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
        duration: {
            type: Number,
            default: function() {
                return 4;
            }
        },
    },
    data: function() {
        return {
            currentIndex: 1,
            distance: -414
        }
    },
    // methods: {
        
    // },
    computed: {
        containerStyle() {
            return {
                // transform: `translate3d(${this.distance}px, 0, 0)`
            }
        }
    }
}
</script>

<style lang="less">
.slider {
    width: 100%;
    height: 100%;
    position: relative;
    .window {
        width: 100%;
        height: 100%;
        .container {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            overflow-x: scroll;
            .image {
                height: 100%;
                width: 100%;
                flex: 0 0 414px;
                .img {
                    height: 100%;
                    width: 100%;
                }
            }
        }
        .icon-left-arrow {
            position: absolute;
            width: 40px;
            height: 40px;
            top: 50%-20px;
            background-color: red;
            font-size: 40px;
        }
        .icon-right-arrow {
            position: absolute;
            width: 40px;
            height: 40px;
            top: 50%-20px;
            right: 0px;
            background-color: red;
            font-size: 40px;
        }
        .dots {
            width: 100%;
            height: 10px;
            position: absolute;
            top: 90px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            .dot {
                width: 10px;
                height: 10px;
                margin: 0px 5px;
                border-radius: 5px;
                background-color: black;
            }
            .selected-dot {
                background-color: white;
            }
        }
    }
}
</style>