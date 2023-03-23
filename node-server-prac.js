const http = require("http");
const fs = require("fs");
//이것은 파일을 동적으로 작성하는 것이 아닌, 정적으로 작성된 파일들을 불러오는 클래식 서버 구동 실행문이다. 맨 마지막 listen이 실행될 경우 우리느 서버에 접속할 수 있게 된다.
function serveStaticFile(response, path, contentType, responseCode) {
  //파일 읽기, 비동기적 방식 사용. err가 있을경우 응답 처리, 그외엔 파일 데이터를 매개변수 data에 받는다.
  fs.readFile(path, function(err, data) {
    if(err) {
      //인터넷 서버 에러를 뜻하는 500 코드
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end("500 - Internal Error");
    } else {
      response.writeHead(responseCode, {'ContentType': contentType});
      response.end(data);
    }
  });
}

const server = http.createServer((request, response) => {
  const url = request.url.toLowerCase(); // 소문자로 변환, string의 내장 메서드

  switch (url) { // 조건문이 다양하거나 복잡할 떄에 switch문을 사용함.
    case "/":
      serveStaticFile(response, './index.html', 'text/html', 200);
      break;
    case "/about" :
      serveStaticFile(response, './about.html', 'text/html', 200);
      break;
    case "/contact":
      serveStaticFile(response, './contact.html', 'text/html', 200);
      break;
    case "/style.css" :
      serveStaticFile(response, './style.css', 'text/css', 200);
      break;
    case "/script.js":
      serveStaticFile(response, './script.js', 'text/javascript', 200);
      break;
    //위의 모든 케이스를 확인후, default가 실행. 이것은 맨 위에 있을 경우 실행될 수 있기에 가장 마지막에 둘 것.
    default :
      serveStaticFile(response, './404.html', 'text/html', 200);
      break;
  }
});
//서버를 실행하는 구문, localhost 2080포트로 접속 할 수 있게 해준다. 콜백함수에서는 에러를 매개변수로 받을 수 있어 만일 확인하고 싶을 경우 그에 맞게 작성하면 된다.
server.listen(2080, () => {
  console.log('2080번 포트')
})