from browser import document, window
console = window.console
pyprint = print
print = console.log


########################################################################################################################
# AOS Animation
########################################################################################################################
window.AOS.init()


########################################################################################################################
# Programs List
########################################################################################################################
programs_filter = document.getElementById('programs_filter').children


def enable_isotope():
    js_code = """
let programs_container = document.getElementById('programs_container')
if (programs_container) {
    programs_isotope = new Isotope(programs_container, {
        itemSelector: '.programs-item',
        layoutMode: 'masonry'
    });
}
    """
    script_element = document.createElement("script")
    script_element.text = js_code
    document.body.appendChild(script_element)


def flag_selected_tag(selected):
    for li in document.getElementById('programs_filter').getElementsByClassName('filter-active'):
        li.classList.remove('filter-active')
    selected.classList.add('filter-active')


def change_filter(event):
    filter_value = event.currentTarget.dataset.filter
    window.programs_isotope.arrange({'filter': filter_value})
    window.programs_isotope.on('arrangeComplete', lambda _: window.AOS.refresh())
    if 'program-type' in event.currentTarget.classList:
        for fil in programs_filter:
            if filter_value == fil.attributes['data-filter'].nodeValue:
                flag_selected_tag(fil)
                break
    else:
        flag_selected_tag(event.currentTarget)


enable_isotope()
for el in programs_filter + list(document.getElementsByClassName('program-type')):
    el.onclick = change_filter
