export class MissingFieldError extends Error {
  constructor(entityName: string) {
    super(`${entityName} is required`);
    this.name = "MissingFieldError";
  }
}