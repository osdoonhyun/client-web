## Dechive 서버는 비용 문제로 2023.09.23일 이후로 비활성화하였습니다. 
<br>

# ⌨️ [Dechive](https://client-web-dechive.vercel.app/) 
 최근 재택근무자가 늘어나면서, 홈오피스, 데스크테리어에 관한 수요가 증가하고 있습니다. “어떤 장비를 어떻게 세팅해야 할까?” 책상 앞에서 시간을 많이 보내는 사람들이라면 누구나 한 번쯤 해보았을 고민입니다. 
 <br/>
Dechive는 Desk와 Archive를 결합한 용어로, 사용자들이 자신만의 개성 있는 데스크 셋업을 공유할 수 있는 플랫폼입니다. 
<br/>
 사용자들은 자신의 책상 사진을 소개하고 구성한 장비들을 구입한 곳을 공유하고, IT직군 뿐만 아니라, 데스크 셋업에 관심이 많을 직군을 7개로 분류하여 직군별로 어떻게 세팅하는지 공유할 수 있도록 하였습니다.
 팔로우와 팔로위 기능으로 사용자들을 연결하고 게시물에 좋아요를 남겨 취향에 맞는 셋업에 쉽게 접근할 수 있습니다.


<br/>

## 📆 프로젝트 기간

- 2023.04.10 - 2023.05.04

<br/>


## 🛠 기술 스택

### Frontend Tech Stack
![TypeScript](https://img.shields.io/badge/typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![ReactJS](https://img.shields.io/badge/react-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
![NextJS](https://img.shields.io/badge/next-000000.svg?style=for-the-badge&logo=next&logoColor=white)
![Emotion](https://img.shields.io/badge/emotion-61DAFB.svg?style=for-the-badge&logo=emotion&logoColor=white)
![GraphQL](https://img.shields.io/badge/graphql-E10098.svg?style=for-the-badge&logo=graphql&logoColor=white)
![Chakra UI](https://img.shields.io/badge/chakraui-319795.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![Recoil](https://img.shields.io/badge/recoil-3578E5.svg?style=for-the-badge&logo=recoil&logoColor=white)

<br>

### Backend Tech Stack
![TypeScript](https://img.shields.io/badge/typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NestJs](https://img.shields.io/badge/nest.js-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Graphql](https://img.shields.io/badge/graphql-E10098.svg?style=for-the-badge&logo=graphql&logoColor=white)
![Mysql](https://img.shields.io/badge/MYSQL-4479A1?style=for-the-badge&logo=MYSQL&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![GoogleCloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
<br>


## 🏛️ 아키택처
<p align="center" style="color:gray">
<img src="https://cdn.discordapp.com/attachments/1103877631629344821/1104685967098519565/drawio_2.png" width="500"/>
</p>
</br>

<br/>

## 💻 프로토타입
<img width="800" alt="login-image" src="https://github.com/osdoonhyun/selQ-client/assets/87527736/169cfde3-30d1-48db-808c-43507d9cba12">
<img width="800" alt="main-image" src="https://github.com/osdoonhyun/selQ-client/assets/87527736/47370355-f584-4403-9ea6-243638943391">
<img width="800" alt="posting" src="https://github.com/osdoonhyun/selQ-client/assets/87527736/8cca9d8e-e884-49c4-af3b-6ddde5a2d57a">
<img width="800" alt="posting-detail" src="https://github.com/osdoonhyun/selQ-client/assets/87527736/e768005a-19cc-4d73-b547-9b057f012f70">
<img width="800" alt="profile-image" src="https://github.com/osdoonhyun/selQ-client/assets/87527736/92761234-d7ae-44e7-b272-f1ce0062501a">
<img width="800" alt="my-page" src="https://github.com/osdoonhyun/selQ-client/assets/87527736/ed33194f-0d59-45fe-9fea-c00b42601910">


<br/>

<br/>

## 🕹️ 서비스 기능

1. 다른 사용자들의 데스크 셋업을 모아서 제공하는 아카이브 제공
2. IT기기 관련 정보 제공(용도, 가격, 구매처 등)
3. 컴퓨터 용품 및 주변기기 추천
4. 사용자들이 자신의 데스크 셋업을 공유할 수 있는 커뮤니티 제공
5. 직군별로 어떤 장비를 어떻게 세팅하는지 정보 공유
6. 팔로우 / 팔로위 기능으로 비슷한 취향을 가진 유저의 게시물 공유 가능

<br/>

<br/>


## 🪜 브랜치 관리 전략
Git Flow를 사용하여 브랜치를 관리합니다.<br>
JIRA 티켓을 생성합니다. Develop 브랜치에서 Feature 브랜치를 생성합니다.<br>
모든 브랜치는 Pull Request에 리뷰를 진행한 후 merge를 진행합니다.<br>



- main : 배포시 사용합니다. 아직 배포단계에 이르지 않아 Master 브랜치에 내용이 없습니다.<br>
- develop : 완전히 개발이 끝난 부분에 대해서만 Merge를 진행합니다.<br>
- feature : 기능 개발을 진행할 때 사용합니다.<br>
- release : 배포를 준비할 때 사용합니다.<br>
- hotfix : 배포를 진행한 후 발생한 버그를 수정해야 할 때 사용합니다.<br>
<br><br>
<b>브랜치 관리 전략 참고 문헌</b><br>
- [우아한 형제들 기술 블로그](http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html)

<br/>

<br/>


## ✍ 커밋 메세지 규칙

- feat : 새로운 기능 추가
- fix : 버그 수정
- style : 코드 양식 변경
- refactor : 코드 리팩토링
- test : 테스트 코드 수정
- docs : 문서 수정

<br/>


## 🧑‍💻 팀 구성
<table>
   <tr>
     <td colspan='4' align="center">
       <b>Frontend</b>
     </td>
   </tr>
   <tr>
    <td align="center"><b><a href="https://github.com/osdoonhyun">osdoonhyun</a></b></td>
    <td align="center"><b><a href="https://github.com/applepykim">applepykim</a></b></td>
    <td align="center"><b><a href="https://github.com/jinShine">jinShine</a></b></td>
    <td align="center"><b><a href="https://github.com/yrk721">yrk721</a></b></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/osdoonhyun"><img src="https://avatars.githubusercontent.com/u/87527736?v=4" width="80px" /></a></td>
    <td align="center"><a href="https://github.com/applepykim"><img src="https://avatars.githubusercontent.com/u/69972768?v=4" width="80px" /></a></td>
    <td align="center"><a href="https://github.com/jinShine"><img src="https://avatars.githubusercontent.com/u/18066329?v=4" width="80px" /></a>
    <td align="center"><a href="https://github.com/yrk721"><img src="https://avatars.githubusercontent.com/u/114637091?v=4" width="80px" /></a>
  </tr>
</table>

<table>
   <tr>
     <td colspan='2' align="center">
       <b>Backend</b>
     </td>
   </tr>
   <tr>
    <td align="center"><b><a href="https://github.com/sounwoo">sounwoo</a></b></td>
    <td align="center"><b><a href="https://github.com/KyuwonKwon ">KyuwonKwon</a></b></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/sounwoo"><img src="https://avatars.githubusercontent.com/u/105111888?v=4" width="80px" /></a>
    <td align="center"><a href="https://github.com/KyuwonKwon"><img src="https://avatars.githubusercontent.com/u/60686304?v=4" width="80px" /></a></td>
  </tr>
</table>

