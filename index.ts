import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Bash');
  subscriber.next('Leo');
  subscriber.next('Daisy');
});

const observer = {
  next: (value) => console.log(value),
};

//observable$.subscribe(observer);

// if yopu are only interested in handling next notifications, we can simply pass the event handler itself

//observable$.subscribe((value) => console.log(value));

const secondObservable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Bash');
  setTimeout(() => subscriber.next('Leo'), 2000);
  setTimeout(() => subscriber.next('Daisy'), 4000);
});

console.log('subscription 1 starts');
const subscription = secondObservable$.subscribe((value) =>
  console.log('Subscription1: ', value)
);

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 3000);

setTimeout(() => {
  console.log('subscription 2 starts');
  secondObservable$.subscribe((value) => console.log('Subscription2: ', value));
}, 1000);
