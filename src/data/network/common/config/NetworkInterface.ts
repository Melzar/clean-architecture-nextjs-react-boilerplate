export interface NetworkInterface<C> {
  client: C;
  init: () => void;
}
