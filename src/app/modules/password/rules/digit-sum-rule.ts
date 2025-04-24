import {PasswordRule} from "./password-rule.interface";

export class DigitSumRule implements PasswordRule {
  errorMessage = 'The digits in your password must add up to 25.';

  validate(password: string): boolean {
    const sum = (password.match(/\d/g) || [])
      .map(Number)
      .reduce((acc, val) => acc + val, 0);
    return sum === 25;
  }
}
