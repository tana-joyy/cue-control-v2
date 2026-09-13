# Cue Control 撞球品牌網

> 針對傳統撞球館「不易親近、資訊不透明」的刻板印象，打造明亮、無菸、可線上預約的撞球品牌形象網站。

🔗 **Demo**：https://tana-joyy.github.io/cue-control-v2/

<img width="948" height="533" alt="index" src="https://github.com/user-attachments/assets/4c3b9dc7-71fa-4ac9-8642-2c58c46a3add" />

<img width="945" height="535" alt="reserve" src="https://github.com/user-attachments/assets/ab81f256-4d23-4d8f-9da8-6a59876c21ad" />

<img width="946" height="535" alt="flipCards" src="https://github.com/user-attachments/assets/6a63a492-d8eb-479d-8cce-f067782292ce" />

---

## 功能特色

- 響應式版面設計，支援跨裝置瀏覽（Flexbox / Grid / Media Queries）
- 互動式問題卡片：點擊切換「傳統球館困境」與「Cue Control 解方」內容
- 線上預約流程：場館時段 → 選桌 → 加購餐飲 → 確認付款，四步驟資料串接
- 動態價格試算：依預約時數自動計算球檯總價、訂金、尾款

## 技術棧

`HTML5` `CSS3 (Flexbox / Grid / Media Queries)` `Vanilla JavaScript`

## 專案亮點

**1. 動態價格試算邏輯**
預約時數對應不同的球檯總價、訂金（依時數 × 50 元 / 小時）與尾款金額，透過 JS 依使用者選擇即時運算並更新畫面，而非寫死的靜態價目文字。

**2. 多步驟預約流程的狀態管理**
預約需經過「場館與時段」→「選桌」→「加購餐飲」→「確認付款」四個步驟，以原生 JavaScript 串接跨步驟的使用者選擇資料，確保最終送出的訂單資訊正確一致。

## 專案資訊

- 開發角色：個人專題，獨立完成版面規劃、切版與所有互動功能
- 開發期間：2026/05 - 2026/07（緯育 TibaMe 前端工程師專業技術養成班個人專題）
