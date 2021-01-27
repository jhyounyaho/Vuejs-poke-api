<template>
  <div :class="pokeType">
    <Modal v-if="showModal" @close="showModal(false)">
      <!-- you can use custom content here to overwrite default conten -->
      <h3 slot="header">
        Poke Info
        <i class="fas fa-times closeModalBtn" @click="showModal(false)"></i>
      </h3>
      <div slot="body" :class="pokeType" class="body-wrap">
        <div class="img-wrap">
          <img :src="`${imgSrc}${pokeId}.png`">
          <img :src="`${imgSrc}back/${pokeId}.png`">
        </div>
        <div>
          <ul>
            <li># {{ pokeId }} {{ pokeName }}</li>
            <li>Base Experience : {{ pokeBaseEx }} EX</li>
            <li>height : {{ pokeHeight / 10 }} m</li>
            <li>weight : {{ pokeWeight / 10 }} kg</li>
            <li>ability : {{ pokeType }}</li>
          </ul>
        </div>
      </div>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      showDetail: false,
      pokeId: '',
      pokeName: '',
      pokeBaseEx: '',
      pokeHeight: '',
      pokeWeight: '',
      pokeType: '',
      pokeImg: [],
      imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    }
  },
  components: {
    Modal,
  },
  created() {
    this.showDetail = this.$store.state.showDetail;
    this.fetchData()
  },
  methods: {
    ...mapMutations([
      'SHOW_DETAIL_LIST',
    ]),
    fetchData() {
      const { id, name, base_experience, height, weight, types, sprites } = this.$store.state.info;
      this.pokeId = id;
      this.pokeName = name;
      this.pokeBaseEx = base_experience;
      this.pokeHeight = height;
      this.pokeWeight = weight;
      this.pokeType = types[0]["type"]["name"];
      Object.keys(sprites).map((key) => {
        const url = sprites[key]
        if (url) {
          this.pokeImg.push(url)
        }
      });
      console.log(this.pokeImg)
    },
    showModal() {
      this.SHOW_DETAIL_LIST(false)
    }
  }
}
</script>

<style scoped>
.grass {background:#69db7c !important;}
.poison {background:#be4bdb !important;}
.water {background:#339af0 !important;}
.dragon {background:#6741d9 !important;}
.ice {background:#91a7ff !important;}
.flying {background:#74c0fc !important;}
.fire {background:#fd7e14 !important;}
.ghost {background:#862e9c !important;}
.fighting {background:#c92a2a !important;}
.normal {background:#adb5bd !important;}
.psychic {background:#d6336c !important;}
.bug {background:#66a80f !important;}
.dark {background:#343a40 !important;}
.steel {background:#868e96 !important;}
.fairy {background:#faa2c1 !important;}
.eletric {background:#fab005 !important;}
.rock {background:#adb5bd !important;}
.ground {background:#e67700 !important;}

h3 {
  color: #e03131;
}
.closeModalBtn {
  position: absolute;
  margin-left: 200px;
  cursor: pointer;
}

.body-wrap {
  color: #ffffff;
  padding: 20px;
}

.img-wrap {
  padding-left: 40px;
}
li {
  margin-bottom: 10px;
}
</style>

