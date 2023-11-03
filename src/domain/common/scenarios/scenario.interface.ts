export interface ScenarioInterface<A, R> {
  execute(...args: A[]): R;
}
