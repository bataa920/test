import { Observer } from "../../Domain/Domain/Observer";

export class PhoneDisplay implements Observer<number> {
  constructor() {}

  update(temp: number): void {
    console.log(`Утас дэлгэц: ${temp}°C`);
  }
}
