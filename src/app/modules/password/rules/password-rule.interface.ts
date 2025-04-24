export interface PasswordRule {
  validate(password: string): boolean;
  errorMessage: string;
}
