<template>
    <div class="about-cell-click">
        <div class="left">{{content.leftLab}}</div>
        <div class="right">{{content.rightLab}}</div>
        <!-- <img class="arrow-right" src="../assets/estarlogo.png" alt="Arrow right"> -->
    </div>
</template>

<script>
export default {
    name: 'about-cell-click',
    props: {
        content: {
          leftLab:String,
          rightLab:String
        }
    }
}
</script>


<style>
.about-cell {
    width: 100%;
    background-color: white;
    border: 1;
    border-bottom-color: gray;
}
.left {
    padding: 10px;
    text-align: left;
    width: 30%;
    display: inline-block;
}
.right {
    text-align: right;
    width: 60%;
    display: inline-block;
}

.arrow-right {
    text-align: right;
    width: 20px;
    height: 20px;
    display: inline-block;
}

</style>
