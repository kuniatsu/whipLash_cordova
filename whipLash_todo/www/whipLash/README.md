スマホアプリ版のリポジトリ
https://github.com/kuniatsu/whipLash_cordova



ベータ版
https://whiplash-todo.firebaseapp.com/  

## 効果  
1.モチベーションが上がらない時でも、3分だけなら入りやすい。  
2.一旦初めてしまえばやる気に変わる。  
3.少しやってみると、全体性が見えてタスクの全体性や重要度を判断できる。  
4.時間制限があるので中だるみ、ダラけが発生しない。  
  
  
## 村上さん要望  
1.10分間隔  
2.ランダム(同じものが連続しない)  
3.ランダム(同じものが連続する)  
4.タスク編集  
  
  
  
## 開発  
1.動作しなくなるbug修正  
2.debugのlogレベル設定  
3.JSDoc3の使用  
4.Module.jsに分ける  
5.footer欲しい  
6.AlexaとGoogleHome開発  
7.ionic開発  
  
## Monaca 
Monacaの場合www.index.htmlから始まる必要があるため、
metaのリダイレクトを使って一括管理する。
```
<html>
    <head>
        <meta http-equiv="refresh" content="0;URL=./whipLash/public/index_monaca.html">
    </head>
</html>
```




## プレゼン
タイトル：人を多動にさせるTodo管理アプリ

再生ボタンが付いているTODOリストアプリで、再生ボタンすると制限時間3分で各登録アプリのタスク実行を迫られます。
https://is.gd/VTa0td

・重い腰を上げさせる『けつゲリ効果』
積読などやりたい事でも後回しにする要因の一つは「大きな時間を取られる」事です。積読になる本も本屋では立ち読みしてに買っていたりします。アプリ上の制限時間を見て「3分だけ」なら軽い気持ちでタスクを開始できます。

・思考停止を再起させる『具体化効果』
始めるまで具体的に考えない人でも、始めると「先に〜をしておかないと」「いつまでにやらないといけない」と具体的な手順や方法を考え、具体的になれば実行したくなり「何かをやっている」という感覚を得ます。

・自分を追い込む『夏休み最終日効果』
制限時間残り10秒でカウントダウンが始まります。
キリよく終わらせる為にラストスパートを3分ごとにかけます。

・多動に変わる『欲しがり効果』
制限時間が終わると、「本当はもっと続けたかった」という未練が残り欲しがりになります。

このアプリをフリーミアムで既存のTODOアプリと連携させる時のみ課金で展開を考えています。


## version管理
1.0 とりあえず、AppStor GooglePlayに登録

