# このファイルは、コードを正しく実行するために設定しなければなりません。

# 全ての入力画像を 'assets' フォルダに入れるようにしてください。
# 画像の各レイヤー(またはカテゴリ)は、それ自身のフォルダに入れる必要があります。

# CONFIGはオブジェクトの配列で、各オブジェクトはレイヤーを表します。
# これらのレイヤーは順番に並べる必要があります。

# 各レイヤーには、以下を指定する必要があります。
# 1. id: 特定のレイヤーを表す番号
# 2. name: レイヤーの名前。レイヤーイメージが格納されているディレクトリ名と同じである必要はない。
# 3. directory: 特定のレイヤーの特徴を含む assets 内のフォルダー。
# 4. required: 特定のレイヤーが必須(True)またはオプション(False)である場合。最初のレイヤーは常にTrueに設定する必要がある。
# 5. rarity_weights: 形質の希少性分布を表す。3種類の値を取ることができる。
#   - None このレイヤーで定義されているすべての形質のレア度が等しくなる(または共通になる)
#   - "random"。レアリティの重みをランダムに割り当てる。
#   - array: 数値の配列で、各数値が重みを表す。
#       - required が True の場合、この配列はレイヤディレクトリにあるイメージの数と等しくなければ なりません。最初の数値が最初のイメージの重み(アルファベット順)となり, 以降は同じです.
#       - required が False の場合、この配列は 1 にレイヤーディレクトリ内のイメージの数を足した数に等しくなければなりません。最初の数値は、このレイヤーに画像が全くない場合の重み付けです。2番目の数値は、最初の画像の重みを表し、以下同様です。

# 詳しくはREADMEにあるチュートリアルを必ずご覧ください。

CONFIG = [
    {
        'id': 1,
        'name': 'background',
        'directory': 'Background',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 2,
        'name': 'body',
        'directory': 'Body',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 3,
        'name': 'eyes',
        'directory': 'Expressions',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 4,
        'name': 'head_gear',
        'directory': 'Head Gear',
        'required': False,
        'rarity_weights': None,
    },
    {
        'id': 5,
        'name': 'clothes',
        'directory': 'Shirt',
        'required': False,
        'rarity_weights': None,
    },
    {
        'id': 6,
        'name': 'held_item',
        'directory': 'Misc',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 7,
        'name': 'hands',
        'directory': 'Hands',
        'required': True,
        'rarity_weights': None,
    },
    {
        'id': 8,
        'name': 'wristband',
        'directory': 'Wristband',
        'required': False,
        'rarity_weights': None,
    },
]
