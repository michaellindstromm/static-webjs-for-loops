// For loop Numero Uno

for (var i = 5; i < 120; i+=10) {

  console.log("Current value is ", i);
}

// For loop Numero Dos

for (var i = 4096; i >= 1; i/=2) {
  console.log("Current value is ", i);
}

// For loop Numero Tres

let pres = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "Adams", "Jackson", "Van Buren"];
for (var i = 0; i < pres.length; i++) {
  console.log("President #", i+1, "was ", pres[i]);
}

// For loop Numero Cuatro

let antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (let variable in antSpecies) {
  console.log(variable);
}
