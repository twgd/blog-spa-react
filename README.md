# 使用 React 開發的 SPA Blog

- https://twgd.github.io/blog-spa-react/
　 　
　
　

## 功能簡介

- Single Page Application
- 首頁顯示最新 10 篇文章
- 文章列表顯示所有文章
- 新增文章
　
　

## 前端技術
- 使用 React 開發
- 使用 React Router 的 HashRouter 實現 Single Page Application
- 使用 `create-react-app` 搭配 `node-sass` 直接編譯 scss
- 使用 create-react-app 開始專案
- 使用 gh-pages 發佈到 Github

### 串接 API

- 使用 axios 串接
- API 格式：
endpoint：https://qootest.com/
使用說明：https://github.com/typicode/json-server

```
POST    /posts {title, author, body} 新增 posts
GET     /posts 取得所有 post
GET     /posts/:id 取得某個 post
DELETE  /posts/:id 刪除 post
PUT     /posts/:id {title, author, body} 更新 post
```