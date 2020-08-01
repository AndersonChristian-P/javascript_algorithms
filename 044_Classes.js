class HospitalEmployee {
  constructor(name) {  // the constructor() method is a special method for creating and initializing an object created with a class
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {  //extends makes the methods of the HospitalEmployee class available inside the Nurse class
  constructor(name, certifications) {  // when you create a new Nurse object, it accepts 2 arguments "name" and "certifications"
    super(name);  // super() calls the constructor of the parent class. In this case, "super(name)" passes the "name" argument of the Nurse class to the HospitalEmployee class. When the "HospitalEmployee" constructor runs, it sets "this._name = name;" for new "Nurse" instances
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays);  // returns 15

nurseOlynyk.addCertification('Genetics');

console.log(nurseOlynyk.certifications);  // returns ['Trauma', 'Pediatrics', 'Genetics']