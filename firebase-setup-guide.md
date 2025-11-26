# Firebase Setup Guide for Snake Game Leaderboard

이 가이드는 전역 순위표를 위한 Firebase Realtime Database 설정 방법을 안내합니다.

## 1단계: Firebase 프로젝트 생성

1. **Firebase Console 접속**
   - [https://console.firebase.google.com/](https://console.firebase.google.com/)에 접속
   - Google 계정으로 로그인

2. **새 프로젝트 생성**
   - "프로젝트 추가" 클릭
   - 프로젝트 이름: `bootkorea-portfolio` (또는 원하는 이름)
   - Google Analytics: 선택사항 (필요 없으면 비활성화 가능)
   - "프로젝트 만들기" 클릭

## 2단계: Realtime Database 활성화

1. **Database 메뉴 이동**
   - 좌측 메뉴에서 "빌드" → "Realtime Database" 선택
   - "데이터베이스 만들기" 클릭

2. **위치 선택**
   - 아시아 지역: `asia-southeast1` 선택 (가장 가까운 지역)
   - "다음" 클릭

3. **보안 규칙 설정**
   - **"잠금 모드로 시작"** 선택
   - "사용 설정" 클릭

4. **보안 규칙 업데이트**
   - Database 콘솔에서 "규칙" 탭 선택
   - 아래 규칙으로 **교체**:

```json
{
  "rules": {
    "snake_scores": {
      ".read": true,
      ".write": true,
      ".indexOn": ["score"],
      "$scoreId": {
        ".validate": "newData.hasChildren(['name', 'score', 'date'])",
        "name": {
          ".validate": "newData.isString() && newData.val().length <= 10"
        },
        "score": {
          ".validate": "newData.isNumber() && newData.val() >= 0"
        },
        "date": {
          ".validate": "newData.isString()"
        }
      }
    }
  }
}
```

   - "게시" 클릭

## 3단계: Firebase 설정 정보 가져오기

1. **프로젝트 설정 이동**
   - 좌측 상단 톱니바퀴 아이콘 → "프로젝트 설정" 클릭

2. **웹 앱 추가**
   - "내 앱" 섹션에서 웹 아이콘(`</>`) 클릭
   - 앱 닉네임: `Snake Game` 입력
   - Firebase Hosting 설정: 체크 해제
   - "앱 등록" 클릭

3. **설정 정보 복사**
   - Firebase SDK 스니펫에서 **"구성"** 탭 선택
   - 다음 정보를 복사해두세요

## 4단계: 환경 변수 설정

프로젝트 루트의 `.env` 파일을 열고 다음 줄을 **추가**하세요:

```bash
# Firebase Configuration for Global Leaderboard
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT_ID.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://YOUR_PROJECT_ID-default-rtdb.asia-southeast1.firebasedatabase.app
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT_ID.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

**중요**: 위의 `YOUR_`로 시작하는 부분을 3단계에서 복사한 실제 값으로 교체하세요!

## 5단계: 설치 및 실행

터미널에서 다음 명령어를 실행하세요:

```bash
npm install
npm run dev
```

## 완료!

이제 게임을 플레이하고 점수를 저장하면:
- ✅ Firebase에 전역 순위가 저장됩니다
- ✅ 모든 사용자가 동일한 순위표를 볼 수 있습니다
- ✅ 실시간으로 순위가 업데이트됩니다

## 문제 해결

### Firebase 연결 실패 시
- 환경 변수가 올바르게 설정되었는지 확인
- Firebase Console에서 Database URL이 정확한지 확인
- 보안 규칙이 올바르게 설정되었는지 확인

### 점수가 저장되지 않을 때
- 개발자 도구 콘솔에서 에러 메시지 확인
- 보안 규칙에서 `.write: true`가 설정되어 있는지 확인

### 로컬 모드 (Firebase 없이 사용)
Firebase 설정 없이도 게임은 정상 작동합니다. 이 경우 localStorage를 사용하여 로컬에만 점수가 저장됩니다.
