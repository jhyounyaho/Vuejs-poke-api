# Vue.js로 만든 Poke-App
## 1. 개발 환경
Vue.js 

## 2. 디렉토리 
    src
    ├── api                              
    ├── components                         
        └── common 
    └── store   

## 3. 컴포넌트 구성                 
![component](https://user-images.githubusercontent.com/42309919/106082175-8c61bb00-615d-11eb-9bbf-c7701fda3586.PNG)
#### PokeSearch
포켓몬 검색 컴포넌트               
기능 : 검색, 포켓몬 상세 내용 노출                
#### PokeList
포켓몬 리스트 컴포넌트                
기능 : 페이지로드                
#### Poke
포켓몬 리스트에 노출되는 포켓몬별 컴포넌트               
기능 : data 노출, 스크랩, 포켓몬 상세 내용 노출                
#### PokeDetail
포켓몬 상세정보 컴포넌트                
기능 : data 노출                
#### common/Modal 
검색시 유효성 체크, 상세 정보 노출에서 Modal 사용               
                                
## 4. localStorage 
스크랩한 것만 모아보기시(SHOW SCRAP LIST) API 통신을 줄이고자 id, name을 localStorage 에 저장                  
구분값 scraplist.id           
### 수정전
- id만 저장하여 스크랩 리스트 로드시, api 통신하여 스크랩된 내용만 노출하려 하였으나 ex) id = 100 인 포켓몬을 위해 여러번 api 통신을 해야하는 문제점 발생            
### 수정후 
- id, name을 저장하여 localstorage 에서 리스트를 추출하여 불필요한 API 통신을 하지 않고, 사용자가 설정한 순서대로 스크랩 내용 노출.          
### localStorage 구조 
![localStorage](https://user-images.githubusercontent.com/42309919/106082180-8d92e800-615d-11eb-82fe-aaeb3f68f1f5.PNG)                                        

## 5. 기능
### 1. 페이지로드          
- 사용자가 스크롤을 진행함에 따라 api 통신하여 다음 페이지의 리스트를 불러옴          
  - 스크랩 리스트일 경우 localStorage에서 데이터 불러옴          
  - 포켓몬 리스트일 경우 외부 API 통신하여 데이터 불러옴          
- 포켓몬 이미지 클릭시 관련 포켓몬 정보가 포켓몬 상세 내용 모달창에 노출
- 스크랩, 포켓몬 리스트 동일하게 로드시 limit = 20 통일  
=> 리스트에 type별 배경 색상을 노출하려 했으나, 오직 type값을 추출하기 위하여 포켓몬 별 추가 api 통신은 불필요하다 판단하여 상세 정보에서만 배경색 노출되도록 수정 
### 2. 검색
- 숫자 검색시 관련 포켓몬 정보 포켓몬 상세 내용 모달창에 노출          
- 유효성 검사 결과 모달창에서 error 내용 노출           
  - 빈값 여부, 0, 숫자 여부           
### 3. 포켓몬 상세 정보
- 모달창에서 상세 정보 노출           
- 노출 data          
  - 이미지, 이름, ID, 키, 몸무게
- 각 포켓몬별 type에 맞는 배경색상 노출           
### 4. 스크랩           
- 포켓몬 리스트에서 하트모양 스크랩 기능 노출           
  - 스크랩된 포켓몬 : red            
  - 스크랩되지 않은 포켓몬 : black         
- 클릭시 스크랩 <-> !스크랩 변경 
### 5. 스크랩 모아보기           
- SHOW SCRAP LIST 클릭시 현재 리스트 리셋 후 스크랩 <-> 포켓몬 리스트 노출          
  - 스크랩 리스트 : red          
  - 포켓몬 리스트 : black            

## 6. 결과 화면
메인화면 및 포켓몬 리스트 결과 화면              
![pokeList](https://user-images.githubusercontent.com/42309919/106082183-8e2b7e80-615d-11eb-9893-4c42fa090286.PNG) 
             
스크랩 리스트 결과 화면             
![scrapList](https://user-images.githubusercontent.com/42309919/106082172-8b308e00-615d-11eb-83b3-641359702553.PNG)             
             
포켓몬 상세 정보 결과 화면 - 포켓몬별 type에 따라 배경색 다르게 노출              
![PokeDetail](https://user-images.githubusercontent.com/42309919/106082181-8d92e800-615d-11eb-8b59-a80570585c6f.PNG)   
![PokeDetail5](https://user-images.githubusercontent.com/42309919/106097736-30a62a80-617b-11eb-9265-8711c387b336.PNG)
![PokeDetail2](https://user-images.githubusercontent.com/42309919/106097739-31d75780-617b-11eb-9be5-75d936f7794c.PNG)
![PokeDetail3](https://user-images.githubusercontent.com/42309919/106097742-31d75780-617b-11eb-93bd-2a45f5e7dbda.PNG)
![PokeDetail4](https://user-images.githubusercontent.com/42309919/106097743-326fee00-617b-11eb-815b-37adab031835.PNG)
             
검색시 유효성 체크 결과 화면 - 모달창 이용              
![error1](https://user-images.githubusercontent.com/42309919/106082176-8c61bb00-615d-11eb-9763-7d8cf050f5c5.PNG)             
![error2](https://user-images.githubusercontent.com/42309919/106082177-8cfa5180-615d-11eb-9192-1011d3ee3823.PNG)             
![error3](https://user-images.githubusercontent.com/42309919/106082179-8cfa5180-615d-11eb-8b24-0cc3c2474753.PNG)             
