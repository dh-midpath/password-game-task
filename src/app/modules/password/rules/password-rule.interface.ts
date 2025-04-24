export interface PasswordRule {
  description: string;
  validate(password: string): boolean;
  errorMessage: string;
}
