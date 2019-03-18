function VehicleFn(make, model) {
  this.make = make;
  this.model = model;

  function getData() {

    // Ok
    this.make;

    // Here's self
    const self = this;

    fetch(/* some Url */)
    .then(function(results) {

      // this is undefined
      console.log(this.make);

      // this works
      console.log(self.make);
    })
  }

  function betterGetData() {
    fetch(/* url */)
    .then(results => console.log(this.make));
  }

}

VehicleFn.prototype.getMake = function() {
  return this.make;
}

class VehicleClass {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getMake() {
    return this.make;
  }
}

const car1 = new VehicleFn('Honda', 'Civic');
const car2 = new VehicleClass('Ford', 'F-150');

car2.getMake();
VehicleClass.prototype.getModel = function() {
  return this.model;
}
car2.getModel();
car1.getModel();
