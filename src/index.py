from browser import document, window


########################################################################################################################
# Navigation Bar
########################################################################################################################
navigation = document.getElementsByClassName('nav-link')
navigation_menus = {nav.attributes['href'].value.replace("#", ""): nav for nav in navigation}
header = document.getElementById('header')
navbar = document.getElementById('navbar')
mobile_toggles = document.getElementsByClassName('mobile-nav-toggle')


def scroll_to(section: str):
    offset = header.offsetHeight
    if section:
        pos = document.getElementById(section.replace("#", "")).offsetTop
        window.scrollTo({'top': pos - offset, 'behavior': "smooth"})


def navbar_click(event):
    # fix default location error
    event.preventDefault()

    # set mobile
    if 'navbar-mobile' in navbar.classList:
        navbar.classList.remove('navbar-mobile')
        mobile_toggles[0].classList.toggle('hidden')
        mobile_toggles[1].classList.toggle('hidden')

    # do scroll
    scroll_to(event.target.hash)


def toggle_menu_icon(_):
    navbar.classList.toggle('navbar-mobile')
    mobile_toggles[0].classList.toggle('hidden')
    mobile_toggles[1].classList.toggle('hidden')


def enable_mobile_dropdown(event):
    if 'navbar-mobile' in navbar.classList:
        event.preventDefault()
        event.target.nextElementSibling.classList.toggle('dropdown-active')


def trace_current_scroll(_):
    pos = window.scrollY
    if pos > 100:
        header.classList.add('header-scrolled')
    else:
        header.classList.remove('header-scrolled')
    sections = document.getElementsByTagName('section')
    for sec in sections:
        menu = navigation_menus.get(sec.id, None)
        if menu:
            if sec.offsetTop <= pos+200 <= sec.offsetTop+sec.offsetHeight:
                if 'active' not in menu.classList:
                    menu.classList.add('active')
            else:
                if 'active' in menu.classList:
                    menu.classList.remove('active')


scroll_to(window.location.hash)
for scrll in document.getElementsByClassName('scrollto'):
    scrll.onclick = navbar_click
trace_current_scroll(None)
window.addEventListener('scroll', trace_current_scroll)
for toggle in mobile_toggles:
    toggle.onclick = toggle_menu_icon

contest = navbar.getElementsByClassName('contest')[0]
contest.getElementsByTagName('a')[0].onclick = enable_mobile_dropdown
for dropdown in contest.getElementsByClassName('dropdown'):
    dropdown.getElementsByTagName('a')[0].onclick = enable_mobile_dropdown


########################################################################################################################
# Programs List
########################################################################################################################
def flag_selected_tag(selected):
    for li in document.getElementById('programs_filter').getElementsByClassName('filter-active'):
        li.classList.remove('filter-active')
    selected.classList.add('filter-active')


def change_filter(event):
    filter_value = event.target.attributes['data-filter'].nodeValue
    window.programs_isotope.arrange({'filter': filter_value})
    window.programs_isotope.on('arrangeComplete', lambda _: window.AOS.refresh())
    flag_selected_tag(event.target)


for li in document.getElementById('programs_filter').children:
    li.onclick = change_filter


########################################################################################################################
# Back to Top
########################################################################################################################
back_to_top = document.getElementById("btn-back-to-top")


def show_back_to_top_button(_):
    if window.scrollY > 100:
        back_to_top.classList.add('active')
    else:
        back_to_top.classList.remove('active')


show_back_to_top_button(None)
window.addEventListener('scroll', show_back_to_top_button)
