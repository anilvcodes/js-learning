//DAY 2 — Gravitational Force
//Calculate the gravitational force between two objects.
//Formula: F = G × (m1 × m2) / r²
//G = 6.67430e-11
function gravitionalForce(m1,m2,r){
    const G=6.67430e-11;
    return G=(m1*m2)/r**2;
}
console.log(gravitationalForce(10, 20, 2));