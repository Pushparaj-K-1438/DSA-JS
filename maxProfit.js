// find maximum profit
const stocks = [7,5,1,3,6,4,10];

const maxProfit = (stocks) => {
    const minStock = Math.min(...stocks);
    const maxStock = [];
    let maximumProfit = 0;
    for (let i = stocks.indexOf(minStock)+1; i<stocks.length; i++){
        const largestStock = stocks[i] - minStock;
        maxStock.push(largestStock);
        maximumProfit = Math.max(...maxStock);
    }
    return maximumProfit;
}
console.log(maxProfit(stocks)); // diaplays the max profit of all

// find maximum profit by each day
const maxProfitByDay = (stocks) => {
    const minStock = Math.min(...stocks);
    const maxStock = [];
    for (let i = stocks.indexOf(minStock); i<stocks.length; i++){
        const largestStock = stocks[i] - minStock;
        maxStock.push(largestStock);
    }
    return maxStock;
}
console.log(maxProfitByDay(stocks)); //displays max profit for each day from min stock day