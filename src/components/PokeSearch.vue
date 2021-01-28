<template>
  <div class="pokesearch-wrap">
    <input type="text" v-model="pokeId" @keyup.enter="searchPoke" class="inputBox" placeholder="ex 34">
    <i class="fas fa-search" @click="searchPoke"></i>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        Error!
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <div slot="body" class="body-wrap">
        {{ FailMessage }}
      </div>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Modal from './common/Modal.vue';

export default {
  data() {
    return {
      pokeId: '',
      FailMessage: '',
      showModal: false,
    }
  },
  methods: {
    ...mapActions([
      'FETCH_POKE_INFO',
    ]),
    searchPoke() {
      const chk_value = /^[0-9]+$/
      if (this.pokeId.length < 1) {
        this.FailMessage = 'ID 번호를 입력해주세요.';
        this.showModal = true
        return false
      } else if (this.pokeId == 0) {
        this.FailMessage = '다른 번호를 입력해주세요.';
        this.showModal = true
        return false
      } else if (!chk_value.test(this.pokeId)) {
        this.FailMessage = '숫자만 입력해주세요.';
        this.showModal = true
        return false
      }
      this.FETCH_POKE_INFO(this.pokeId);
    },
  },
  components: {
    Modal,
  }
}
</script>

<style scoped>
.pokesearch-wrap {
  padding: 20px;
}
input {
  height: 30px;
  width: 420px;
  padding: 10px 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  font-size: 20px;
  vertical-align: middle;
  margin: 0 10px 0 0;
  box-shadow: 0 15px 150px rgb(0 0 0 / 10%), 0 10px 10px rgb(0 0 0 / 10%);
}
i {
  cursor: pointer;
}
.closeModalBtn {
  margin-left: 220px;
}
h3 {
  color: #e03131;
}
</style>