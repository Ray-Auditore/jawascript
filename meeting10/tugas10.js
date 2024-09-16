
function registerUser(name, userType) {
    if (userType === "VIP") {
        return `Welcome VIP, ${name}!`;
    } else {
        return `Welcome, ${name}!`;
    }
}

console.log(registerUser("Nina", "VIP"));
// no 1
function applyDiscount(userType, purchaseAmount) {
    let discount;
    if (userType === "VIP") {
        discount = 20;
    } else {
        discount = 10;
    }
    const totalDiscount = (purchaseAmount * discount) / 100;
    return purchaseAmount - totalDiscount;
}

console.log(applyDiscount("VIP", 200));
console.log(applyDiscount("NON VIP", 100));

