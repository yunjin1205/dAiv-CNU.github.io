from browser import document, window, aio, module_init
print, pyprint = module_init(__name__, "contest.coding.shared")


async def set_iframe():
    pushoong = window.frames['pushoong'].document
    psh_req = await window.fetch("https://pushoong.com/ask/7395560693")
    psh_html = (((await psh_req.text())
                .replace("<head>", "<head>"
                                    "<base href=\"https://pushoong.com/\">"
                                    "<link href=\""+window.location.origin+"/dist/res/css/font.css\" rel=\"stylesheet\">")))

    if pushoong:
        pushoong.open()
        pushoong.write(psh_html)
        pushoong.close()

    print(document.getElementById("pushoong"))
    document.getElementById("pushoong").addEventListener("load", lambda x: print("loaded"))
    print("registered")

    print(pushoong.getElementById("fullscreen-overlay"))
    pushoong.getElementById("fullscreen-overlay").style.width = "0%"
    pushoong.getElementById("ask_top_banner_google").remove()
    pushoong.getElementsByClass("ask_wrapper not_host")[0].style = "top: 0px; bottom: 0px;"
    pushoong.getElementsByClass("thumbnail")[0].style = "background-image: url('/dist/res/image/favicon.ico');"
    pushoong.getElementsByClass("attach_border")[0].parentNode.remove()

aio.run(set_iframe())
