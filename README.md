# 프로젝트 소개
Etsy 웹 사이트 클론 코딩

## 💻 Demo
![etsy-full-sequence](https://user-images.githubusercontent.com/80020227/155748306-a572b280-91b6-469c-9801-b1973f0fc347.gif)

[link] http://clonedetsy.s3-website.ap-northeast-2.amazonaws.com/

##### 실제 웹 사이트 https://www.etsy.com/

## 🛠️ 기술 스택

| 분류 | 기술 |
| --- | --- |
| 언어 | TS |
| 라이브러리/프레임워크 | React |
| CSS | Styled-components |
| 전역 상태 관리 | Context api |
| 데이터 fetching | swr |
| ETC | ESlint, Prettier |
| Third-party lib | swiper |
| 배포 | amazon s3 (github actions 자동 배포) |

## 📄 페이지
- 메인 페이지
- 상세 페이지
- 장바구니

## 👨‍💻 구현 기능
- 디테일 페이지 슬라이드 기능
- 장바구니 기능
  - 디테일 페이지에서 상품 옵션 선택 후 장바구니에 추가
  - 장바구니 페이지에서 상품 제거, 수량 수정

## 📂 폴더 구조
```
src
├── components
│   ├── BgAnimatedButton
│   ├── SizeAnimatedButton
│   ├── Header
│   ├── Footer
│   ├── FiveStars
│   ├── Favorite
│   ├── TabMenu
│   └── ToolTipTemplate
├── pages
│   ├── Main
│   │   ├── components
│   │   ├── hooks
│   │   │   ├── useCategoryData.ts
│   │   │   └── useUniqueList.ts
│   │   ├── sections
│   │   │   ├── CircleCategory
│   │   │   └── UniqueList
│   │   ├── index.ts
│   │   ├── Main.style.ts
│   │   └── Main.tsx
│   ├── Detail
│   └── Cart
├── constants
├── contexts
├── hooks
├── icons
├── routes
├── styles
├── utils
├── types
├── App.tsx
└── index.ts
```

---

## 👨‍🏫 사용 방법

1. 메인 페이지에서 디테일 페이지로 이동
![etsy-main to detail](https://user-images.githubusercontent.com/80020227/155747461-40b9aa0e-2dfb-4b07-84e0-dc3ed86869c9.gif)

2. 디테일 페이지 사진 확인(슬라이더)
![etsy-detail swiper](https://user-images.githubusercontent.com/80020227/155747481-a8208e98-ff1a-4d4b-9500-00c2b545603c.gif)

3. 디테일 페이지에서 옵션 선택 후 장바구니 페이지로 이동
![etsy-detail select options](https://user-images.githubusercontent.com/80020227/155747492-280fc107-51c3-486e-84d3-38cd993b37be.gif)

4. 장바구니 페이지에서 수량 선택 후 금액 계산
![etsy-cart select qty](https://user-images.githubusercontent.com/80020227/155747506-2ac4a0a2-ecf6-4fb7-b73b-5bb3540a8c22.gif)


## 👨‍💻 개발 인원
1인

## ⌛ 개발 기간
2022.02.07 ~ 2022.02.18 (2주)
