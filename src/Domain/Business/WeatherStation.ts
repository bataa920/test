import { Observer} from "../Domain/Observer";
import { Subject } from "../Domain/Subject";

export class WeatherStation implements Subject<number> {
  private observers: Observer<number>[] = [];
  private temperature: number = 0;

  attach(o: Observer<number>): void {
    if (!this.observers.includes(o)) {
      this.observers.push(o);
    }
  }

  detach(o: Observer<number>): void {
    this.observers = this.observers.filter(obs => obs !== o);
  }

  notify(): void {
    for (const o of this.observers) {
      o.update(this.temperature);
    }
  }

  setTemperature(val: number): void {
    console.log(`\n-------------------------\ntemperature soligloo:\n-------------------------`)
    this.temperature = val;
    this.notify();
  }

  getTemperature(): number {
    return this.temperature;
  }
}
