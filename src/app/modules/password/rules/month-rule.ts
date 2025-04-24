import {PasswordRule} from "./password-rule.interface";

export class MonthRule implements PasswordRule {
  errorMessage = 'Your password must include a month of the year.';

  private months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];

  validate(password: string): boolean {
    return this.months.some(month =>
      password.toLowerCase().includes(month)
    );
  }
}
