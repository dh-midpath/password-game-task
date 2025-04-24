import { PasswordRule } from './password-rule.interface';

export class MinLengthRule implements PasswordRule {
  errorMessage = 'Your password must be at least 5 characters.';

  validate(password: string): boolean {
    return password.length >= 5;
  }
}
