const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  env:{
    itemsList:["ноутбук", "навушники", "кросівки", "кавомашина", "велосипед", "мікроскоп", "фен", "фарба", "оперативна пам'ять"],
    //firstPrice: 0,
    price:"",
    request : {
      method: 'GET',
      url: 'https://rozetka.com.ua/',
    },
  },
  
  e2e: {
    //testIsolation:false,
    defaultCommandTimeout : 10000,
    //"chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
