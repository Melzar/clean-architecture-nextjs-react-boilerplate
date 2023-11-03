export interface InteractorInterface<A, R> {
  execute(...args: A[]): R;
}
