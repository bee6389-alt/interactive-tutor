# GitHub Pages 靜態發布包

這個資料夾是給 GitHub Pages 使用的靜態版網站。它不需要 Firebase Blaze，也不需要 Firebase Functions。

## 發布方式

1. 在 GitHub 建立一個新的 repository。
2. 把本資料夾內容上傳到 repository。
3. 到 repository 的 `Settings` -> `Pages`。
4. Source 選 `Deploy from a branch`。
5. Branch 選 `main`，Folder 選 `/docs`。
6. 儲存後等待 GitHub Pages 產生網址。

## 目前可用功能

- 總入口首頁。
- 基礎電學家教。
- 電子學家教。
- YouTube 概念影片。
- 題庫、統測型題、錯題回補。
- iPad 電子筆手寫草稿區。

## 限制

GitHub Pages 是靜態網站，不能安全保存 `GROQ_API_KEY`，所以此版本預設不啟用 Groq 手寫自動辨識。

若之後要啟用 Groq 判讀，需要另外準備後端，例如 Cloudflare Workers、Vercel Functions、Netlify Functions 或 Firebase Functions，並在前端設定：

```js
window.HANDWRITING_ANALYSIS_ENDPOINT = "https://你的後端網址/api/analyze-handwriting";
```
