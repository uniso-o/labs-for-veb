function w1() {
  window.open("", "", "width=200,height=200,toolbar=no,menubar=no,status=yes,location=no,scrollbars=yes,resizable=yes");
}

function w2() {
  window.open("", "", "width=400,height=400,toolbar=yes,menubar=yes,status=yes,location=no,scrollbars=no,resizable=yes");
}

function ss() {
  window.location.href = "index1.html"; 
}
function nazad() {
  window.history.back();
}

function vvv() {
  let vvv = window.innerHeight;
  alert("Высота окна браузера: " + vvv + "px");
}


function infa() {
  navigator.saysWho = (() => {
    const { userAgent } = navigator
    let match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
    let temp
  
    if (/trident/i.test(match[1])) {
      temp = /\brv[ :]+(\d+)/g.exec(userAgent) || []
  
      return `IE ${temp[1] || ''}`
    }
  
    if (match[1] === 'Chrome') {
      temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/)
  
      if (temp !== null) {
        return temp.slice(1).join(' ').replace('OPR', 'Opera')
      }
  
      temp = userAgent.match(/\b(Edg)\/(\d+)/)
  
      if (temp !== null) {
        return temp.slice(1).join(' ').replace('Edg', 'Edge (Chromium)')
      }
    }
  
    match = match[2] ? [ match[1], match[2] ] : [ navigator.appName, navigator.appVersion, '-?' ]
    temp = userAgent.match(/version\/(\d+)/i)
  
    if (temp !== null) {
      match.splice(1, 1, temp[1])
    }
  
    return match.join(' ')
  })()

  document.write("Браузер: " + navigator.saysWho + "<br>");
  document.write("Язык браузера: " + navigator.language + "<br>");
  document.write("Доступно или не доступно использование cookie файлов в браузере: " + navigator.cookieEnabled + "<br>");
  document.write("Высота браузера: " + window.innerHeight + "px <br>");
  document.write("Ширина браузера: " + window.innerWidth + "px <br>");
}

setInterval(infa, 10000);