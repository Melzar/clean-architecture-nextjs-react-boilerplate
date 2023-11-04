export interface INetwork<C> {
  client: C;
  init: () => void;
}
