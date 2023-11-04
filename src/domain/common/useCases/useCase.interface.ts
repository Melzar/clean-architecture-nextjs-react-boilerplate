export interface IUseCase<A, R> {
  execute(...args: A[]): R;
}
