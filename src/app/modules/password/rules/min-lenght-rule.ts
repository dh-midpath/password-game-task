import { PasswordRule } from './password-rule.interface';

export class MinLengthRule implements PasswordRule {
  description = 'Password must be at least 5 characters long.';
  errorMessage = 'Must be at least 5 characters.';

  validate(password: string): boolean {
    return password.length >= 5;
  }
}
