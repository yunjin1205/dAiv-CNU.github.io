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
                .replace("<head>", "<head>"
                                    "<base href=\"https://pushoong.com/\">"
                                    "<link href=\""+window.location.origin+"/dist/res/css/font.css\" rel=\"stylesheet\">")
                .replace("<body>", "<body style=\"background-color: #fff;\">")
                .replace("<div class=\"container\">", "<div class=\"container\" style=\"background-color: #fff;\">")
                .replace("<div id=\"fullscreen-overlay\">", "<div id=\"fullscreen-overlay-disabled\" style=\"display:none;\">")
                .replace("<div class=\"attach_border\" style=\"", "<div class=\"attach_border\" style=\"display:none;"))

    if pushoong:
        pushoong.open()
        pushoong.write(psh_html)
        pushoong.close()

aio.run(set_iframe())
