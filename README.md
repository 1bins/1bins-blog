# NEXT.js로 블로그 만들기
**사용기술**
- `NEXT.js`
- `TypeScript`
- `Zustand`
- `Supabase`
- `SCSS Module`

### V 0.1 `current`
**지원기능**
- blog(user)
  - 메인 페이지 => 준비중, 현재 포트폴리오 홈페이지로 랜딩
  - 블로그 페이지
    - 게시글 리스트 화면
      - 카테고리로 게시글 구분
    - 게시글 view 화면
      - 에디터 read 기능 `react-markdown-preview`
<br><br>
- admin
  - 로그인 화면
  - 게시글 리스트 화면
  - 게시글 작성/수정 화면
    - 에디터 가져오기 => `react-md-editor` `react-markdown-preview`
    - 게시글 삭제 기능
    - 게시글 데이터 저장 => `supabase`