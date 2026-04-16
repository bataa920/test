import { Observer } from "../../Domain/Domain/Observer";

export class WebDisplay implements Observer<number> {
  constructor() {}

  update(temp: number): void {
    console.log(`Вэб дэлгэц: ${temp}°C`);
  }
}
