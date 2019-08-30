<template>
    <div class="slider">
        <div class="window" @mouseover="stop" @mouseleave="play">
            <div class="container" :style="[containerStyle,baseContainerStyle]">
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
            <div class="icon-left-arrow" @click="move(1)"></div>
            <div class="icon-right-arrow" @click="move(-1)"></div>
            <div class="dots">
                <div class="dot" v-for="(image, index) in carouselImages" :key="index" 
                :class="[(index == currentIndex) ? 'selected-dot' : '']" @click="clickMove(index)"></div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { win32 } from 'path';

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
                return 3;
            }
        },
    },
    data: function() {
        return {
            currentIndex: 0,
            unitDistance: 414,
            distance: -414,
            imageCount: this.carouselImages.length,
            speed: 30,
            transitionEnd: true
        }
    },
    mounted: function() {
        this.init()
    },
    computed: {
        containerStyle() {
            return {
                transform: `translate3d(${this.distance}px, 0, 0)`
            }
        },
        containerWidth: function() {
            return this.unitDistance * (this.carouselImages.length + 2);
        },
        baseContainerStyle () {
            return {
                width: `${this.containerWidth}px`
            }
        },
        animateDuration: function() {
            return this.unitDistance / this.speed;
        },
        interval() {
            return this.duration * 1000;
        }
        
    },
    methods: {
        init () {
            this.play()  
        },
        move(direct) {

            if(!this.transitionEnd) return;
            this.transitionEnd = false;
            
            this.currentIndex -= direct;
            if(this.currentIndex < 0) this.currentIndex = 2;
            if(this.currentIndex > 2) this.currentIndex = 0;

            const des = this.distance + this.unitDistance * direct;
            this.animate(des, this.speed, direct);
        },
        animate(des, speed, direct) {
            if(this.temp) {
                window.clearInterval(this.temp);
                this.temp = null;
            }
            this.temp = window.setInterval(() => {
                if((direct == -1 && des < this.distance) || (direct == 1 && des > this.distance)) {
                    this.distance += speed * direct;
                } else {
                    this.transitionEnd = true;
                    window.clearInterval(this.temp);
                    this.distance = des;
                    if(this.distance <= (-1 * this.containerWidth)) this.distance = -1 * this.unitDistance;
                    if(this.distance >= 0) this.distance = this.unitDistance * (-1) * this.carouselImages.length;
                }
            },this.animateDuration)
        },
        clickMove(index) {
            this.currentIndex = index;
            this.distance = -(index+1) * this.unitDistance;
        },
        play() {
            if (this.carouselTimer) {
                window.clearInterval(this.carouselTimer)
                this.carouselTimer = null
            }
            this.carouselTimer = window.setInterval(() => {
                this.move(-1)
            }, this.interval);
        },
        stop () {
            window.clearInterval(this.carouselTimer)
            window.carouselTimer = null
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