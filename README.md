## 💬 Polygon-Generative-NFT(prototype)

本レポジトリは Polygon-Generative-NFT の完成版を示したものになります。

以下の手順を実行することで Polygon-Generative-NFT の挙動を確認できます。

### レポジトリのクローン

[こちら](https://github.com/unchain-tech/Polygon-Generative-NFT.git)から Polygon-Generative-NFT をクローンします。

その後下のコマンドを実行することで必要なパッケージをインストールしましょう。

```
yarn
```

## NFT 用の画像を作成

[こちら](https://app.unchain.tech/learn/Polygon-Generative-NFT/ja/1/1/)の section1-lesson1 を参考にしながら python と pip のインストールを完了させましょう。

その後`Generative Art を生成する`を参考にしながら下のコマンドを一番上の階層から実行し、NFT 用の画像を作成しましょう。

```
yarn library generate:NFT
```

その後[こちら](https://app.unchain.tech/learn/Polygon-Generative-NFT/ja/1/2/)の section1-lesson2 を参考にしながら、下のコマンドを実行させることで JSON 形式のファイルを生成しまましょう。

## コントラクトのテスト、デプロイ

まずは packages/contract に自分のウォレットアドレスのプライベートキーと Alchemy の HTTP Key(polygon)を指定しましょう。

`.env`

```
PRIVATE_KEY=POLYGON_URL
API_URL=
```

次に下のコマンドを一番上の階層から実行し、コントラクトの挙動を確認しましょう。

```
yarn contract test
```

では最後にコントラクトのデプロイを下のコマンドを実行することで行なっていきましょう。

```
yarn contract deploy
```

これでコントラクトの準備は終了です。

## フロントの立ち上げ

[こちら](https://app.unchain.tech/learn/Polygon-Generative-NFT/ja/3/2/)の section ３-lesson ２ を参考にしながら環境変数などを設定していきましょう。

全て準備が整ったら、下のコマンドを実行してフロントを立ち上げましょう。

```
yarn client start
```
