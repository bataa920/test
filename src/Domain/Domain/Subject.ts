import type { Observer } from "./Observer";

export interface Subject<T = any> {
  attach(o: Observer<T>): void;
  detach(o: Observer<T>): void;
  notify(): void;
}
