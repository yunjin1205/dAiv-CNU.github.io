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


def build_timeline_chart(colors=None):
    if colors is None:
        colors = ["#fd5f76", "#f3bb44", "#639bc6"]

    now = datetime.now()

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
                'size': "undefined",
                'inverseOrder': False,
                'track': {
                    'show': False,
                },
                'startAngle': 0,
                'endAngle': 300,
                'dataLabels': {
                    'name': {
                        'show': True,
                        'formatter': lambda w: 0
                    },
                    'value': {
                        'show': True,
                        'formatter': lambda w: 0
                    },
                    'total': {
                        'show': True,
                        'label': 'Total',
                        'formatter': lambda w: 0
                    }
                }
            },
        },
        'stroke': {
            'lineCap': "round"
        },
        'colors': colors,
        'series': [100, 100, 80],
        'labels': ["D-Day", "Period", "Result"],
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
