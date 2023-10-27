from browser import document, window, aio, module_init
print, pyprint = module_init(__name__, "common.dashboard")
from datetime import datetime


########################################################################################################################
# Timeline Animation
########################################################################################################################
window.Apex = {
    'chart': {
        'foreColor': "#ccc",
        'toolbar': {
            'show': False
        },
    },
    'stroke': {
        'width': 3
    },
    'dataLabels': {
        'enabled': False
    },
    'tooltip': {
        'theme': "dark"
    },
    'grid': {
        'borderColor': "#535A6C",
        'xaxis': {
            'lines': {
                'show': True
            }
        }
    }
}


def build_timeline_chart(timeline, colors=None):
    if colors is None:
        colors = ["#fd5f76", "#f3bb44", "#639bc6"]
    label = ["D-Day", "Period", "Result"]
    data = [0, 0, 0]
    default_label = label[0]

    now = datetime.now()
    appl, start, end, result = timeline
    if now < appl:  # before application startup
        default_label = "대회 준비중..."
    elif now < start:  # after application startup
        pass
    elif now < end:  # after d-day
        pass
    elif now < result:  # before result announcement
        pass
    else:  # after the contest finished
        pass

    def name_formatter(series_name: str, is_total: bool, opts):
        return f"{series_name} {is_total}"

    def value_formatter(val: str, opts):
        print(opts)
        return opts

    width = window.innerWidth

    position = "left"
    vertical_margin = 0
    if width >= 1400:
        legend = 18
        offset = (130, 20)
    elif width >= 1200:
        legend = 15
        offset = (100, 12)
    elif width >= 992:
        legend = 11
        offset = (80, 2)
        vertical_margin = -2
    elif width >= 768:
        legend = 10
        offset = (78, 2)
        vertical_margin = -3
    elif width >= 576:
        legend = 18
        offset = (120, 18)
    else:
        legend = 12
        offset = (0, 6)
        position = "bottom"

    return {
        'chart': {
            'type': "radialBar",
            'redrawOnParentResize': True
        },
        'plotOptions': {
            'radialBar': {
                'size': None,
                'inverseOrder': False,
                'track': {
                    'show': False,
                },
                'startAngle': 0,
                'endAngle': 300,
                'dataLabels': {
                    'name': {
                        'show': True,
                        'formatter': name_formatter
                    },
                    'value': {
                        'show': True,
                        'formatter': value_formatter
                    },
                    'total': {
                        'show': True,
                        'label': "대회 준비중..."
                    },
                    'style': {
                        'fontSize': "14px",
                        'fontWeight': 'bold',
                        'colors': "rgb(255,255,255)"
                    }
                }
            },
        },
        'stroke': {
            'lineCap': "round"
        },
        'colors': colors,
        'series': data,
        'labels': label,
        'legend': {
            'show': True,
            'floating': True,
            'position': position,
            'offsetX': offset[0],
            'offsetY': offset[1],
            'fontSize': f"{legend}px",
            'itemMargin': {
                'vertical': vertical_margin
            },
            'markers': {
                'width': legend,
                'height': legend
            }
        },
        'responsive': [
            {
                'breakpoint': 576,
                'options': {
                    'legend': {
                        'position': "bottom",
                        'offsetX': 0,
                        'offsetY': 6,
                        'fontSize': "12px",
                        'itemMargin': {
                            'vertical': 0
                        },
                        'markers': {
                            'width': 12,
                            'height': 12
                        }
                    }
                }
            }
        ]
    }
