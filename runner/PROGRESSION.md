# progression.mjs contract
Store: add `prog` to the save object. Load: `store.prog=normalizeProg(raw.prog)` (missing => defaults, existing saves untouched). Save it with the rest.
Run start: `tr=createTracker(); fx=effects(store.prog)`. Use fx.magnetSeconds (default 8) instead of the constant 8; fx.startShields (0-2); fx.shoesSeconds, fx.flightSeconds, fx.reviveCost (60 default) for the new powers.
During run: `tr.events(run.drain()); tr.events(fireballs.drain())` (counts coin, jump, slide, magnet/shield pickup, fb-dodge). Gameplay adds: `tr.max('combo',n)`, `tr.add('moving')`, `tr.add('flights')`, `tr.add('revives')`.
Run end (once, win/death/quit): `r=settleRun(store.prog,tr.stats,{won,distance:run.x,daily,dateKey:dateKey(),goalCoins})` then `store.coins+=r.coins; save()`. r.missions lists completed missions to show.
Daily: `info=dailyInfo(dateKey())` => level, mod {speedMul,coinMul,fireMul,noStartShield,lengthMul}, seed; `goalCoins=dailyGoal(info,level.coins.length)`; `dailyStatus(store.prog,key)` => done/streak/best.
UI: `missionViews(prog)`, `UPGRADES`, `upgradeLevel/upgradeCost`, `buyUpgrade(store,id)` (atomic, spends store.coins).
