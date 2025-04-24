import {PasswordRule} from "./password-rule.interface";

export class RomanNumeralRule implements PasswordRule {
  errorMessage = 'Your password must include a roman numeral.';

  validate(password: string): boolean {
    return /[IVXLCDM]/i.test(password);
  }
}
