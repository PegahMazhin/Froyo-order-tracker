const userInput = prompt("Enter your froyo flavors, separated by commas:");

if (userInput) {
    const flavorsArray = userInput.split(',').map(flavor => flavor.trim());

    const flavorCounts = {};

    flavorsArray.forEach(flavor => {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor] += 1; 
        } else {
            flavorCounts[flavor] = 1; 
        }
    });

    console.log(flavorCounts);
} else {
    console.log("No flavors entered.");
}
