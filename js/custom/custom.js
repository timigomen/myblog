"" === GLOBAL_CONFIG_SITE.title.replace("Jayhrn", "") ? document.getElementById("page-name-text").style.display = "none" : document.querySelector("#page-name-text>span").innerHTML = document.title.split(" | Jayhrn")[0];

var $percent = document.querySelector("#nav #hotkey #top-button a.site-page i");
$percent && window.addEventListener("scroll", (function () {
    let e = document.body.scrollHeight || document.documentElement.scrollHeight,
        t = window.innerHeight || document.documentElement.clientHeight;
    $percent.dataset.percent = ((document.body.scrollTop || document.documentElement.scrollTop) / (e - t) * 100).toFixed(0)
}));

function postAddToc () {
  let postContent = document.querySelector('#post>#article-container.post-content')
  let cardToc = document.getElementById('card-toc')
  if (postContent && cardToc) {
    let tocNumber = cardToc.getElementsByClassName('toc-number')
    let tocLink = cardToc.getElementsByClassName('toc-link')
    for (let i = 0; i < tocLink.length; i++) {
      document.getElementById(decodeURIComponent(tocLink[i].attributes.href.value).slice(1)).dataset.toc = tocNumber[i].innerText
    }
  }
}
postAddToc ()


// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

// 切换自定义颜色
var defineColor = localStorage.getItem("blogbg") && localStorage.getItem("blogbg").charAt(0) == '#' ? localStorage.getItem("blogbg") : '#F4D88A';
function changeBgColor() {
  changeBg(document.querySelector("#colors").value);
}

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: 'var(--leonus-blue)',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/mb4.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/mb4.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/mb5.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/mb5.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/mb6.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/mb6.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/mb7.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/mb7.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/mb8.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/mb8.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/mb9.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/mb9.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/mb16.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/mb16.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/mb19.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/mb19.webp)')"></a>
    </div>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/home_bg.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/home_bg.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/dm15.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/dm15.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/dm2.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/dm2.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/dm1.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/dm1.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/dm8.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/dm8.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/dm9.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/dm9.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/dm11.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/dm11.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.ladydaily.com/img/dm12.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.ladydaily.com/img/dm12.webp)')"></a>
    </div>
    
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a> 
    <input type="color" id="colors" href="javascript:;" rel="noopener external nofollow" class="box" autocomplete="on" value="#F4D88A" oninput="changeBgColor()">
    </div>

    <h2 id="随机"><a href="#随机" class="headerlink" title="随机"></a>随机</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.ixiaowai.cn/api/api.php)" class="pimgbox" onclick="changeBg('url(https://api.ixiaowai.cn/api/api.php)')">接口1-动漫</a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.ixiaowai.cn/gqapi/gqapi.php)" class="pimgbox" onclick="changeBg('url(https://api.ixiaowai.cn/gqapi/gqapi.php)')">接口2-风景</a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://api.dujin.org/pic)" class="pimgbox" onclick="changeBg('url(https://api.dujin.org/pic/)')">接口3-动漫</a>
    </div>
`;
}

// 适应窗口大小
function winResize() {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}