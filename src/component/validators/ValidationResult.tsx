export default class ValidationResult {

  error?: ValidationError

 constructor(error?:ValidationError) {
   this.error = error
 }

}
export enum ValidationError{
  empty,
  tooShort,
  tooLong,
}
