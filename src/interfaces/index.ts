// By typing our objects using interfaces we are naming these property types,
// which is the way of defining contracts within your code as well as contracts
// with code outside of your project. Now when we create an object of one of these types
// we are telling the compiler the "shape" of out object, we then know what each property
// is and can do.
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}
