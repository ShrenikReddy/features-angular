
export class Person {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string
  ) {}
}

// Child class
export class User extends Person {
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    public email: string
  ) {
    super(id, firstName, lastName);
  }
}
