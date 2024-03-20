<!-- Bootstrap Assets -->
<script src="/cdn/bootstrap/5.3.2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
<link href="/cdn/bootstrap/5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">

<!-- Style Setting -->
<link href="/dist/res/css/font.css" rel="stylesheet">
<link href="/dist/res/css/style.css" rel="stylesheet">
<link href="/dist/res/css/color.css" rel="stylesheet">

<!-- Load Js Library -->
<script type="text/javascript" src="/cdn/brython/3.11.3/brython.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="/cdn/brython/3.11.3/brython_stdlib.js" crossorigin="anonymous"></script>
<script type="text/javascript">
    favicon = document.createElement("link");
    favicon.type = "image/ico";
    favicon.rel = "icon";
    favicon.href = "/dist/res/image/favicon.ico";
    document.head.appendChild(favicon);

    document.getElementsByTagName("title")[0].innerHTML = "About Us";

    window.onload = function(){
        brython();
    }
</script>
<script src="/cdn/gsap/3.12.2/gasp.min.js"></script>
<script src="/cdn/CircleType/2.3.1/dist/circletype.min.js"></script>
<script src="/cdn/animated-cursor/anicursor.js"></script>
<link href="/cdn/animated-cursor/anicursor.css" rel="stylesheet">

<!-- Page Scripting -->
<script type="text/python">
    from browser import document, window
    console = window.console
    pyprint = print
    print = console.log

    for element in document.getElementsByTagName("H1"):
        if ".github.io" in element.innerHTML:
            element.parentNode.removeChild(element)
</script>
<script type="text/python" src="/dist/src/common/main.py"></script>


<div style="height: 40px"></div>
## 🔥 dAiv - About Us

<video
    src="/about/introduction.mp4"
    controls
    autoplay
    style="position:absolute;
            left:50%;
            top:50%;
            -webkit-transform:translate(-50%, -50%);
            transform:translate(-50%, -50%);"
    ></video>

<pre>
다이브에서 정기적으로 개최할 AI Competition에 대해서 소개합니다.
:: AI Competition[0]은 프롤로그 대회로, 2023년 여름방학때 개최됩니다.
</pre>
<pre>
앞으로의 정식 대회에도 많은 관심 부탁드립니다!
</pre>
