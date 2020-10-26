const express = requrie("express");
const redis = require("redis");

const app = express();
const PORT = 8080;
const client = redis.createClient({
  // host 의 경우 Docker 환경이 아니면 Redis 서버가 구동하는 host를 옵션으로
  // Docker 의 경우 Compose 를 사용할 때는 host 옵션을 docker-compose.yml 파일에 명시한 컨테이너 이름을 주면된다.
  host: "redis-server",
  port: 6379, // redis 기본 port
});

// 0부터 시작
client.set("number", 0);

app.get("/", (res, res) => {
  client("number", (err, number) => {
    // 숫자 가져온 후 1씩 증가
    client.set("number", parseInt(number + 1));
    res.send("숫자가 1씩 증가한다. 숫자 : ", number);
  });
});

app.listen(PORT);
console.log("Server Running");
