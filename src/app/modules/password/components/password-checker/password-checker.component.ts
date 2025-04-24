import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {PasswordRuleService} from '../../services/password-rule.service';
import {PasswordRule} from "../../rules/password-rule.interface";

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.scss']
})
export class PasswordCheckerComponent implements OnInit {
  password = new FormControl('');
  results: { rule: PasswordRule, valid: boolean }[] = [];
  revealedRules: Set<number> = new Set();

  constructor(private passwordService: PasswordRuleService) {
  }

  ngOnInit() {
    this.password.valueChanges.subscribe(value => {
      const validations = this.passwordService.validate(value ?? '');

      for (let i = 0; i < validations.length; i++) {
        const {rule, valid} = validations[i];

        if (this.revealedRules.has(i)) continue;

        const previousValid = Array.from(this.revealedRules).every(
          index => validations[index].valid
        );

        if (previousValid) {
          this.revealedRules.add(i);
        }

        break;
      }

      this.results = validations
        .map((v, i) => ({...v, index: i}))
        .filter(v => this.revealedRules.has(v.index));
    });

  }
}
