export default class ValidationResult {
  success: boolean

  error?: ValidationError

 constructor(error?:ValidationError) {
   this.success = error === undefined
   this.error = error
 }

}
export enum ValidationError{
  empty,
  tooShort,
  tooLong,
}
