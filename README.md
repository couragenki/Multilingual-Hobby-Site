# hobby-site

多言語対応したブログやメディアサイトに使えるテンプレートを作成する

昨今の海外需要で海外からも注目が高まっておりそれに向けて他言語対応を行い海外の PV を取りに行く。
2021 年 11 月現在、PV の 7 割が日本である。

### 対応言語

ja,cn,en,ko,th,kw

- 日本語
- 韓国語 `deepl非対応` [代替案のツール](https://www.science.co.jp/nmt/blog/28144/)
- 中国語(繁体字)
- 中国語(簡体字) `deepl非対応`
- 英語
- タイ語 `deepl非対応`

- Nuxt.js
  - nuxt-content
  - Vue-i18n
- Firebase

### 環境構築

1. `npm i`
2. `npm run dev`

### デプロイ

`firebase login` している状態で

1. `npm run generate`
2. `firebase deploy`

## 確認環境

Firebase deploy でこちらにリリースしています

https://hobby-site-510c5.firebaseapp.com/
