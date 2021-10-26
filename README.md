# template-google-app-script-react
GoogleAppsScriptでReactWebアプリを作るテンプレートです

# 開発の流れ
- src 配下でReact（Webアプリ側）を開発します
- gas 配下のapp.js （GAS側）を開発します
- webpackでhtmlをビルドします（gas配下に作成されます）
- claspでpushします

# 注意点
- HTMLにインラインにJavascriptを挿入するプラグインが不安定です
- package.json内のライブラリバージョンの関係性でしか動作を確認できなかった為、バージョンアップ時は良く検証下さい