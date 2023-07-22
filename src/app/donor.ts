
export class Donor {

    Donor_ID: number;
    firstName: string;
    lastName: string;
    fullName: string;
    NIC: string;
    DOB: string; 
    gender: Gender;
    address: string;
    city: string;
    postalCode: string;
    email: string;
    contactMobile: string;
    contactHome: string;
    bloodGroup: BloodGroup;
    height: number;
    weight: number;
    BMI: number;
    specialConditions: string;
  
    constructor(
      Donor_ID: number,
      firstName: string,
      lastName: string,
      fullName: string,
      NIC: string,
      DOB: string,
      gender: Gender,
      address: string,
      city: string,
      postalCode: string,
      email: string,
      contactMobile: string,
      contactHome: string,
      bloodGroup: BloodGroup,
      height: number,
      weight: number,
      BMI: number,
      specialConditions: string
    ) {
      this.Donor_ID = Donor_ID;
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = fullName;
      this.NIC = NIC;
      this.DOB = DOB;
      this.gender = gender;
      this.address = address;
      this.city = city;
      this.postalCode = postalCode;
      this.email = email;
      this.contactMobile = contactMobile;
      this.contactHome = contactHome;
      this.bloodGroup = bloodGroup;
      this.height = height;
      this.weight = weight;
      this.BMI = BMI;
      this.specialConditions = specialConditions;
    }
}

export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
  }
  
  export enum BloodGroup {
    APositive = 'A+',
    ANegative = 'A-',
    BPositive = 'B+',
    BNegative = 'B-',
    ABPositive = 'AB+',
    ABNegative = 'AB-',
    OPositive = 'O+',
    ONegative = 'O-',
  }
  
