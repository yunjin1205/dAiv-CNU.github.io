from browser import document, window, aio, module_init
print, pyprint = module_init(__name__, "contest.coding.shared")


########################################################################################################################
# AOS Animation
########################################################################################################################
window.AOS.init()


########################################################################################################################
# QnA
########################################################################################################################
async def set_iframe():
    pushoong = window.frames['pushoong'].document
    psh_req = await window.fetch("https://pushoong.com/ask/7395560693")
    psh_html = ((await psh_req.text()).replace("115px", "0px")
                .replace("//t1.daumcdn.net/kas/static/ba.min.js", "")
                .replace("Kakao.init('4cca00b63eedb801abfc9952db0ee7a3');", "")
                .replace("<head>", "<head>"
                                    "<base href=\"https://pushoong.com/\">"
                                    "<link href=\""+window.location.origin+"/dist/res/css/font.css\" rel=\"stylesheet\">")
                .replace("<body>", "<body style=\"background-color: #fff;\">")
                .replace("<div class=\"container\">", "<div class=\"container\" style=\"background-color: #fff;\">")
                .replace("<div id=\"fullscreen-overlay\">", "<div id=\"fullscreen-overlay-disabled\" style=\"display:none;\">")
                .replace("<div class=\"attach_border\" style=\"", "<div class=\"attach_border\" style=\"display:none;")
                .replace("input_border col", "col mt-1 ml-1\" onclick=\"window.open('https://pushoong.com/ask/7395560693', '_blank');")
                .replace("id=\"ask_send\"", "id=\"ask_send_disabled\""))

    if pushoong:
        pushoong.open()
        pushoong.write(psh_html)
        pushoong.close()

aio.run(set_iframe())
