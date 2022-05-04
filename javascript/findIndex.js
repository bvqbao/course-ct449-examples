function isStrawberry(element) {
    return element === "strawberry";
}

const flavors = ["vanilla", "chocolate", "strawberry", "green tea"];
const indexOfStrawberry = flavors.findIndex(isStrawberry);
console.log(indexOfStrawberry);
