# 배포주소

https://wanted-codestates-project-9-nu.vercel.app/

# 실행 설정

1. git clone

```
git clone https://github.com/kyk1211/wanted-codestates-project-9.git
```

2. 필요한 라이브러리 설치

```
npm install
```

3. 실행

```
npm run start
```

# 기술 스택

React, CRA, Emotion/styled, Redux-toolkit, React-query, Typescript

# 구현 기능

## Header

- react-router-dom NavLink를 이용하여 클릭 시 페이지 이동 가능
  <img src="https://user-images.githubusercontent.com/85268135/159871195-326de63c-b42b-4358-8fd3-64fdce23a7eb.gif" alt="" >

## src/pages/Main / 첫 페이지

- 검색창에 검색어 입력 후 enter 또는 버튼을 클릭하면 검색결과 페이지로 이동
  <img src="https://user-images.githubusercontent.com/85268135/159871753-289670b0-5f99-4668-884d-c7b1340c7f1e.gif" alt="" />

## src/page/SearchList / 검색 페이지

- 검색창으로 검색 가능, 검색 결과를 보여주며 pagination을 적용
  <img src="https://user-images.githubusercontent.com/85268135/159873623-b21c6843-003d-479d-9196-3f5af45a385d.gif" alt="" />

* 검색 결과 클릭 시 4개까지 localstorage에 저장 가능
  <img src="https://user-images.githubusercontent.com/85268135/159874344-61509cb0-d834-497f-892c-fc09dc181c77.gif" alt="" >

* react-query를 이용하여 cache 구현, 검색했던 페이지는 로딩없이 바로 결과를 보여줍니다.
  <img src="https://user-images.githubusercontent.com/85268135/159874774-2a230dbd-61ed-49e4-9c2d-da96fe04cf5b.gif" alt="">

## src/pages/MyRepos / 저장된 레포지토리 목록 및 이슈 페이지

- localstorage에 저장된 repository를 보여줍니다.
  <img src="https://user-images.githubusercontent.com/85268135/159875371-c41569d4-d3e3-4aa1-a8a7-e29c5676f8ae.gif" alt="">

* 저장된 repository 클릭 시 해당 repository의 issue를 보여줍니다.
  <img src="https://user-images.githubusercontent.com/85268135/159875747-85646c45-4007-47ee-a46a-cddece3ecfbc.gif" alt="">

* x버튼을 클릭하여 해당 repository를 삭제할 수 있습니다.
  <img src="https://user-images.githubusercontent.com/85268135/159876318-bf38d2c2-3a84-4023-912b-bce0fff71fb8.gif" alt="">

* issue 클릭 시 github의 해당 issue 페이지가 새 창으로 열립니다.
  <img src="https://user-images.githubusercontent.com/85268135/159875936-89634e0d-5543-4940-958b-3f9feb771459.gif" alt="">

* react-query를 이용하여 cache 구현, 검색했던 issue page는 로딩없이 보여줍니다.
  <img src="https://user-images.githubusercontent.com/85268135/159876642-7b840386-67f4-4c93-adc3-c7298417ed7b.gif" alt="">
