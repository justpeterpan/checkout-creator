<template>
  <div class="preview">
    <div class="viewport iphone iphone--light">
      <header>SHOP LOGO</header>
      <img src="../assets/images/yeezy-boost-inside.jpg" alt />
      <main>
        <!-- 
        TODO: replace with svg
        <h1 v-bind:style="headlineIconColor">Headline Icon Color</h1>
        {{ headlineIconColor }} 
        -->
        <h1 class="headline--xl" v-bind:style="headlineFontColor">Headline</h1>
        {{ headlineFontColor }}
        <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>
        <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
        <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>
        {{ bodyFontFamily }}
        <button
          class="supr-btn supr-btn--lg supr-btn--primary supr-btn--block"
        >Primary button</button>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      storeState: this.$store.state
    };
  },
  computed: {
    ...mapGetters(["headlineFontColor", "headlineIconColor", "bodyFontFamily"])
  }
};
</script>

<style scoped lang="scss">
@import "../sass/styles.scss";
img {
  max-width: 100%;
}

.preview {
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: all 0.3s ease-in-out;

  .viewport {
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &.iphone--dark {
      box-shadow: 0 0 0 15px #111, 0 0 0 20px #333,
        40px 40px 40px 0 rgba(0, 0, 0, 0.3);
    }

    &.iphone--light {
      box-shadow: 0 0 0 15px #f0f0f0, 0 0 0 20px #fff,
        40px 40px 40px 0 rgba(0, 0, 0, 0.3);
    }

    &.iphone {
      width: 375px;
      height: 812px;
      border-radius: 40px;
    }

    &.ipad {
      width: 1024px;
      height: 768px;
      border-radius: 8px;
    }

    &.ipad--light {
      box-shadow: 0 0 0 15px #f0f0f0, 0 0 0 20px #fff,
        40px 40px 40px 0 rgba(0, 0, 0, 0.3);
    }

    header {
      width: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 16px;
      display: flex;
      flex-direction: column;
      place-items: center;
      place-content: center;
      position: sticky;
      top: 0;
    }

    main {
      padding: 16px 48px;
    }
  }
}
</style>
