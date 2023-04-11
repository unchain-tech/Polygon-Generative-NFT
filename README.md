👋 はじめに
---

`generative-nft-library` リポジトリは、Generative Art NFT を作成するためのライブラリです。

NFT アバターやコレクターズアイテムを作成する目的で開発され、[Scrappy Squirrels](https://www.scrappysquirrels.co/) プロジェクトのアートワークを生成するために使用されました。

今回は、内容を日本語に翻訳するため、独立のリポジトリとして紹介しています。

オリジナルのリポジトリは、[こちら](https://github.com/rounakbanik/generative-art-nft)です。

🐵 generative-nft-library について
-------
### 60種類以下の特徴で100万枚以上の画像を生成可能

本ライブラリを使用することで、特徴量の組み合わせごとに画像を生成することができます。例えば、[Bored Apes](https://boredapeyachtclub.com/#/home) のようなプロジェクトで Generative Art を生成する場合、このライブラリは12億匹以上の異なる猿を生成することができます。

### レアリティの重みの追加

また、このライブラリでは、各特徴の希少性を完全にコントロールできるように、画像生成プロセスを設定することができます。

### NFT に準拠した JSON メタデータの生成
OpenSeaメタデータ要件（ひいては一般的なNFTメタデータ規格）に準拠した、NFTのJSONメタデータを生成する機能が追加されました。

### 初心者でも簡単に使える
このライブラリは、（Pythonなどの）プログラミングの知識がなくても使うことができます。

💻 インストール方法
----

**このリポジトリをあなたのGithubアカウントにフォークしてください**。

**必要なパッケージのインストール**

`pip install Pillow pandas progressbar2` をインストールしましょう。

使用するアセット（画像など）を `assets` フォルダにアップロードし、 `config.py` ファイルを埋めてから、 `python nft.py` を実行します。

JSONメタデータを生成するために、BASE_NAME、BASE_IMAGE_URL、BASE_JSONを `metadata.py` で定義し、`python metadata.py` を実行します。


🐿 Scrappy Squirrels について
----

<img src='squirrels.gif' height="250" width="250" />

本ライブラリは、Scrappy Squirrels Project の一環として作成されました。

Scrappy Squirrels は、イーサリアム・ブロックチェーン上でランダムに生成される 10,000 の NFT コレクションです。
