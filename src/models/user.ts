export class UserModel {
  constructor( 
    public uid: string,
    public email: string,
    public name: string,
    public surname: string,
    public fullname: string,
    public imageurl: string
  ) { }
}
