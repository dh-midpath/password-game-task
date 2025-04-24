import {PasswordRule} from "./password-rule.interface";

export class UppercaseRule implements PasswordRule {
  errorMessage = 'Your password must include an uppercase letter.';

  validate(password: string): boolean {
    return /[A-Z]/.test(password);
  }
}
