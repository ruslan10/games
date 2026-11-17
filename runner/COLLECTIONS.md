# Collection integration contract

Files: `collections.mjs`, `tests/collections.mjs`. No engine/UI/progression changes in this patch.

## Store, menus and run start

```js
import * as C from './collections.mjs';
store.collections = C.normalizeCollections(raw?.collections);
const key = Prog.dateKey(); // existing Asia/Jerusalem rollover
const info = C.collectionInfo(store.collections, key);
const marker = C.bestDistance(store.collections, {
  level: current, daily: !!dailyCtx, dateKey: key, zen
});
const pickups = zen ? [] : C.createPickups(run.level, key);
```

`info.word`: `{key,text,letters:[{id,char,index,found}],found,total:4,done,reward:75}`.
Words use Latin capitals. Wrap the word display in `dir="ltr"` in the Hebrew UI.
`info.event`: `{id,key,name:'אורות העיר',symbol:'✦',count,target:30,done,milestones:[{target,coins,claimed}],next}`.
Event is a monthly city collection, not an invented holiday deadline. Dates roll at Jerusalem midnight. There is no random prize or spending.
`info.best` is a copy of the normalized PB maps.

`createPickups` returns 4 letters and 3 city-star tokens in tested existing routes:
`{x,lane,y:.85,id,kind:'letter'|'event',index,value,dateKey,eventKey,taken:false}`.
Place/render at these coordinates. Letter IDs identify positions, not characters, so repeated letters count correctly. Ground routes exclude static obstacles/tunnels/ramps with a 5m margin and both potential moving-car lanes. Fireballs remain normal dynamic hazards. The host should not collect a ground pickup from elevated/flight routes unless its collision height allows it.

## On pickup collision

```js
// Do not set pickup.taken before this call: the module owns it.
const r = C.collectPickup(store.collections, pickup, Prog.dateKey(), {zen});
store.coins += r.coins;
save(); // immediate: preserve partial hunt progress + rewards on pause/reload
if(r.message) toast(r.message);
```

Third parameter MUST be the live current Jerusalem date key, not the run's old key. The pickup carries its original date. Old-run pickups are rejected after midnight (including event tokens, even inside the same month), and cannot erase newer progress.

Return: `{coins,message,wordDone,eventRewards:[{target,coins}]}`.
A letter only advances once per day/index. A completed daily word grants 75 coins once.
Event tokens intentionally accumulate across new runs. The same pickup object is consumed exactly once, and persisted milestone claims prevent re-crediting after reload/new runs. Monthly milestone rewards are 5 tokens = 40 coins, 15 = 90, 30 = 180, maximum 310/month. Once at 30, further event pickups grant nothing. This is an achievement collection, not an unlimited currency faucet.

Do NOT include these rewards in `run.coins`: wallet credit happens immediately. Do not include them in daily challenge coin totals or upgrade coin multipliers. Do not settle/credit them again at bank(). New-run repeat event tokens are intentional; an actual app reload returns to menu and starts a new run.

## On run bank (including quit/death/win)

```js
const pb = C.recordBest(store.collections, {
  level: current, daily: !!dailyCtx, distance: run.x,
  won, dateKey: runStartKey, zen
});
save();
```

PB uses the original run date key so a daily run finishing after midnight cannot become a record for a different daily route. Regular levels and daily date+level routes have independent records. Returns `{newBest,previous,distance}`. Records are whole meters. No coins are issued. Keep the marker distance captured at run start for that entire run. Old saves have no distance record, so the first run intentionally has no invented PB marker. Existing `store.best` stars/coins remain untouched. Daily history is capped at 32 records.

Zen: host should not create pickups, credit currency, advance missions/daily/event progression, unlock levels, or write PB. Defense-in-depth flags reject calls to `collectPickup(...,{zen:true})` and `recordBest(...,{zen:true})`. Existing progression settlement must be separately bypassed by host code.

## Tests

`node tests/collections.mjs`: 15 test groups including 1,680 deterministic generated route configurations, safe ground spacing, partial-day reload, once-only word rewards, fixed event milestone rewards, rollover rejection, repeated-letter identity, zen mutation rejection, old-save preservation and PB partition/retention. Existing `node tests/progression.mjs` passes unchanged.
