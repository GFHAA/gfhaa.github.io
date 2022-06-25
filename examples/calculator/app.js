const typeWashTotal = document.querySelector("#totalTarif");
const totalTimes = document.querySelector("#totalTimes");
const totalOptions = document.querySelector("#totalOptions");
const TotalPrice = document.querySelector("#price");
const totalSale = document.querySelector("#totalSale")
const TotalPriceSale = document.querySelector("#TotalPrice");

const washRange = document.querySelector("#washTime")
const saleSpan = document.querySelector("#sale")
const output = document.querySelector(".output");

const typeWash = Array.from(document.querySelectorAll("input[name = tarrif]"));


typeWash.forEach(el => {
    el.addEventListener('click', function(e){
        currentSet.typeWash = e.target.id;
        updatePrice()
    })
});

washRange.addEventListener("input", function(e){
    currentSet.washTime = Number(washRange.value);
    saleSpan.innerHTML = currentSet.getSale() * 100 + "%";
    output.innerHTML = currentSet.washTime + " моек";
    updatePrice();
})

function updatePrice(){
    let priceType = currentSet.getTypeWashPrice();
    let sale = currentSet.getSale();
    let optionPrice = currentSet.getOptionPrice();
    let totalPrice = (priceType+optionPrice)*(1-sale)*currentSet.washTime;

    typeWashTotal.innerHTML = currentSet.getTypeWashPrice() + '₽';
    totalTimes.innerHTML = currentSet.washTime;
    TotalPrice.innerHTML = (priceType+optionPrice)*currentSet.washTime + '₽';
    totalSale.innerHTML = (priceType+optionPrice)*currentSet.washTime - totalPrice + '₽';
    TotalPriceSale.innerHTML = totalPrice + '₽';

    return totalPrice;
}

const price = {
    typeWash: {
        standart: 500,
        express: 350,
        water: 230,
        goodWash: 700
    },
    option: {
        option1: 50,
        option2: 100,
        option3: 140
    }
}
let currentSet = {
    typeWash: "standart",
    options: [],
    washTime: 1,
    getTypeWashPrice(){
        return price.typeWash[this.typeWash]
    },
    getOptionPrice(){
        let priceOption = 0;
        if(this.options.length > 0){
            this.options.forEach(el => {
                priceOption += price.option[el]
            });
        }
        return priceOption;
    },
    getSale(){
        let sale = 0;
        if(this.washTime > 2 && this.washTime <= 6){
            sale = 0.05
        }else if(this.washTime > 6 && this.washTime <= 13){
            sale = 0.1
        }else if(this.washTime > 13 && this.washTime < 19){
            sale = 0.15
        }else if(this.washTime >= 10 ){
            sale = 0.20
        }
        return sale;
    }
}