// グローバルな CSS ファイルを読み込む

// App コンポーネントは、すべてのページに共通するトップレベルのコンポーネントです。
// たとえば、ページ間を移動するときに状態（state）を保持するために App コンポーネントを使用することができます。

// _app.js を追加したときは開発サーバを再起動する必要があります。

import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}