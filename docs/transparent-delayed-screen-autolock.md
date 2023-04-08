# Transparent Delayed Screen Autolock

```bash
sudo apt install xtrlock xautolock

xautolock -notify 30 -notifier "notify-send -t 25000 LOCK" -time 5 -locker xtrlock
```
