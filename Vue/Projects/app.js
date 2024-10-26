
Vue.createApp({

    data(){
        return {
           
            title: "Vue 3",
            description: "Vue 3 is the latest version of Vue",
            url: "https://nandysagar.in/",
            imgUrl : "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgTitle : "Img from Unsplash",
            items:2,
            isStock: true,
            showDiv:false,
            fruits:['mango', 'banana', 'pineapple'],
            manyFoods: [
                {name: 'Burrito', id:1},
                {name: 'Salad', id:2},
                {name: 'Cake', id:3},
              ]

        }
    }

}).mount("#app");