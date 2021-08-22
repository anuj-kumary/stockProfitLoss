const purchasePrice = document.querySelector("#purchase-price");
const stockQty = document.querySelector("#stock-quantity");
const currPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector('#output');

function calculateProfitAndLoss() {
    let CP = purchasePrice.value;
    let Qty = stockQty.value;
    let SP = currPrice.value;
    if (!isNaN(CP) && !isNaN(Qty) && !isNaN(SP)) {
        CP = Number(CP);
        Qty = Number(Qty);
        SP = Number(SP);
        if (CP > 0 && Qty > 0 && SP > 0) {
            //loss
            if (CP > SP) {
                const loss = (CP - SP) * Qty;
                const lossPerc = ((CP - SP) * 100) / CP;
                output.innerText = `You loss is ${loss} and loss Percentage ${lossPerc}% `;
            }
            //profit
            else if (SP > CP) {
                const profit = (SP - CP) * Qty;
                const profitPerc = ((SP - CP) * 100) / CP;
                output.innerText = `Yay!! Your Profit is ${profit} and profit Percentage is ${profitPerc}`;
            } else {
                output.innerText = "No Pain No Gain :)";
            }
        } else {
            output.innerText = "Please enter value greter then 0";
        }
    } else {
        output.innerText =
            "Please enter values greater than 0 only numbers are allowed in above fields";
    }
}

checkBtn.addEventListener("click", calculateProfitAndLoss);