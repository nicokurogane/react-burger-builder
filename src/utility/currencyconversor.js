const currencies = ["USD", "EUR"];

class CurrencyConversor {
  static getCurrencies() {
    return currencies;
  }

  static euroToDollar(euro) {
    return euro * 1.1153;
  }

  static dollarToEuro(dollar) {
    return dollar * 0.89662;
  }

  static formatNumberCurrency(currencyCode, priceToFormat){
    if(currencyCode === "USD"){
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(priceToFormat);
    }else if(currencyCode === "EUR"){
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(priceToFormat);
    }
  }
}

export default CurrencyConversor;
