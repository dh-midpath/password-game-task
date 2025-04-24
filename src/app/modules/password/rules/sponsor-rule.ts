import {PasswordRule} from "./password-rule.interface";

export class SponsorRule implements PasswordRule {
  errorMessage = 'Your password must include one of our sponsors:';

  private months = [
    'pepsi', 'starbucks', 'shell'
  ];

  validate(password: string): boolean {
    return this.months.some(month =>
      password.toLowerCase().includes(month)
    );
  }
}
