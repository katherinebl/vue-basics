// Register Main Component
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">

      <div class="product-image">
        <a :href="url">
          <img :src="image" :alt="altName">
        </a>
      </div>

      <div class="product-info">
        <h1>{{title}}</h1>

        <p>{{description}}</p>

        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>

        <div class="color-box" 
            v-for="(variant, index) in variants" 
            :key="variant.variantID"
            :style="{backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)"
        >
        </div>

        <p v-if="!inStock" :style="{color: '#FF0000'}">Out of Stock :(</p>
        <p v-else :style="{color: '#84CF6A'}">Available! :)</p>
        <p>User is premium: {{premium}}</p>


        <button @click="addToCart"
                :disabled ="!inStock"
                :class="{disabledButton: !inStock}"
        >Add to Cart</button>

        <button @click="removeFromCart" 
                :disabled = "cart == 0"
                :class="{disabledButton: cart == 0}"
        >Remove</button>

        <div class="cart">
          <p>Cart( {{cart}} )</p>
        </div>
      </div>

    </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Loguis',
      description: 'Vue is a progressive framework and is also super easy to learn :)',
      selectedVariant: 0,
      altName: 'Vue Logo Green',
      url: 'https://vuejs.org/',
      details: ["40 hours course", "100 spots", "Available online"],
      variants: [
        {
          variantID: 1,
          variantColor: 'green',
          variantImage: 'img/vue-green.jpeg',
          variantQuantity: 10
        },
        {
          variantID: 2,
          variantColor: 'yellow',
          variantImage: 'img/vue-yellow.png',
          variantQuantity: 0
        }
      ],
      cart: 0,
      disabledButton: {
        backgroundColor: 'grey'
      }
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
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    }
  }
})

const app = new Vue({
  el: '#app', 
  data: {
    premium: true
  }
});