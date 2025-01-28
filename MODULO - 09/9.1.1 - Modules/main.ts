import { EmailValidator, ZipCodeValidator} from "./validators"

let email = `matheus@email.com`
let validator = new EmailValidator()
let result = validator.isValid(email)

console.log(`o email: ${email} é valido ${result}`)

let validator2 = new ZipCodeValidator
let result2 = validator2.isValid(`12345`)
console.log(`O CPF e valido? ${result2}`)