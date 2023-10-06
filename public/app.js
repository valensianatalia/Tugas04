const app = Vue.createApp({
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Wellborn Liberty Ls Oversized T-shirt Black",
                    description: "2RB+ Terjual",
                    price: 119,
                    image: "https://wellborncompany.com/wp-content/uploads/2023/01/Untitled-1Artboard-1-14-1000x1000.jpg",
                    quantity: 0,
                },
                {
                    id: 2,
                    name: "Exhale T-shirt Hero White",
                    description: "1RB+ Terjual",
                    price: 90,
                    image: "https://lzd-img-global.slatic.net/g/p/cf5f449c59ba1429a95fd645a22f06b2.jpg_720x720q80.jpg",
                    quantity: 0,
                },
                {
                    id: 3,
                    name: "Someone T-shirt Singlet 264S Doberman",
                    description: "399 Terjual",
                    price: 79,
                    image: "https://id-test-11.slatic.net/p/cfe7a812caaae7288eda0e913c28f9eb.jpg",
                    quantity: 0,
                },
                {
                    id: 4,
                    name: "Poeticluzien T-shirt White Walk",
                    description: "1RB+ Terjual",
                    price: 79,
                    image: "https://img.ws.mms.shopee.co.id/id-11134207-7qula-lh7que4vvp9nf7",
                    quantity: 0,
                },
                {
                    id: 5,
                    name: "Predecessors Taf T-shirt Teefearless Black",
                    description: "394 Terjual",
                    price: 79,
                    image: "https://lzd-img-global.slatic.net/g/p/15036d7b6664042e49064223d7ffe523.png_720x720q80.png",
                    quantity: 0,
                },
                {
                    id: 6,
                    name: "Wellborn Kurt Letter T-shirt White",
                    description: "7RB+ Terjual",
                    price: 89,
                    image: "https://down-id.img.susercontent.com/file/5047af1a86abee39c3e7895daf7fc412",
                    quantity: 0,
                },
                {
                    id: 7,
                    name: "Heyfreak T-shirt Oversize Faces",
                    description: "652 Terjual",
                    price: 99,
                    image: "https://img.ws.mms.shopee.co.id/id-11134207-7quky-lk6me7a6i40fbf",
                    quantity: 0,
                },
                {
                    id: 8,
                    name: "OOTDSUPPLY Oversized T-shirt Accept I",
                    description: "1,5RB+ Terjual",
                    price: 82,
                    image: "https://images.tokopedia.net/img/cache/700/hDjmkQ/2023/3/6/23aa9dd3-26d9-4fde-963a-f59ea69af89c.jpg",
                    quantity: 0,
                },
                {
                    id: 9,
                    name: "Thenational Oversize T-shirt Passionate White",
                    description: "208 Terjual",
                    price: 79,
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7qul2-ljfpfkyq5fujf0_tn",
                    quantity: 0,
                },
            ],
            cart: [],
        };
    },
    computed: {
        cartTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
    methods: {
        addToCart(product) {
            if (product.quantity > 0) {
                const existingItem = this.cart.find(item => item.id === product.id);

                if (existingItem) {
                    existingItem.quantity += product.quantity;
                } else {
                    this.cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: product.quantity,
                    });
                }

                // Reset kuantitas produk setelah ditambahkan ke keranjang
                product.quantity = 0;
            }
        },
        removeFromCart(item) {
            const index = this.cart.indexOf(item);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },
    },
});

app.mount("#app");