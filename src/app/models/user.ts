export class User {
  constructor(
    public _id: string,
    public email: string,
    public password: string,
    public role: string,
    public gettoken: string
  ) {}
}
