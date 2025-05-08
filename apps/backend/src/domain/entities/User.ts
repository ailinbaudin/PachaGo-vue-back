export class User {
  constructor(public id: string, public name: string) {
    if (!name) throw new Error('Name is required');
  }
}
