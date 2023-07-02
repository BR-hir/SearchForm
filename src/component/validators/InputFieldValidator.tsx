import ValidationResult, { ValidationError } from './ValidationResult'


interface FieldValidator {
  validate:() => ValidationResult
}

export default class InputFieldValidator implements FieldValidator {
  private readonly value: string
  private readonly minLength?: number
  private readonly maxLength?: number


  constructor( value: string, minLength?: number, maxLength?: number) {
    this.value = value
    this.minLength = minLength
    this.maxLength = maxLength
  }

  validate: ()=> ValidationResult = () => {
    if (this.value === undefined || this.value.length === 0){
      return new ValidationResult(ValidationError.empty)
    }
    if (this.minLength && (this.value.length < this.minLength)){
      return new ValidationResult(ValidationError.tooShort)
    }
    if (this.maxLength && (this.value.length < this.maxLength)){
      return new ValidationResult(ValidationError.tooLong)
    }

    return new ValidationResult()
  }
}
