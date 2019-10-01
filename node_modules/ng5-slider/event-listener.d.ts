import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
export declare class EventListener {
    eventName: string;
    events: Subject<Event>;
    eventsSubscription: Subscription;
    teardownCallback: () => void;
}
