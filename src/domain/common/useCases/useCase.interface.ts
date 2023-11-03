export interface UseCaseInterface<A, R> {
  execute(...args: A[]): R;
}
