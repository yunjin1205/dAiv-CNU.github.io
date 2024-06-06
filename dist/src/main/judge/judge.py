import browser
from browser import document, window, aio


def module_init(_id, module_name):
    import sys
    sys.modules[module_name] = sys.modules[_id]
    return window.console.log, print


print, pyprint = module_init(__name__, "judge.judge")
browser.__dict__['module_init'] = module_init


async def insert_template(template_path: str, parent, index: int = -1, oncomplete=lambda: None):
    result = await window.fetch("/dist/res/templates/"+template_path)
    insert_element(await result.text(), parent, index)

    # footer 높이 계산
    #footer_height = document.querySelector('footer').offsetHeight

    # iframe 높이 조정
    #iframe = document.querySelector('.full-screen')
    #iframe.style.height = f"{footer_height}px"

    aio.run(oncomplete())


def insert_element(htmlstr: str, parent, index: int = -1):
    if parent.childNodes.length < index:
        index = parent.childNodes.length
    parent.insertBefore(parse_html(htmlstr), parent.childNodes[index])


def parse_html(htmlstr: str):
    template = document.createElement('template')
    template.innerHTML = htmlstr
    return template.content


async def set_iframe():
    judge = window.frames['online-judge'].document
    judge_url = document.getElementsByName("online-judge")[0].attributes.data.value
    judge_html = await (await window.fetch(judge_url)).text()
    judge_html = judge_html.replace("<head>", f"<head>\n<base href=\"{judge_url}\">\n<link href=\""
                                    + window.location.origin+"/dist/res/css/font.css\" rel=\"stylesheet\">")

    if judge:
        judge.open()
        judge.write(judge_html)
        judge.close()


# Insert Templates
aio.run(insert_template("footer.html", document.body, -1))
