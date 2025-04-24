import {Injectable} from '@angular/core';
import {PasswordRule} from "../rules/password-rule.interface";
import {MinLengthRule} from "../rules/min-lenght-rule";
import {NumberRule} from "../rules/number-rule";
import {UppercaseRule} from "../rules/uppercase-rule";
import {SpecialCharRule} from "../rules/scpecial-character-rule";
import {DigitSumRule} from "../rules/digit-sum-rule";
import {MonthRule} from "../rules/month-rule";
import {RomanNumeralRule} from "../rules/roman-numeral-rule";
import {SponsorRule} from "../rules/sponsor-rule";


@Injectable({providedIn: 'root'})
export class PasswordRuleService {
  private rules: PasswordRule[] = [
    new MinLengthRule(),
    new NumberRule(),
    new UppercaseRule(),
    new SpecialCharRule(),
    new DigitSumRule(),
    new MonthRule(),
    new RomanNumeralRule(),
    new SponsorRule()
  ];

  validate(password: string): { rule: PasswordRule, valid: boolean }[] {
    return this.rules.map(rule => ({
      rule,
      valid: rule.validate(password)
    }));
  }
}
