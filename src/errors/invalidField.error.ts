export class InvalidFieldError extends Error {
  constructor(entityName: string) {
    super(`${entityName} is invalid`);
    this.name = "InvalidFieldError";
  }
}