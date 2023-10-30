from browser import document, window, aio, module_init
print, pyprint = module_init(__name__, "contest.coding.shared")
from common.dashboard import build_timeline_chart, build_participation_status_chart
from datetime import datetime
import traceback


def parse_timeline_data():
    date_format = "%Y년 %m월 %d일"
    date = lambda d: datetime.strptime(d, date_format).date()

    application_period = document['application_period'].textContent.split(": ")[1]
    contest_period = document['contest_period'].textContent.split(": ")[1]
    result_announcement = document['result_announcement'].textContent.split(": ")[1]

    appl = application_period.split(" (")[0]
    start, end, *_ = contest_period.split(" (")
    end = end.split("~ ")[1]
    result = result_announcement.split(" (")[0]
    timeline = date(appl), date(start), date(end), date(result)
    return timeline


########################################################################################################################
# AOS Animation
########################################################################################################################
window.AOS.init()


########################################################################################################################
# Timeline Animation
########################################################################################################################
try:
    window.ApexCharts.new(document.querySelector("#timeline-radial-bar-chart"),
                          build_timeline_chart(parse_timeline_data())
                          ).render()
except Exception as _:
    traceback.print_exc()


########################################################################################################################
# Participation Status Animation
########################################################################################################################
try:
    chart = document.querySelector("#participants-status-chart")
    if chart.attributes.data.value:
        dataset = list(map(int, chart.attributes.data.value.replace(' ', '').split(',')))
    else:
        dataset = []
        raise NotImplementedError("Please implement other dataset query methods.")

    total_team = sum(dataset)
    count_desc = document.getElementById('participants_count_desc')
    count = document.getElementById('participants_count')
    if count_desc:
        count_desc.innerHTML = count_desc.innerHTML.replace("{participants}", f"{total_team}")
    if count:
        print(count.innerHTML)
        count.innerHTML = count.innerHTML.replace("{participants}", f"{total_team}")

    window.ApexCharts.new(chart,
                          build_participation_status_chart(dataset, parse_timeline_data())
                          ).render()
except Exception as _:
    traceback.print_exc()


########################################################################################################################
# QnA
########################################################################################################################
async def set_iframe():
    pushoong = window.frames['pushoong'].document
    psh_req = await window.fetch(document.getElementsByName("pushoong")[0].attributes.data.value)
    psh_html = ((await psh_req.text()).replace("115px", "0px")
                .replace("//t1.daumcdn.net/kas/static/ba.min.js", "")
                .replace("Kakao.init('4cca00b63eedb801abfc9952db0ee7a3');", "")
                .replace("<head>", "<head>"
                                    "<base href=\"https://pushoong.com/\">"
                                    "<link href=\""+window.location.origin+"/dist/res/css/font.css\" rel=\"stylesheet\">"
                                    "<style>.increase_max_width {max-width: 1000px !important;}</style>")
                .replace("<body>", "<body style=\"background-color: #fff;\">")
                .replace("<div class=\"container\">", "<div class=\"container\" style=\"background-color: #fff;\">")
                .replace("<div id=\"fullscreen-overlay\">", "<div id=\"fullscreen-overlay-disabled\" style=\"display:none;\">")
                .replace("<div class=\"attach_border\" style=\"", "<div class=\"attach_border\" style=\"display:none;")
                .replace("input_border col", "col mt-1 ml-1\" onclick=\"window.open('https://pushoong.com/ask/7395560693', '_blank');")
                .replace("id=\"ask_send\"", "id=\"ask_send_disabled\"")
                .replace("<div class = \"container\">", "<div class = \"increase_max_width container\">")
                .replace("ask_wrapper not_host", "increase_max_width ask_wrapper not_host")
                .replace("ask_title_zone", "increase_max_width ask_title_zone")
                .replace("ask_input_zone", "increase_max_width ask_input_zone"))

    if pushoong:
        pushoong.open()
        pushoong.write(psh_html)
        pushoong.close()

#aio.run(set_iframe())
