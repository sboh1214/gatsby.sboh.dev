---
title: 'Homebrew Tap으로 패키지 리스트 추가하기 (feat. mongodb 설치)'
date: '2021-01-10'
---

# Homebrew Tap이란?

```bash
❯ brew search mongodb
==> Casks
gcollazo-mongodb                   mongodb-compass-beta               mongodb-compass-readonly           mongodbpreferencepane
mongodb-compass                    mongodb-compass-isolated-edition   mongodb-realm-studio               nosqlbooster-for-mongodb
```

```bash
❯ brew tap mongodb/brew
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> Updated Formulae
Updated 1 formula.

==> Tapping mongodb/brew
Cloning into '/usr/local/Homebrew/Library/Taps/mongodb/homebrew-brew'...
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 504 (delta 0), reused 0 (delta 0), pack-reused 503
Receiving objects: 100% (504/504), 106.55 KiB | 240.00 KiB/s, done.
Resolving deltas: 100% (238/238), done.
Tapped 11 formulae (40 files, 181.9KB).
```

```bash
❯ brew search mongodb
==> Formulae
mongodb/brew/libmongocrypt                     mongodb/brew/mongodb-community@3.2             mongodb/brew/mongodb-community@4.2
mongodb/brew/mongocli                          mongodb/brew/mongodb-community@3.4             mongodb/brew/mongodb-database-tools
mongodb/brew/mongodb-community                 mongodb/brew/mongodb-community@3.6             mongodb/brew/mongosh
mongodb/brew/mongodb-community-shell           mongodb/brew/mongodb-community@4.0
==> Casks
gcollazo-mongodb                   mongodb-compass-beta               mongodb-compass-readonly           mongodbpreferencepane
mongodb-compass                    mongodb-compass-isolated-edition   mongodb-realm-studio               nosqlbooster-for-mongodb
```

```bash
❯ brew install mongodb-community
==> Installing mongodb-community from mongodb/brew
...
==> Caveats
==> mongodb-community
To have launchd start mongodb/brew/mongodb-community now and restart at login:
  brew services start mongodb/brew/mongodb-community
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf
```

```bash
❯ brew services start mongodb-community
Service `mongodb-community` already started, use `brew services restart mongodb-community` to restart.
```
