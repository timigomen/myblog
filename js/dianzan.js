function GetUrlRelativePath(){var e=document.location.toString().split("//"),t=e[1].indexOf("/"),n=e[1].substring(t);return-1!=n.indexOf("?")&&(n=n.split("?")[0]),n}function setCount(){var e=[],t=[],n=[];new AV.Query("dianzan").find().then((a=>{for(i=a.length-1;i>=0;i--)e.push(a[i].attributes.count),t.push(a[i].attributes.href),n.push(a[i].id);index=t.indexOf(GetUrlRelativePath()),console.log(e[index]),void 0===e[index]?document.getElementsByClassName("dianzan-count")[0].innerText="0":document.getElementsByClassName("dianzan-count")[0].innerText=e[index]+1}))}function dianzan(){try{var e=[],t=[],n=[];const a=new AV.Query("dianzan");a.find().then((s=>{for(i=s.length-1;i>=0;i--)e.push(s[i].attributes.count),t.push(s[i].attributes.href),n.push(s[i].id);if(-1==t.indexOf(GetUrlRelativePath())){console.log(1);const e=new(AV.Object.extend("dianzan"));e.set("href",GetUrlRelativePath()),e.set("count",1),e.save()}else index=t.indexOf(GetUrlRelativePath()),console.log(n[index]),a.get(n[index]).then((t=>{t.set("count",e[index]+1),t.save()}));setCount()}))}catch(e){const t=new(AV.Object.extend("dianzan"));t.set("href",GetUrlRelativePath()),t.set("count",1),t.save()}}$(document).ready((function(){const{Query:e,User:t}=AV;AV.init({appId:"46grJgMRDsM3ka2iqH8E7EpI-MdYXbMMI",appKey:"YeAULPXqWSqgSH6HlRxNbrOR",serverURL:"https://apiforktgce.nuoxnuo.eu.org"});var n=[],a=[],s=[];new AV.Query("dianzan").find().then((e=>{for(i=e.length-1;i>=0;i--)n.push(e[i].attributes.count),a.push(e[i].attributes.href),s.push(e[i].id);index=a.indexOf(GetUrlRelativePath()),console.log(n[index]),void 0===n[index]?document.getElementsByClassName("dianzan-count")[0].innerText="0":document.getElementsByClassName("dianzan-count")[0].innerText=n[index]}))}));