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

    document.getElementsByTagName("title")[0].innerHTML = "Contest | AI Competition[0]";

    for (let element in document.getElementsByTagName("H1")) {
        if (element.innerHTML.includes(".github.io")) element.parentNode.removeChild(element);
    }

    window.onload = function(){
        brython();
    }
</script>

<!-- Page Scripting -->
<script type="text/python">
    from browser import document, window
    console = window.console
    pyprint = print
    print = console.log
</script>
<script type="text/python" src="/dist/src/common/main.py"></script>


<!-- Header -->
<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">
        <h1 class="banner me-auto"><a href="index.html">dAiv</a></h1>
        <nav id="navbar" class="navbar">
            <ul class="m-4 m-lg-0">
                <li><a class="nav-link scrollto active" href="#front">메인</a></li>
                <li><a class="nav-link scrollto" href="#about">소개</a></li>
                <li><a class="nav-link scrollto" href="#team">임원진</a></li>
                <li><a class="nav-link scrollto" href="#programs">프로그램</a></li>
                <li class="contest">
                    <a href="#programs">
                        <span>경진대회</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                    <ul>
                        <li class="dropdown">
                            <a href="#programs">
                                <span>코딩대회</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </a>
                            <ul>
                                <li><a href="/contest/coding/ai_competition%5B0%5D.md">AI Competition[0] (2023-1.5)</a></li>
                                <li><a href="/contest/coding/ai_competition[1].html">AI Competition[1] (2023-2)</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#programs">
                                <span>공모전</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            </a>
                            <ul>
                                <li><a href="#">N/A</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#programs">
                                <span>학술대회</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </a>
                            <ul>
                                <li><a href="#">N/A</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a class="joinus scrollto" href="#contact">가입 신청하기</a></li>
            </ul>
            <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list mobile-nav-toggle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x mobile-nav-toggle hidden" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </i>
        </nav>

    </div>
</header>


<img src="/dist/res/image/index/programs/ai_contest1.png" style="border: 1px solid grey; border-radius: 4px"/>
