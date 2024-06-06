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

    # spacer 높이 조정
    spacer = document.getElementById('footer-spacer')
    if spacer:
        body_height = document.body.offsetHeight
        spacer.style.height = f"calc(100vh - {body_height}px)"

    oncomplete()


def insert_element(htmlstr: str, parent, index: int = -1):
    if parent.childNodes.length < index:
        index = parent.childNodes.length
    parent.insertBefore(parse_html(htmlstr), parent.childNodes[index])


def parse_html(htmlstr: str):
    template = document.createElement('template')
    template.innerHTML = htmlstr
    return template.content


# Insert Templates
aio.run(insert_template("footer.html", document.body, -1))
