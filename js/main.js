!function() {
  function writeCode(prefix, code, fn) {
    let container = document.querySelector("#code");
    let styleTag = document.querySelector("#styleTag");
    let n = 0;
    let id = setInterval(() => {
      n += 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      if (n >= code.length) {
        window.clearInterval(id);
        //如果fn传入的话 那么就调用对应的回调函数!
        fn && fn.call();
      }
    }, 10);
  }
  let code = `
  /*
   * 先准备皮卡丘的皮!
   */ 
  .preview {
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffe600;
  }
  .wrapper {
    width: 100%;
    height: 165px;
    position: relative;
  }
  
  /*
   * 然后准备画皮卡丘的鼻子! 
   * 
   */
  .nose {
    border-radius: 11px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black 
    transparent 
    transparent 
    transparent;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
  }

  /*
   * 准备画皮卡丘的眼睛! 
   */ 
  .eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
  }
  /*
   * 准备画皮卡丘的眼珠子!
   */ 
  .eye::after {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    border: 1px solid black;
  }
  .eye.left {
    right: 50%;
    margin-right: 99px;
  }
  
  .eye.right {
    left: 50%;
    margin-left: 99px;
  }

  /*
   * 准备画皮卡丘的酒窝! 
   */ 
  .face {
    width: 68px;
    height: 68px;
    background: red;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    top: 85px;
  }
  .face.left {
    right: 50%;
    margin-right: 116px;
  }
  .face.right {
    left: 50%;
    margin-left: 116px;
  }
  /*
   * 准备画皮卡丘的上嘴唇!
   */ 
  .UpperLip {
    height: 20px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top: 50px;
    background: #FFE600;
  }
  .UpperLip.left {
    border-bottom-left-radius: 50px 25px;
    border-top: none;
    border-right: none;
    right: 50%;
    transform: rotate(-15deg);
  }
  .UpperLip.right {
    border-bottom-right-radius: 50px 25px;
    border-top: none;
    border-left: none;
    left: 50%;
    transform: rotate(15deg);
  }
  .LowerLip-wrapper {
    left: 50%;
    position: absolute;
    margin-left: -150px;
    bottom: 0;
    position: absolute;
    height: 110px;
    width: 300px;
    overflow: hidden;
  }
  /*
   * 现在准备画皮卡丘的下嘴唇!
   */
  .LowerLip {
    width: 300px;
    height: 3500px;
    background: #9b000a;
    border: 2px solid black;
    border-radius: 200px/2000px;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }
  .LowerLip::after {
    content: "";
    position: absolute;
    bottom: -20px;
    height: 100px;
    width: 100px;
    background: #ff485f;
    border-radius: 50px;
    left: 50%;
    margin-left: -50px;
  }
   /*
    * 大功告成!
    */
  `;
  writeCode("", code, function() {
    console.log("I Done!");
  });
}.call();
