## getStaticPaths getStaticProps を使わずに next build && next export した場合

動的ルートは `tags/[name].html` のような静的ファイルとして吐き出されるので、
amplify などにデプロイした場合は amplify 側に amplifyRedirects.json に書いたようなリダイレクト設定が必要になる。
