[webアプリ版](https://github.com/kuniatsu/whipLash)をスマホアプリとしてリリースするためのリポジトリ
issuesなどは[webアプリ版](https://github.com/kuniatsu/whipLash)側で一緒に管理している。


cordovaのplatformsを確認する
```
mbp:whipLash_todo kuniatsu$ cordova platforms ls
Installed platforms:
  
Available platforms: 
  android ^8.0.0
  browser ^6.0.0
  electron ^1.0.0
  ios ^5.0.0
  osx ^5.0.0
  windows ^7.0.0
mbp:whipLash_todo kuniatsu$ 
```

iosとandroidのplatformsを追加する。
```
$ cordova platform add android
$ cordova platform add ios
$ cordova platforms ls
Installed platforms:
  android 8.1.0
  ios 5.1.1
Available platforms: 
  browser ^6.0.0
  electron ^1.0.0
  osx ^5.0.0
  windows ^7.0.0
```


アプリをbuildする

```
$ cordova build
$ cordova build ios
$ cordova build android
```

Cordovaのエミュレータで実行
```
# ios-simが入ってないとエラーが出る
$ cordova emulate ios # ios-simが入ってないとエラーが出る

# Androidはできない。$ cordova emulate androidはerrorとなる。

```

