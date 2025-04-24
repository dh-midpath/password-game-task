import {PasswordRule} from "./password-rule.interface";

export class SpecialCharRule implements PasswordRule {
  errorMessage = 'Your password must include a special character.';

  validate(password: string): boolean {
    return /[^A-Za-z0-9\s]/.test(password);
  }
}
