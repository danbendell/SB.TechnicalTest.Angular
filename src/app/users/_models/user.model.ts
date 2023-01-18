import * as moment from 'moment';

export class User {
  constructor(user: Partial<User> = {}) {
    Object.assign(this, user);
  }

  public name!: string;
  public age!: number;
  private registered!: string;
  public email!: string;
  public balance!: string;

  public get registeredDate(): Date {
    return moment(this.registered, 'YYYY-MM-DDTHH:mm:ss Z').utc().toDate();
  }

  public resetBalance(): void {
    this.balance = '0';
  }
}
