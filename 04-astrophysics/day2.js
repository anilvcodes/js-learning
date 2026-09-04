//DAY 2 — Gravitational Force
//Calculate the gravitational force between two objects.
//Formula: F = G × (m1 × m2) / r²
//G = 6.67430e-11


//const G = 6.67430e-11;

// Masses in kilograms
//const m1 = 10;
//const m2 = 20;

// Distance in meters
//const r = 2;

// Calculate gravitational force
//const F = G * (m1 * m2) / (r ** 2);

console.log("Gravitational Force:", F, "N");
function gravitionalForce(m1,m2,r){
    const G=6.67430e-11;
    return G=(m1*m2)/r**2;
}
console.log(gravitationalForce(10, 20, 2));