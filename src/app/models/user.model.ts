export interface UserModel {
  readonly address:{
    readonly city:string
    readonly street:string
    readonly number:number
    readonly zipcode: string
    readonly geolocation:{
      readonly lat:string
      readonly long:string
    }
  }
  readonly id:number
  readonly email: string
  readonly username:string
  readonly password:string
  readonly name: {
    readonly firstname: string
    readonly lastname: string
  }
  readonly phone: string
}
