<template>
  <WhButtonFrame class="map-select mortal">
    <h2>Mortal Empires</h2>
  </WhButtonFrame>
</template>

<script>
import WhButtonFrame from "@/components/WhButtonFrame.vue";

export default {
  components: {
    WhButtonFrame
  }
};
</script>

<style lang="scss" scoped>
.map-select {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-end;
  text-align: center;

  width: 308px;
  height: 183px;
  margin: 10px;
  cursor: pointer;

  filter: drop-shadow(0 0 15px black);

  &:hover {
    filter: drop-shadow(0 0 15px #b29871);
  }

  h2 {
    color: white;
    text-shadow: 2px 2px black;
    font-size: 2em;
  }
}

.mortal {
  background: url("~@/assets/skins/default/campaign_select_grand_campaign.png");
  background-size: cover;
}
</style>
