<img src="https://user-images.githubusercontent.com/40348689/116185242-2edd0a80-a75c-11eb-80ac-f7e63af3798b.png" width="150" height="150" align="right" />

<div align="center">

# NOTI PROJECT REFACTORING

NOTI는 NOTIFY의 줄임말로 사전에 발매정보를 알려주는 알림 서비스를 뜻합니다.


🎥 [NOTI 사이트 바로가기](https://web-noti-frontend-4uvg2mledomxu7.sel3.cloudtype.app/) 
📝 [NOTION 바로가기](https://almond-polish-8af.notion.site/NOTI-PROJECT-5e20b7eb7ab5440085aea01319722ea8) 


</div>

<br />

## 🔨 리팩토링을 하게 된 이유
프로젝트를 기간 내에 끝내고 구현했다는 뿌듯함과 동시에 동작은 하지만 제대로 된 코드를 짠 게 맞는지 계속해서 의문이 생겼습니다. 그 후 ‘리액트를 다루는 기술’ 책과 여러 강의들을 독학으로 공부하다가 진행했던 프로젝트의 코드들이 정말 구현만 되었지 유지 보수하기에 좋지도 않을뿐더러 뒤죽박죽한 이 코드들을 처음 본 사람이 이해할 수 있을까라는 생각이 들었습니다. 
+ 페이지별로 나누어져 구현하다 보니 파일 하나하나가 길어지고 만약 기능을 수정하려면 파일 하나를 다 읽어봐야만 하는 코드였습니다.
+ App 컴포넌트에는 라우트 컴포넌트, 로그인 여부, 제품리스트 상태가 모두 모여 있어 사이즈가 커져 있을 뿐만 아니라 전역 상태도 App를 통해 관리되고 있었습니다.
+ 재사용이 가능한 컴포넌트들도 중복되는 코드들로 작성되어 있었습니다.
+ 백엔드 부분에서도 프로젝트 진행시 여러 종류의 라우트를 만들게 되는데 index.js 파일 하나에 모두 작성이 되어 있어 가독성이 떨어지고 나중에 유지보수도 힘들어 질 수 있다고 판단했습니다.

단순히 구현만 되는 코드가 아닌 유지 보수성을 높이고 이해하기 쉬운 코드를 작성하기 위해 프론트엔드를 맡아서 진행했던 프로젝트를 백엔드 부분도 함께 리팩토링을 진행했습니다.

👉 [리팩토링 이전 NOTI Frontend Github 둘러보기](https://github.com/codestates/noti-client)

## 🎯 프로젝트 소개 및 목적

발매 정보를 알려주는 사이트는 많지만 정보들이 파편화돼 있으며 발매 당일 구매 기회를 놓치는 문제가 많다는 점을 발견하였습니다. 개인의 취향에 따라 꼭 갖고 싶은 아이템 놓치기 않기 위해 발매 정보를 모아 알려주고 관리 할 수 있는 서비스입니다.

저희 프로젝트를 활용한다면 브랜드 및 제품에 따라 여기 저기 사이트를 이동하며 발매 정보를 찾고 기억할 필요 없습니다. 파편화된 발매정보를 한곳에 모아 보기 쉽게 보여주는 기능과 발매 전 날 유저가 발매 정보 및 발매일을 리마인드 할 수 있도록 알림 메시지 전달 기능을 통해 발매정보를 쉽게 확인 할 수 있습니다.

이를 통해 알림 메시지를 통해 유저들은 원하는 제품의 구매 기회를 놓치지 않고 구매 할 수 있습니다.
 

|루트|구현화면|
|:--:|:--:|
| `/` <br> 서비스 소개 <br/>발매정보 리스트|<img src="https://user-images.githubusercontent.com/70868454/220041735-c3a11aee-ff39-4c18-9bdb-650128f60984.gif"  />|
|`/` <br> 검색 기능 </br>|<img src="https://user-images.githubusercontent.com/70868454/220351087-f5189341-df7d-4d83-8554-7dcda52514f1.gif"  />|
| `/login` <br> 로그인 </br> |<img src="https://user-images.githubusercontent.com/70868454/220340136-cd4e3375-536b-48a8-a526-6a2365288a48.gif" />|
|`/register` <br> 회원가입 </br> | <img src="https://user-images.githubusercontent.com/70868454/220340326-0480e242-1ed0-4c10-8881-4d2d3dbd4055.gif"  />|
|`/product/:productId` <br> 제품 상세페이지 </br> | <img src="https://user-images.githubusercontent.com/70868454/220351108-5089fe9c-54a5-4de3-9f5d-a23ca5c4b91a.gif"  />|
|`/user/alarm` <br> 알람리스트 </br>|<img src="https://user-images.githubusercontent.com/70868454/220351142-3714c699-0e4f-4291-a62d-cf040251f9a9.gif"  />|
|`/upload` <br> 관리자 </br> 발매 정보 업로드| <img src="https://user-images.githubusercontent.com/70868454/220351036-d950774d-2d2f-4ebd-a498-db90ae580233.gif"  />|



## ⚙️ 기술 스택

|Front|Back|Deploy
|:--:|:--:|:--:|
|<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Redux Saga-999999?style=flat&logo=Redux-Saga&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Chakra UI-319795?style=flat&logo=Chakra UI&logoColor=white"/> <img src="https://img.shields.io/badge/Framer Motion-0055FF?style=flat&logo=Framer&logoColor=white"/>|<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Koa-33333D?style=flat&logo=Koa&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=white"/>|<img src="https://img.shields.io/badge/cloudtype-black?style=flat"/>



## ⚡ Node, Npm version

+ npm
  + version 8.9.0
+ node
  + version 16
 
## 🏇 설치 및 실행방법 

### Backend
[백엔드 저장소](https://github.com/sungheeyun-bit/noti-backend)를 `git clone` 한 후, 아래 명령어를 실행합니다.

```
$ npm install
$ npm run start
```

### Frontend
이 저장소를 `git clone` 한 후, 아래 명령어를 실행합니다.

```
$ npm install
$ npm run start
```


## 📁 폴더 구조
📂 [프론트엔드 폴더 바로가기](https://almond-polish-8af.notion.site/25912762534b43a190314c1867aad533) <br />
📂 [백엔드 폴더 바로가기](https://almond-polish-8af.notion.site/feat-b53ac06cfe53476d90c8794644340837) 

