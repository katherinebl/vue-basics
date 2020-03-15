const app = new Vue({
  el: '#app',
  data: {
    product: 'Vueee',
    description: 'Vue is a progressive framework and is also super easy to learn :)',
    imageSrc: 'img/vue-green.jpeg',
    altName: 'Vue Logo Green',
    url: 'https://vuejs.org/',
    inventory: 100,
    onSale: false,
    details: ["40 hours course", "100 spots", "Available online"],
    variants: [
      {
        variantID: 1,
        variantColor: 'green',
        variantImage: 'img/vue-green.jpeg'
      },
      {
        variantID: 2,
        variantColor: 'yellow',
        variantImage: 'img/vue-yellow.png'
      }
    ],
    sizes: [20, 50, 80],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    removeFromCart: function() {
      this.cart -= 1;
    },
    updateProduct: function(variantImage) {
      this.imageSrc = variantImage;
    }
  }
});