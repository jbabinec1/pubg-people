import { MergeMapSubscriber } from 'rxjs/internal/operators/mergeMap';

export interface Player {

    totalkills?: number,
    weeklykills?: number,
    lastmatchkills?: number,
    roadkills?: number,
    headshots?: number,
    assists?: number,
    downs?: number,
    friendly?: number,
    vehicles?: number,
    farthestkill?: number,
    data: any

}
