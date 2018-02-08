export class ConsumerV2Logic {
  baseEvent = 'No events have been fired yet';

  handleBase(event: string) {
    this.baseEvent = event;
  }
}
