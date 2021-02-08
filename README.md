# Vue.js로 만든 Poke-App
## 1. 개발 환경
Vue.js 

## 2. 디렉토리 
    src
    ├── api                              
    ├── components                         
        └── common 
    ├── router
    ├── views   
    └── store   

## 3. 컴포넌트 구성                 
#### 메인 / poke list 
![list_component](https://user-images.githubusercontent.com/42309919/107169610-a9ba4300-6a01-11eb-912c-1e8fa17c5a41.PNG)
#### scrap list 
![scrap_component](https://user-images.githubusercontent.com/42309919/107169612-aaeb7000-6a01-11eb-9903-d86998efbf4e.PNG)
#### not found 
![notfoun_component](https://user-images.githubusercontent.com/42309919/107169613-aaeb7000-6a01-11eb-8e81-d42eb72586a8.PNG)
#### PokeSearch
포켓몬 검색 컴포넌트               
기능 : 검색 
#### NavBar
메뉴 컴포넌트 
기능 : 페이지 이동 
#### PokeList
포켓몬 리스트 컴포넌트                
기능 : 페이지로드 (포켓몬 리스트, 스크랩 리스트)               
#### Poke
포켓몬 리스트에 노출되는 포켓몬별 컴포넌트               
기능 : data 노출, 스크랩             
#### PokeDetail
포켓몬 상세정보 컴포넌트                
기능 : data 노출                
#### common/Modal 
검색시 유효성 체크, 상세 정보 노출에서 Modal 사용               
                    
## 4. 페이지 구성      
- Poke List: 포켓몬 리스트 노출
- Scrap List: 스크랩 리스트 노출 
- else : 404 not found 페이지 노출 
                    
## 5. localStorage 
스크랩한 것만 모아보기시(SHOW SCRAP LIST) API 통신을 줄이고자 id, name을 localStorage 에 저장                  
구분값 scraplist.id           
### 수정전
- id만 저장하여 스크랩 리스트 로드시, api 통신하여 스크랩된 내용만 노출하려 하였으나 ex) id = 100 인 포켓몬을 위해 여러번 api 통신을 해야하는 문제점 발생            
### 수정후 
- 리스트 API통신시 가져오는 값은 id, name 두가지이기 때문에 스크랩을 위한 api통신은 필요 없다고 판단. id, name을 저장하여 localstorage 에서 리스트를 추출하여 불필요한 API 통신을 하지 않고, 사용자가 설정한 순서대로 스크랩 내용 노출.          
### localStorage 구조 
![localStorage](https://user-images.githubusercontent.com/42309919/106082180-8d92e800-615d-11eb-82fe-aaeb3f68f1f5.PNG)                                        

## 6. 기능
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
### 5. 리스트       
- Poke List: 포켓몬 리스트 노출
- Scrap List: 스크랩 리스트 노출 

## 7. 결과 화면
#### 메인화면 및 포켓몬 리스트 페이지 화면              
![list](https://user-images.githubusercontent.com/42309919/107169032-3b28b580-6a00-11eb-8187-66aa0dbc3186.PNG)

#### 스크랩 리스트 페이지 화면             
![scrap](https://user-images.githubusercontent.com/42309919/107169037-3d8b0f80-6a00-11eb-99eb-60297550814c.PNG)       

#### 404 not found 페이지 화면 
![not found](https://user-images.githubusercontent.com/42309919/107169038-3d8b0f80-6a00-11eb-9da7-b45b58926e09.PNG)
             
#### 포켓몬 상세 정보 결과 화면 - 포켓몬별 type에 따라 배경색 다르게 노출              
![PokeDetail](https://user-images.githubusercontent.com/42309919/106082181-8d92e800-615d-11eb-8b59-a80570585c6f.PNG)   
![PokeDetail5](https://user-images.githubusercontent.com/42309919/106097736-30a62a80-617b-11eb-9265-8711c387b336.PNG)
![PokeDetail2](https://user-images.githubusercontent.com/42309919/106097739-31d75780-617b-11eb-9be5-75d936f7794c.PNG)
![PokeDetail3](https://user-images.githubusercontent.com/42309919/106097742-31d75780-617b-11eb-93bd-2a45f5e7dbda.PNG)
![PokeDetail4](https://user-images.githubusercontent.com/42309919/106097743-326fee00-617b-11eb-815b-37adab031835.PNG)
             
#### 검색시 유효성 체크 결과 화면 - 모달창 이용              
![error1](https://user-images.githubusercontent.com/42309919/106082176-8c61bb00-615d-11eb-9763-7d8cf050f5c5.PNG)             
![error2](https://user-images.githubusercontent.com/42309919/106082177-8cfa5180-615d-11eb-9192-1011d3ee3823.PNG)             
![error3](https://user-images.githubusercontent.com/42309919/106082179-8cfa5180-615d-11eb-8b24-0cc3c2474753.PNG)
+) 추가                     
![err](https://user-images.githubusercontent.com/42309919/107169039-3e23a600-6a00-11eb-9e11-53f2bbf6e86c.PNG)
