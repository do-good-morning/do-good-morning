# Team Rules

<br />

## 목차

1. [**Git Rules**](#1)
2. [**Front-end Rules**](#2)
3. [**Back-end Rules**](#3)

<br />

<div id="1" ></div>

## :octocat: Git Rules

&nbsp;&nbsp;깃에 파일을 커밋 전에 꼭 `git status` 명령어를 통해 커밋하길 원하는 파일들만 `Staging area`로 넘어가는 것인지 꼭 확인하고 커밋 해주세요.

> 깃에 지속적으로 커밋을 제외하고 싶은 파일이나 폴더가 있다면 `.gitignore` 파일에 추가 시켜주세요.

## Commit Message Convention

### 1. Commit Message Structure

기본적으로 커밋 메시지는 아래와 같이 제목/본문으로 구성합니다.

```bash
type : subject
```

> 예시) Feat : 로그인 기능 구현

### 2. Commit Type

|   Type   |                내용                |
| :------: | :--------------------------------: |
|   Feat   |          새로운 기능 추가          |
|   Fix    |             버그 수정              |
|  Revise  |          오타, 코드 수정           |
|   Docs   |         문서 작성 및 수정          |
|  Style   |            웹 스타일링             |
| Refactor |           코드 리펙토링            |
|  Chore   | 빌드 업무 수정, 패키지 매니저 수정 |
|   Test   |            테스트 코드             |

<br />

<div id="2"></div>

## :pager: Front-end Rules

## Version

|  목록   |  버전   |
| :-----: | :-----: |
|   npm   | 6.14.14 |
| node.js | 14.17.4 |

## Code Formatting

- **Prettier** default 값으로 통일
- 탭 공백 2칸으로 수정

<br />

<div id="3"></div>

## :satellite: Back-end Rules
