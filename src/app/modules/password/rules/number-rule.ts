import {PasswordRule} from "./password-rule.interface";

export class NumberRule implements PasswordRule {
  errorMessage = 'Your password must include an uppercase letter.';

  validate(password: string): boolean {
    return /\d/.test(password);
  }
}
