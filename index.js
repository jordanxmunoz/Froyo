const userFroyoOrder= prompt(
    "Please enter froyo flavors separated by commas",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
    );

const orderArray = userFroyoOrder.split(",");

function froyoOrder() {
let newOrder = {};
for (let i = 0; i < orderArray.length; i++) {
    let key = orderArray[i];
    if (key in newOrder) {
        newOrder[key] += 1;
    } else {
        newOrder[key] = 1;
    }
}
return newOrder;
}

console.table(froyoOrder(orderArray));
