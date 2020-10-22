#node 베이스 이미지 사용
FROM node

# WORK Directory 생성
WORKDIR /usr/src/app

# package*json 복사
COPY package*.json ./

# package.json에 설정된 종속성 모듈 설치
RUN npm i

# COPY 명령어 압축 버전(해당 디렉토리의 모든 파일 복사)
COPY ./ ./

# 시작 명령어
CMD ["npm","start"];