export interface IScenario<A, R> {
  execute(...args: A[]): R;
}
