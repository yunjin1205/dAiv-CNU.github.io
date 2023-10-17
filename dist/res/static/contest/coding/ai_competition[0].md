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

    for element in document.getElementsByTagName("H1"):
        if ".github.io" in element.innerHTML:
            element.parentNode.removeChild(element)
</script>
<script type="text/python" src="/dist/src/common/main.py"></script>



<img src="/dist/res/image/index/programs/ai_contest1.png" style="display: block; border: 1px solid grey; border-radius: 4px"/>
