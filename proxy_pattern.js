function CryptocurrencyAPI() {
  this.getValue = function(coin) {
    console.log("Calling External API...");
    switch(coin) {
      case "Bitcoin":
        return "$8,500";
      case "Litecoin":
        return "$50";
      case "Ethereum":
        return "$175";
    }
  }
}


function CryptocurrencyProxy() {
  this.api = new CryptocurrencyAPI();
  this.cache = {};
  this.getValue = function(coin) {
    if(this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  }
}


const proxy = new CryptocurrencyProxy();
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Ethereum"));