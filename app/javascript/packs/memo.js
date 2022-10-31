const buildHTML = (XHR) => {
const item = XHR.response.post;
const html = `
  <div class="post">
    <div class="post-date">
      投稿日時：${item.created_at}
    </div>
    <div class="post-content">
      ${item.content}
    </div>
  </div>`;
  return html;
};

function post () {
  const submit = document.getElementById("submit");
  submit.addEventListener('click', (e) => {
    // 要素.addEventListener('イベント名', 関数)
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    // open()メソッドの第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信かどうかをtrue/falseで記述する
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value="";
      // <挿入したい要素名>.insertAdjacentHTML("挿入したい位置", 挿入したいHTML)
      // beforebegin(要素の直前)、afterbegin/beforeend(要素内部の、最初の小要素の直前・直後)、afterend(要素の直後)
    };
  });
};

window.addEventListener('load', post);