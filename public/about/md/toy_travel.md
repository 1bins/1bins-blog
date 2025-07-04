![image](/about/projects/toy_travel_img.jpg)

#### Tech Stack
```
React(Vite), TypeScript, supabase, zustand
```

#### 개발 배경
- 독학으로 익힌 `TypeScript`를 활용해보고자 했다.
- `React`로 프로젝트를 시작할 때 항상 CRA로 작업 했었다. 하지만, 어느날 부터인가 `Vite`를 권장하는 안내 문구가 나왔다. <a href="https://sung-98.tistory.com/113" target="_blank" title="새 탭으로 열기">[참고] CRA vs Vite</a>
- 동료 개발자에게 요새 `github`와 `firebase`보다 `vercel` 배포가 쉽다고 들어 이번 기회를 통해 배포해 보았다.

#### 주요기능
- <a href="https://api.visitkorea.or.kr/" target="_blank" title="새 탭으로 열기">Tour API</a>를 활용한 여행지 즐겨찾기 기능 제작
- 사용자 편의성 제공을 위해 <span style="color: #FF4858">UI 컴포넌트(Toast/Skeleton/Button 등) 직접 개발</span>
- TypeScript를 도입하여 전반적인 프로젝트 개발 및 타입 안정성 확보

#### 돌아보기
- 타입스크립트를 실전에 적용해보면서 느낀 점은, 타입스크립트에는 정답이 하나로 정해져 있지 않다는 것이다. 결국 누가 더 깔끔하고 효율적으로 타입을 설계하느냐가 중요한 것 같다.
  이번 프로젝트에서는 먼저 내가 직접 오류가 나지 않도록 타입을 작성한 뒤, ChatGPT를 활용해 검토받는 방식으로 작업했다. 하지만 내가 작성한 타입은 아직 기초적인 수준에 머물러 있었다.
  ChatGPT 덕분에 “이렇게도 타입을 정의할 수 있구나”라는 새로운 방식을 배우며, 타입스크립트에 대한 이해가 한층 더 깊어질 수 있었다.