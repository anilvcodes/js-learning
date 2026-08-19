const earth = {
    name: "Earth",

    mass: 5.972e24,          // kg
    radius: 6.371e6,         // m
    diameter: 1.2742e7,      // m

    distanceFromSun: 1.496e11, // m

    gravity: 9.81,           // m/s²
    dayLength: 24,           // hours
    yearLength: 365.25       // days
};

console.log("Planet:", earth.name);

console.log("Mass:", earth.mass, "kg");

console.log("Radius:", earth.radius, "m");

console.log("Diameter:", earth.diameter, "m");

console.log(
    "Distance from Sun:",
    earth.distanceFromSun,
    "m"
);

console.log(
    "Surface gravity:",
    earth.gravity,
    "m/s²"
);

console.log(
    "Day length:",
    earth.dayLength,
    "hours"
);

console.log(
    "Year length:",
    earth.yearLength,
    "days"
);