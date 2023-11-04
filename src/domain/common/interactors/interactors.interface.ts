export interface IInteractor<A, R> {
  execute(...args: A[]): R;
}
