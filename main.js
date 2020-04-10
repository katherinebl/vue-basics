const app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Loguis',
    description: 'Vue is a progressive framework and is also super easy to learn :)',
    selectedVariant: 0,
    altName: 'Vue Logo Green',
    url: 'https://vuejs.org/',
    inventory: 50,
    onSale: true,
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
    cart: 0,
    disabledButton: {
      backgroundColor: 'grey'
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
      
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    }
  }
});