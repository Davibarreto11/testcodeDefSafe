<template>
  <Header></Header>
  <div
    class="flex flex-col 2xl:flex-row items-center justify-center w-full h-full mt-16"
  >
    <div
      class="space-y-16 flex flex-col items-start justify-center w-3/5 2xl:w-1/4 h-full"
    >
      <h2
        class="uppercase text-3xl xl:text-4xl 2xl:text-5xl font-medium text-[#22223B]"
      >
        Cat Fact:
      </h2>
      <p
        v-if="fact"
        class="text-[#9A8C98] text-lg xl:text-xl 2xl:text-2xl font-medium"
      >
        {{ fact }}
      </p>
      <button
        @click="fetchCatFact"
        class="uppercase text-white text-lg xl:text-xl 2xl:text-2xl"
      >
        <div
          class="flex items-center bg-[#4A4E69] p-3 rounded-lg shadow-lg hover:-translate-y-2 hover:transition-all duration-500 text-sm lg:text-xl"
        >
          <Reload />
          Get a random cat fact
        </div>
      </button>
    </div>
    <div class="xl:w-1/2">
      <div
        class="flex flex-wrap items-center justify-center gap-5 xl:flex-nowrap mt-10 xl:mt-0"
      >
        <img
          class="rounded-lg w-2/3 lg:w-2/6 xl:w-3/5 2xl:w-2/5"
          src="../assets/images/kitty1.webp"
          alt="ImageCat1"
        />
        <div class="flex xl:flex-col items-center justify-center gap-2">
          <img
            class="rounded-lg xl:pb-5 w-1/3 xl:w-[15.5rem] 2xl:"
            src="../assets/images/kitty2.webp"
            alt="ImageCat2"
          />
          <img
            class="rounded-lg w-1/3 xl:w-[15.5rem]"
            src="../assets/images/kitty3.webp"
            alt="ImageCat3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCatFact } from "../services/api";
export default {
  data() {
    return {
      fact: null,
    };
  },
  methods: {
    async fetchCatFact() {
      try {
        const data = await getCatFact();
        this.fact = data.data[0]; // Ajuste conforme a estrutura dos dados retornados
      } catch (error) {
        console.error("Erro ao obter fato sobre gatos:", error);
      }
    },
  },
  created() {
    this.fetchCatFact();
  },
};
</script>
