function post () {
  const submit = document.getElementById("submit");
  submit.addEventListener('click', (e)=>{
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    // open()メソッドの第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信かどうかをtrue/falseで記述する
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load', post);