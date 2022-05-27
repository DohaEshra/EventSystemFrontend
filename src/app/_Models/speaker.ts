export class Speaker {
    constructor(
        public _id:string,  public Email:string, public UserName:string,
        public password:string, public Address:{city:string, street:string, building:string}
        ){}
}
