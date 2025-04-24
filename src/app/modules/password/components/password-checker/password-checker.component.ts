import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PasswordRuleService } from '../../services/password-rule.service';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
})
export class PasswordCheckerComponent {
  password = new FormControl('');
  results: { rule: any, valid: boolean }[] = [];

  constructor(private passwordService: PasswordRuleService) {
    this.password.valueChanges.subscribe(value => {
      this.results = this.passwordService.validate(value);
    });
  }
}
