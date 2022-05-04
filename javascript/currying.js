const flavors = ["vanilla", "chocolate", "strawberry", "green tea"];

function createFlavorTest(flavor) {
    function isFlavor(element) {
        return element === flavor;
    }
    return isFlavor;
}
const isStrawberry = createFlavorTest("strawberry");
const indexOfFlavor = flavors.findIndex(isStrawberry);
console.log(indexOfFlavor);
