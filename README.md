# Outdoor Expo 2026 — Brand Website

> Next.js 15 · Tailwind CSS · Sanity CMS · Vercel
>
> 마스터 전략 문서: `../Outdoor_Expo_2026_Brand_Website_Relaunch_Playbook_v1.9.docx`
> 디자인 룰: `../design-rules-reference-v1.0.html` + `../design-rules-mobile-reference-v1.0.html`

---

## 🗺 프로젝트 구조

```
outdoor-expo-site/
├── app/                    Next.js App Router 페이지들
│   ├── layout.tsx           전 페이지 공통 레이아웃 (Header + Footer)
│   ├── page.tsx             Home (/)
│   ├── visit/page.tsx       Visit (/visit)
│   ├── tickets/page.tsx     ... (작성 예정)
│   └── globals.css          전역 CSS (8pt 그리드 유틸리티)
├── components/             재사용 컴포넌트
│   ├── Header.tsx           sticky header + 모바일 햄버거 메뉴
│   ├── Footer.tsx           4열 푸터
│   ├── Button.tsx           모든 CTA의 단일 진실원천 (변형: primary/outline-charcoal/outline-white/outline-orange)
│   ├── Eyebrow.tsx          uppercase 라벨
│   ├── Logo.tsx             브랜드 로고 (SVG)
│   └── home/                Home 페이지의 9개 섹션
├── tailwind.config.ts      ⭐ 디자인 시스템 단일 진실원천 (브랜드 색, 타입 스케일, 8pt 그리드)
├── next.config.js           Next.js 설정 (이미지 도메인, 301 리다이렉트)
└── package.json
```

---

## 🚀 처음 한 번 설정하기 (예상 시간 30-45분)

### 1. GitHub 계정 + 레포 만들기 (15분)

**계정 없으시면:**
1. https://github.com 가입 (무료)
2. 우측 상단 + 버튼 → **New repository**
3. Repository name: `outdoor-expo-2026` (또는 원하는 이름)
4. **Private** 선택 (공개 배포 전까지)
5. 다른 옵션은 기본값 그대로, **Create repository** 클릭

**GitHub Desktop 설치:**
1. https://desktop.github.com 다운로드 + 설치
2. 앱 열고 GitHub 계정으로 로그인
3. **File → Add Local Repository** → `outdoor-expo-site/` 폴더 선택
4. "이 폴더는 Git 레포가 아닙니다" 메시지 나오면 → **create a repository** 클릭 → Initialize
5. 좌측 변경사항 보임 → 하단 Summary에 "Initial commit" 입력 → **Commit to main**
6. 상단 **Publish repository** → 위에서 만든 GitHub 레포 선택 → Push

✅ **검증:** GitHub.com 레포 페이지를 새로고침해서 파일들이 보이면 성공.

### 2. Vercel 계정 + 자동 배포 연결 (10분)

1. https://vercel.com 접속 → **Sign Up** → **Continue with GitHub** 선택 (가장 빠름)
2. 권한 승인
3. 대시보드에서 **Add New... → Project**
4. GitHub 레포 목록에서 `outdoor-expo-2026` 선택 → **Import**
5. Framework Preset: **Next.js** 자동 감지됨 ✓
6. 다른 옵션은 기본값 그대로
7. **Deploy** 클릭

→ 약 1-2분 후 배포 완료. `outdoor-expo-2026-xxxx.vercel.app` 같은 URL이 생성됩니다.

✅ **검증:** 그 URL을 열어서 사이트가 보이면 성공. *Home 페이지가 라이브로 보입니다.*

### 3. Sanity CMS 설정 (이후 단계, 지금은 스킵 가능)

Sanity는 Phase 5 (Exhibitor CMS) 작업할 때 셋업합니다. Home 페이지는 Sanity 없이 동작하므로 지금은 위 1·2번까지만 하시면 됩니다.

---

## 🔁 일상 작업 흐름

### 코드 수정이 필요할 때 (Mido는 안 함, Claude가 함)
1. Claude가 워크스페이스에서 파일 수정
2. Mido는 **GitHub Desktop** 열기
3. 좌측에서 변경사항 확인 (어떤 파일이 어떻게 변경됐는지 미리보기)
4. 하단 Summary 입력 (예: "Hero 카피 수정")
5. **Commit to main** 클릭
6. **Push origin** 클릭
7. 자동으로 Vercel이 재배포 (1-2분)

### 콘텐츠 수정만 필요할 때 (Mido가 함, Sanity 셋업 후)
1. Sanity Studio 접속 (별도 URL, Phase 5 셋업 시 안내)
2. Exhibitor / News / Copy 등 수정
3. **Publish** 클릭
4. 자동으로 Vercel이 재배포

---

## 🎨 디자인 시스템 (Tailwind 토큰)

`tailwind.config.ts`가 디자인의 단일 진실원천입니다. 색상, 폰트 크기, 간격을 *여기서만* 변경하세요.

### 사용 가능한 클래스 예시

**색상:**
- `bg-green-500` `text-green-500` — Forest Green 브랜드 색
- `bg-orange-500` `text-orange-500` — Vibrant Orange CTA 색
- `bg-charcoal` `text-charcoal` — 본문 텍스트 색
- `bg-paper` — Off-white 배경
- `bg-sand` — 카드 배경

**간격 (8pt 그리드):**
- `p-1` (8px) · `p-2` (16) · `p-3` (24) · `p-4` (32) · `p-6` (48) · `p-8` (64) · `p-12` (96)
- 일반 CSS의 `padding: 30px` 같은 *그리드에 안 맞는 값은 입력 자체가 거부됩니다*

**타이포그래피:**
- `text-display` — Hero 헤드라인
- `text-h1` `text-h2` `text-h3` `text-h4` — 헤딩
- `text-body-l` `text-body` `text-body-s` — 본문
- `text-eyebrow` `text-label` — UI 라벨

**터치 영역:**
- `h-btn` (48px) `h-btn-lg` (56px) `h-input` (48px) — 모바일 터치 컴플라이언스 자동

---

## 🛠 로컬 개발 (선택 사항)

Mido가 직접 코드 실행해서 확인하고 싶을 때만 필요. *Vercel 프리뷰만 써도 충분합니다.*

```bash
# 1. Node.js 설치: https://nodejs.org (LTS 버전)
# 2. 이 폴더에서 터미널 열기
npm install
npm run dev
# 3. http://localhost:3000 열기
```

---

## 📋 다음 작업 우선순위

1. ✅ Home 페이지 (완료)
2. 🔄 Visit 페이지 — React 변환 진행 예정
3. ⬜ Tickets 페이지
4. ⬜ Exhibit With Us 페이지
5. ⬜ Sanity CMS 셋업 + Exhibitor 디렉토리
6. ⬜ Zones, About, Contact 페이지
7. ⬜ 도메인 연결 (outdoorexpo.co.nz → Vercel)
8. ⬜ 301 리다이렉트 맵 입력 (Phase 2 산출물)

---

## 🆘 문제 발생 시

- **Vercel 빌드 실패:** Vercel 대시보드 → 해당 배포 → **View Build Logs** → 에러 메시지 Claude에 공유
- **로컬 실행 에러:** `node_modules` 폴더 삭제 후 `npm install` 재실행
- **디자인이 깨져 보임:** 브라우저 강제 새로고침 (Cmd/Ctrl + Shift + R)
- **GitHub Desktop에서 충돌:** Pull origin → 다시 Push 시도

---

*Last updated: 2026-05-25 · 빌드한 사람: Claude + Mido*
