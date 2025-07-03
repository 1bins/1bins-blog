#### 주요기능
- 웹 접근성 표준 준수를 위한 시맨틱 태그 마크업 및 스타일링
- 페이지별 SEO 최적화
    -  메타 태그, Open Graph 태그 설정
    - 다국어 SEO를 위한 i18n 연동
```jsx
head() {
    return {
        title: this.$t('seo.about_us.title').toString(),
        meta: [
            { hid: 'og:title', name: 'og:title', property: 'og:title', content: this.$t('seo.about_us.title').toString() },
            { hid: 'og:description', name: 'og:description', property: 'og:description', content: this.$t('seo.about_us.description').toString() },
            { hid: 'description', name: 'description', content: this.$t('seo.about_us.description').toString() },
            { hid: 'keywords', name: 'keywords', content: this.$t('seo.about_us.keywords').toString() }
        ]
    }
},
``` 
- Nuxt환경에서 Vue transition을 활용하여 패럴랙스 애니메이션 구현

#### 결과
- 검색 엔진 유입률 향상 및 사이트 노출 개선
- 시각적 모션 효과로 몰입도와 체류 시간 증가