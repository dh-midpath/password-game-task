import {Injectable} from '@angular/core';
import {PasswordRule} from "../rules/password-rule.interface";
import {MinLengthRule} from "../rules/min-lenght-rule";

// Import other rules...

@Injectable({
  providedIn: 'root'
})
export class PasswordRuleService {
  private rules: PasswordRule[] = [
    new MinLengthRule(),
    // new NumberRule(),
    // ...
  ];

  getRules(): PasswordRule[] {
    return this.rules;
  }

  validate(password: string): { rule: PasswordRule, valid: boolean }[] {
    return this.rules.map(rule => ({
      rule,
      valid: rule.validate(password)
    }));
  }
}
