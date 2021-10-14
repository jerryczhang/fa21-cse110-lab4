let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const carType in statistics) {
    let numCars = statistics[carType]
    if (carType[0] == 'r' || numCars % 2) {
        console.log(numCars);
    }
}