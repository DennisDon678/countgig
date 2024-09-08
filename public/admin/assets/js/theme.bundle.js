// (() => {
    var q;
var e,
    t = {
        250: () => {},
        444: (e, t, a) => {
            "use strict";
            var o = a(138);
            const n = document.querySelector("#popoverDemo"),
                l = document.querySelector("#offcanvasDemo"),
                r = document.querySelector("#topnav"),
                s = document.querySelector("#topbar"),
                c = document.querySelector("#sidebar"),
                i = document.querySelector("#sidebarSmall"),
                d = document.querySelector("#sidebarUser"),
                u = document.querySelector("#sidebarSmallUser"),
                p = document.querySelector("#sidebarSizeContainer"),
                h = document.querySelectorAll('input[name="navPosition"]'),
                f = document.querySelectorAll('[class^="container"]'),
                m = {
                    showPopover:
                        !localStorage.getItem("dashkitShowPopover") ||
                        localStorage.getItem("dashkitShowPopover"),
                    colorScheme: localStorage.getItem("dashkitColorScheme")
                        ? localStorage.getItem("dashkitColorScheme")
                        : "light",
                    navPosition: localStorage.getItem("dashkitNavPosition")
                        ? localStorage.getItem("dashkitNavPosition")
                        : "sidenav",
                    navColor: localStorage.getItem("dashkitNavColor")
                        ? localStorage.getItem("dashkitNavColor")
                        : "default",
                    sidebarSize: localStorage.getItem("dashkitSidebarSize")
                        ? localStorage.getItem("dashkitSidebarSize")
                        : "base",
                },
                b = p ? new o.UO(p) : null;
            function y(e) {
                "topnav" == e ? b.hide() : b.show();
            }
            function g(e) {
                e && e.setAttribute("style", "display: none !important");
            }
            var k;
            !(function () {
                if (n) {
                    const e =
                            JSON.parse(m.showPopover) &&
                            "base" === m.sidebarSize,
                        t = new o.J2(n, {
                            offset: [0, 16],
                            placement: "top",
                            customClass: "popover-lg d-none d-md-block",
                            trigger: "manual",
                            container: document.getElementById(
                                "popoverDemoContainer"
                            ),
                        });
                    e && t.show(),
                        n.addEventListener("click", function () {
                            e && t.hide(),
                                localStorage.setItem("dashkitShowPopover", !1);
                        });
                }
            })(),
                (function () {
                    const e = window.location.search.substring(1).split("&");
                    for (let t = 0; t < e.length; t++) {
                        const a = e[t].split("="),
                            o = a[0],
                            n = a[1];
                        ("colorScheme" != o &&
                            "navPosition" != o &&
                            "navColor" != o &&
                            "sidebarSize" != o) ||
                            (localStorage.setItem(
                                "dashkit" +
                                    o.charAt(0).toUpperCase() +
                                    o.slice(1),
                                n
                            ),
                            (m[o] = n));
                    }
                })(),
                (function (e) {
                    const t = "light" === e ? "" : "dark";
                    document.documentElement.setAttribute("data-bs-theme", t);
                })(m.colorScheme),
                (function (e) {
                    if (r && s && c && i && d && u)
                        if ("topnav" == e) {
                            g(s), g(c), g(i);
                            for (let e = 0; e < f.length; e++)
                                f[e].classList.remove("container-fluid"),
                                    f[e].classList.add("container");
                        } else if ("combo" == e) {
                            g(r), g(d), g(u);
                            for (let e = 0; e < f.length; e++)
                                f[e].classList.remove("container"),
                                    f[e].classList.add("container-fluid");
                        } else if ("sidenav" == e) {
                            g(r), g(s);
                            for (let e = 0; e < f.length; e++)
                                f[e].classList.remove("container"),
                                    f[e].classList.add("container-fluid");
                        }
                })(m.navPosition),
                (function (e) {
                    if (c && i && r) {
                        const t =
                            "default" === e
                                ? ""
                                : "vibrant" === e
                                ? "vibrant"
                                : "light" === m.colorScheme
                                ? "dark"
                                : "light";
                        c.parentNode.setAttribute("data-bs-theme", t),
                            i.parentNode.setAttribute("data-bs-theme", t),
                            r.parentNode.setAttribute("data-bs-theme", t);
                    }
                })(m.navColor),
                "base" == (k = m.sidebarSize) ? g(i) : "small" == k && g(c),
                l &&
                    (function (e, t, a, o, n) {
                        (e.querySelector(
                            '[name="colorScheme"][value="' + t + '"]'
                        ).checked = !0),
                            (e.querySelector(
                                '[name="navPosition"][value="' + a + '"]'
                            ).checked = !0),
                            (e.querySelector(
                                '[name="navColor"][value="' + o + '"]'
                            ).checked = !0),
                            (e.querySelector(
                                '[name="sidebarSize"][value="' + n + '"]'
                            ).checked = !0);
                    })(
                        l,
                        m.colorScheme,
                        m.navPosition,
                        m.navColor,
                        m.sidebarSize
                    ),
                p && y(m.navPosition),
                (document.body.style.display = "block"),
                l &&
                    (l.addEventListener("submit", function (e) {
                        e.preventDefault(),
                            (function (e) {
                                const t = e.querySelector(
                                        '[name="colorScheme"]:checked'
                                    ).value,
                                    a = e.querySelector(
                                        '[name="navPosition"]:checked'
                                    ).value,
                                    o = e.querySelector(
                                        '[name="navColor"]:checked'
                                    ).value,
                                    n = e.querySelector(
                                        '[name="sidebarSize"]:checked'
                                    ).value;
                                localStorage.setItem("dashkitColorScheme", t),
                                    localStorage.setItem(
                                        "dashkitNavPosition",
                                        a
                                    ),
                                    localStorage.setItem("dashkitNavColor", o),
                                    localStorage.setItem(
                                        "dashkitSidebarSize",
                                        n
                                    ),
                                    (window.location =
                                        window.location.pathname);
                            })(l);
                    }),
                    h.forEach(function (e) {
                        e.parentElement.addEventListener("click", function () {
                            y(e.value);
                        });
                    }));
        },
        328: () => {
            const e = document.querySelectorAll("[data-map]");
            "undefined" != typeof mapboxgl &&
                e.forEach((e) => {
                    const t = {
                        ...(e.dataset.map ? JSON.parse(e.dataset.map) : {}),
                        ...{
                            container: e,
                            style: "mapbox://styles/mapbox/light-v9",
                            scrollZoom: !1,
                            interactive: !1,
                        },
                    };
                    (mapboxgl.accessToken =
                        "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg"),
                        new mapboxgl.Map(t);
                });
        },
        524: (e, t, a) => {
            "use strict";
            var o = a(138),
                n = a(682);
            document.querySelectorAll("[data-autosize]").forEach((e) => {
                (0, n.Z)(e);
            }),
                (window.autosize = n.Z),
                (window.Alert = o.bZ),
                (window.Button = o.zx),
                (window.Carousel = o.lr),
                (window.Collapse = o.UO),
                (window.Dropdown = o.Lt),
                (window.Modal = o.u_),
                (window.Offcanvas = o.TB),
                (window.Popover = o.J2),
                (window.ScrollSpy = o.DA),
                (window.Tab = o.OK),
                (window.Toast = o.FN),
                (window.Tooltip = o.u);
            var l = a(320);
            const r = document.querySelectorAll(".checklist");
            r &&
                new l.Sortable(r, {
                    draggable: ".form-check",
                    handle: ".form-check-label",
                    mirror: { constrainDimensions: !0 },
                });
            var s = a(529),
                c = a.n(s);
            document.querySelectorAll("[data-choices]").forEach((e) => {
                const t = {
                    ...(e.dataset.choices ? JSON.parse(e.dataset.choices) : {}),
                    ...{
                        classNames: {
                            containerInner: e.className,
                            input: "form-control",
                            inputCloned: "form-control-sm",
                            listDropdown: "dropdown-menu",
                            itemChoice: "dropdown-item",
                            activeState: "show",
                            selectedState: "active",
                        },
                        shouldSort: !1,
                        callbackOnCreateTemplates: function (e) {
                            return {
                                choice: ({ classNames: t }, a) => {
                                    const o = `${t.item} ${t.itemChoice} ${
                                            a.disabled
                                                ? t.itemDisabled
                                                : t.itemSelectable
                                        }`,
                                        n = a.disabled
                                            ? 'data-choice-disabled aria-disabled="true"'
                                            : "data-choice-selectable",
                                        l =
                                            a.groupId > 0
                                                ? 'role="treeitem"'
                                                : 'role="option"',
                                        r = this.config.itemSelectText,
                                        s =
                                            a.customProperties &&
                                            a.customProperties.avatarSrc
                                                ? `\n            <div class="avatar avatar-xs me-3">\n              <img class="avatar-img rounded-circle" src="${a.customProperties.avatarSrc}" alt="${a.label}" >\n            </div> ${a.label}\n          `
                                                : a.label;
                                    return e(
                                        `\n            <div class="${o}" data-select-text="${r}" data-choice ${n} data-id="${a.id}" data-value="${a.value}" ${l}>\n              ${s}\n            </div>\n          `
                                    );
                                },
                            };
                        },
                    },
                };
                new (c())(e, t);
            }),
                (window.Choices = c());
            var i = a(25),
                d = a.n(i);
            (d().autoDiscover = !1),
                (d().thumbnailWidth = null),
                (d().thumbnailHeight = null);
            document.querySelectorAll("[data-dropzone]").forEach((e) => {
                let t;
                const a = e.dataset.dropzone
                        ? JSON.parse(e.dataset.dropzone)
                        : {},
                    o = {
                        previewsContainer: e.querySelector(".dz-preview"),
                        previewTemplate:
                            e.querySelector(".dz-preview").innerHTML,
                        init: function () {
                            this.on("addedfile", function (e) {
                                1 == a.maxFiles && t && this.removeFile(t),
                                    (t = e);
                            });
                        },
                    },
                    n = { ...a, ...o };
                (e.querySelector(".dz-preview").innerHTML = ""),
                    new (d())(e, n);
            }),
                (window.Dropzone = d());
            var u = a(527);
            document.querySelectorAll("[data-flatpickr]").forEach((e) => {
                const t = e.dataset.flatpickr
                    ? JSON.parse(e.dataset.flatpickr)
                    : {};
                (0, u.Z)(e, t);
            }),
                (window.flatpickr = u.Z);
            var p = a(837),
                h = a(622),
                f = a(42);
            const m = document.querySelectorAll(".highlight");
            p.Z.registerLanguage("xml", f.Z),
                p.Z.registerLanguage("javascript", h.Z),
                m.forEach((e) => {
                    p.Z.highlightBlock(e);
                }),
                (window.hljs = p.Z);
            var b = a(382),
                y = a.n(b);
            const g = document.querySelectorAll("[data-inputmask]");
            y()({ rightAlign: !1 }).mask(g), (window.Inputmask = y());
            const k = document.querySelectorAll(".kanban-category"),
                v = document.querySelectorAll(".kanban-add-link"),
                S = document.querySelectorAll(".kanban-add-form");
            function w(e) {
                const t = e.closest(".kanban-add"),
                    a = t.querySelector(".card"),
                    o = t.querySelector(".kanban-add-link"),
                    n = t.querySelector(".kanban-add-form");
                o.classList.toggle("d-none"),
                    n.classList.toggle("d-none"),
                    a &&
                        a.classList.contains("card-sm") &&
                        (a.classList.contains("card-flush")
                            ? a.classList.remove("card-flush")
                            : a.classList.add("card-flush"));
            }
            k &&
                new l.Sortable(k, {
                    draggable: ".kanban-item",
                    mirror: { constrainDimensions: !0 },
                }),
                v.forEach((e) => {
                    e.addEventListener("click", () => {
                        w(e);
                    });
                }),
                S.forEach((e) => {
                    e.addEventListener("reset", function () {
                        w(e);
                    }),
                        e.addEventListener("submit", function (e) {
                            e.preventDefault();
                        });
                }),
                (window.Sortable = l.Sortable);
            var L = a(709),
                C = a.n(L);
            !(function () {
                const e = document.querySelectorAll("[data-list]"),
                    t = document.querySelectorAll("[data-sort]");
                function a(e, t, a) {
                    const o = [].slice.call(e).filter(function (e) {
                        return e.checked;
                    });
                    t &&
                        (o.length
                            ? t.classList.add("show")
                            : t.classList.remove("show"),
                        (a.innerHTML = o.length));
                }
                void 0 !== C() &&
                    e &&
                    [].forEach.call(e, function (e) {
                        !(function (e) {
                            const t = e.querySelector(".list-alert"),
                                o = e.querySelector(".list-alert-count"),
                                n = e.querySelector(".list-alert .btn-close"),
                                l = e.querySelectorAll(".list-checkbox"),
                                r = e.querySelector(".list-checkbox-all"),
                                s = e.querySelectorAll(".list-pagination"),
                                c = e.querySelector(".list-pagination-prev"),
                                i = e.querySelector(".list-pagination-next"),
                                d =
                                    e.dataset.list &&
                                    JSON.parse(e.dataset.list),
                                u = Object.assign(
                                    {
                                        listClass: "list",
                                        searchClass: "list-search",
                                        sortClass: "list-sort",
                                    },
                                    d
                                ),
                                p = new (C())(e, u);
                            s &&
                                [].forEach.call(s, function (e) {
                                    e.addEventListener("click", function (e) {
                                        e.preventDefault();
                                    });
                                }),
                                i &&
                                    i.addEventListener("click", function (e) {
                                        e.preventDefault();
                                        const t =
                                            parseInt(p.i) + parseInt(p.page);
                                        t <= p.size() && p.show(t, p.page);
                                    }),
                                c &&
                                    c.addEventListener("click", function (e) {
                                        e.preventDefault();
                                        const t =
                                            parseInt(p.i) - parseInt(p.page);
                                        t > 0 && p.show(t, p.page);
                                    }),
                                l &&
                                    [].forEach.call(l, function (e) {
                                        e.addEventListener(
                                            "change",
                                            function () {
                                                a(l, t, o),
                                                    r && (r.checked = !1);
                                            }
                                        );
                                    }),
                                r &&
                                    r.addEventListener("change", function () {
                                        [].forEach.call(l, function (e) {
                                            e.checked = r.checked;
                                        }),
                                            a(l, t, o);
                                    }),
                                n &&
                                    n.addEventListener("click", function (e) {
                                        e.preventDefault(),
                                            r && (r.checked = !1),
                                            [].forEach.call(l, function (e) {
                                                e.checked = !1;
                                            }),
                                            a(l, t, o);
                                    });
                        })(e);
                    }),
                    void 0 !== C() &&
                        t &&
                        [].forEach.call(t, function (e) {
                            e.addEventListener("click", function (e) {
                                e.preventDefault();
                            });
                        });
            })();
            window.List = C();
            a(328);
            document.querySelectorAll(".navbar-nav .collapse").forEach((e) => {
                const t = new o.UO(e, { toggle: !1 });
                e.addEventListener("show.bs.collapse", (a) => {
                    a.stopPropagation();
                    e.parentElement
                        .closest(".collapse")
                        .querySelectorAll(".collapse")
                        .forEach((e) => {
                            const a = o.UO.getInstance(e);
                            a !== t && a.hide();
                        });
                }),
                    e.addEventListener("hide.bs.collapse", (t) => {
                        t.stopPropagation();
                        e.querySelectorAll(".collapse").forEach((e) => {
                            o.UO.getInstance(e).hide();
                        });
                    });
            });
            const E = document.querySelectorAll(
                ".navbar .dropup, .navbar .dropend, .navbar .dropdown, .navbar .dropstart"
            );
            window.innerWidth > 767 &&
                E.forEach((e) => {
                    const t = e.querySelector('[data-bs-toggle="dropdown"]'),
                        a = new o.Lt(t);
                    e.addEventListener("mouseenter", () => {
                        a.show();
                    }),
                        e.addEventListener("mouseleave", () => {
                            a.hide();
                        });
                });
            document
                .querySelectorAll('[data-bs-toggle="popover"]')
                .forEach((e) => {
                    new o.J2(e);
                });
            document
                .querySelectorAll('[data-bs-toggle="tooltip"]')
                .forEach((e) => {
                    new o.u(e);
                });
            var A = a(95),
                O = a.n(A);
            document.querySelectorAll("[data-quill]").forEach((e) => {
                const t = {
                    ...(e.dataset.quill ? JSON.parse(e.dataset.quill) : {}),
                    modules: {
                        toolbar: [
                            ["bold", "italic"],
                            ["link", "blockquote", "code", "image"],
                            [{ list: "ordered" }, { list: "bullet" }],
                        ],
                    },
                    theme: "snow",
                };
                new (O())(e, t);
            }),
                (window.Quill = O());
            document.querySelectorAll('[data-toggle="wizard"]').forEach((e) => {
                const t = new o.OK(e),
                    a = e.closest(".tab-content").querySelectorAll(".tab-pane");
                e.addEventListener("click", function (o) {
                    o.preventDefault(),
                        a.forEach((e) => {
                            e.classList.remove("active");
                        }),
                        t.show(),
                        e.classList.remove("active");
                });
            });
             q = a(449);
            function x(e) {
                return getComputedStyle(
                    document.documentElement
                ).getPropertyValue(e);
            }
            q.kL.register(
                q.qi,
                q.vn,
                q.ZL,
                q.N0,
                q.uw,
                q.WY,
                q.jI,
                q.Gu,
                q.De,
                q.f$,
                q.ST,
                q.jn,
                q.WV,
                q.tt,
                q.od,
                q.CV,
                q.Xi,
                q.l7,
                q.ho,
                q.FB,
                q.RM,
                q.Dx,
                q.u
            );
            const D = {
                    gray: {
                        300: x("--bs-chart-gray-300"),
                        600: x("--bs-chart-gray-600"),
                        700: x("--bs-chart-gray-700"),
                        800: x("--bs-chart-gray-800"),
                        900: x("--bs-chart-gray-900"),
                    },
                    primary: {
                        100: x("--bs-chart-primary-100"),
                        300: x("--bs-chart-primary-300"),
                        700: x("--bs-chart-primary-700"),
                    },
                    black: x("--bs-dark"),
                    white: x("--bs-white"),
                    transparent: "transparent",
                },
                I = "Cerebri Sans",
                N = document.querySelectorAll('[data-toggle="chart"]'),
                T = document.querySelectorAll('[data-toggle="legend"]');
            function J(e) {
                const { chart: t, tooltip: a } = e,
                    o = (function (e) {
                        let t = e.canvas.parentNode.querySelector("div");
                        if (!t) {
                            (t = document.createElement("div")),
                                t.setAttribute("id", "chart-tooltip"),
                                t.setAttribute("role", "tooltip"),
                                t.classList.add("popover", "bs-popover-top");
                            const a = document.createElement("div");
                            a.classList.add(
                                "popover-arrow",
                                "translate-middle-x"
                            );
                            const o = document.createElement("div");
                            o.classList.add("popover-content"),
                                t.appendChild(a),
                                t.appendChild(o),
                                e.canvas.parentNode.appendChild(t);
                        }
                        return t;
                    })(t);
                if (0 === a.opacity)
                    return void (o.style.visibility = "hidden");
                if (a.body) {
                    const e = a.title || [],
                        n = a.body.map((e) => e.lines),
                        l = document.createElement("div");
                    e.forEach((e) => {
                        const t = document.createElement("h3");
                        t.classList.add(
                            "popover-header",
                            "text-center",
                            "text-nowrap"
                        );
                        const a = document.createTextNode(e);
                        t.appendChild(a), l.appendChild(t);
                    });
                    const r = document.createElement("div");
                    n.forEach((e, o) => {
                        const l = a.labelColors[o],
                            s = document.createElement("span");
                        s.classList.add("popover-body-indicator"),
                            (s.style.backgroundColor =
                                "line" === t.config.type &&
                                "rgba(0,0,0,0.1)" !== l.borderColor
                                    ? l.borderColor
                                    : l.backgroundColor);
                        const c = document.createElement("div");
                        c.classList.add(
                            "popover-body",
                            "d-flex",
                            "align-items-center",
                            "text-nowrap"
                        ),
                            c.classList.add(
                                n.length > 1
                                    ? "justify-content-left"
                                    : "justify-content-center"
                            );
                        const i = document.createTextNode(e);
                        c.appendChild(s), c.appendChild(i), r.appendChild(c);
                    });
                    const s = o.querySelector(".popover-content");
                    for (; s.firstChild; ) s.firstChild.remove();
                    s.appendChild(l), s.appendChild(r);
                }
                const { offsetLeft: n, offsetTop: l } = t.canvas;
                (o.style.visibility = "visible"),
                    (o.style.left = n + a.caretX + "px"),
                    (o.style.top = l + a.caretY + "px"),
                    (o.style.transform =
                        "translateX(-50%) translateY(-100%) translateY(-1rem)");
            }
            function P(e) {
                let t = "";
                const a = e.chart.scales[e.dataset.yAxisID || "y"];
                if (a) {
                    t =
                        (e.chart.tooltip.dataPoints.length > 1
                            ? " " + e.dataset.label + " "
                            : " ") +
                        a.options.ticks.callback.apply(a, [e.parsed.y, 0, []]);
                } else {
                    const a = e.chart.options.plugins.tooltip.callbacks,
                        o = a.beforeLabel() || "",
                        n = a.afterLabel() || "";
                    t = o + e.formattedValue + n;
                }
                return t;
            }
            (q.kL.defaults.responsive = !0),
                (q.kL.defaults.maintainAspectRatio = !1),
                (q.kL.defaults.color = x("--bs-chart-default-color")),
                (q.kL.defaults.font.family = I),
                (q.kL.defaults.font.size = 13),
                (q.kL.defaults.layout.padding = 0),
                (q.kL.defaults.plugins.legend.display = !1),
                (q.kL.defaults.elements.point.radius = 0),
                (q.kL.defaults.elements.point.backgroundColor = D.primary[700]),
                (q.kL.defaults.elements.line.tension = 0.4),
                (q.kL.defaults.elements.line.borderWidth = 3),
                (q.kL.defaults.elements.line.borderColor = D.primary[700]),
                (q.kL.defaults.elements.line.backgroundColor = D.transparent),
                (q.kL.defaults.elements.line.borderCapStyle = "rounded"),
                (q.kL.defaults.elements.bar.backgroundColor = D.primary[700]),
                (q.kL.defaults.elements.bar.borderWidth = 0),
                (q.kL.defaults.elements.bar.borderRadius = 10),
                (q.kL.defaults.elements.bar.borderSkipped = !1),
                (q.kL.defaults.datasets.bar.maxBarThickness = 10),
                (q.kL.defaults.elements.arc.backgroundColor = D.primary[700]),
                (q.kL.defaults.elements.arc.borderColor = x(
                    "--bs-chart-arc-border-color"
                )),
                (q.kL.defaults.elements.arc.borderWidth = 4),
                (q.kL.defaults.elements.arc.hoverBorderColor = x(
                    "--bs-chart-arc-hover-border-color"
                )),
                (q.kL.defaults.plugins.tooltip.enabled = !1),
                (q.kL.defaults.plugins.tooltip.mode = "index"),
                (q.kL.defaults.plugins.tooltip.intersect = !1),
                (q.kL.defaults.plugins.tooltip.external = J),
                (q.kL.defaults.plugins.tooltip.callbacks.label = P),
                (q.kL.defaults.datasets.doughnut.cutout = "83%"),
                (q.kL.defaults.scales.linear.border = {
                    ...q.kL.defaults.scales.linear.border,
                    display: !1,
                    dash: [2],
                    dashOffset: [2],
                }),
                (q.kL.defaults.scales.linear.grid = {
                    ...q.kL.defaults.scales.linear.grid,
                    color: x("--bs-chart-grid-line-color"),
                    drawTicks: !1,
                }),
                (q.kL.defaults.scales.linear.ticks.beginAtZero = !0),
                (q.kL.defaults.scales.linear.ticks.padding = 10),
                (q.kL.defaults.scales.linear.ticks.stepSize = 10),
                (q.kL.defaults.scales.category.border = {
                    ...q.kL.defaults.scales.category.border,
                    display: !1,
                }),
                (q.kL.defaults.scales.category.grid = {
                    ...q.kL.defaults.scales.category.grid,
                    display: !1,
                    drawTicks: !1,
                    drawOnChartArea: !1,
                }),
                (q.kL.defaults.scales.category.ticks.padding = 20),
                N.forEach(function (e) {
                    const t = e.dataset.trigger;
                    e.addEventListener(t, function () {
                        !(function (e) {
                            const t = e.dataset.target,
                                a = e.dataset.action,
                                o = parseInt(e.dataset.dataset),
                                n = document.querySelector(t),
                                l = q.kL.getChart(n);
                            if ("toggle" === a) {
                                const e = l.data.datasets,
                                    t = e.filter(function (e) {
                                        return !e.hidden;
                                    })[0];
                                let a = e.filter(function (e) {
                                    return 1e3 === e.order;
                                })[0];
                                if (!a) {
                                    a = {};
                                    for (const e in t)
                                        "_meta" !== e && (a[e] = t[e]);
                                    (a.order = 1e3), (a.hidden = !0), e.push(a);
                                }
                                const n = e[o] === t ? a : e[o];
                                for (const e in t)
                                    "_meta" !== e && (t[e] = n[e]);
                                l.update();
                            }
                            if ("add" === a) {
                                const e = l.data.datasets[o],
                                    t = e.hidden;
                                e.hidden = !t;
                            }
                            l.update();
                        })(e);
                    });
                }),
                document.addEventListener("DOMContentLoaded", function () {
                    T.forEach(function (e) {
                        !(function (e) {
                            const t = q.kL.getChart(e),
                                a = document.createElement("div");
                            t.legend.legendItems?.forEach((e) => {
                                a.innerHTML += `<span class="chart-legend-item"><span class="chart-legend-indicator" style="background-color: ${e.fillStyle}"></span>${e.text}</span>`;
                            });
                            const o = e.dataset.target;
                            document.querySelector(o).appendChild(a);
                        })(e);
                    });
                }),
                (window.Chart = q.kL),
                q.kL.register(
                    q.qi,
                    q.vn,
                    q.ZL,
                    q.N0,
                    q.uw,
                    q.WY,
                    q.jI,
                    q.Gu,
                    q.De,
                    q.f$,
                    q.ST,
                    q.jn,
                    q.WV,
                    q.tt,
                    q.od,
                    q.CV,
                    q.Xi,
                    q.l7,
                    q.ho,
                    q.FB,
                    q.RM,
                    q.Dx,
                    q.u
                );
            const z = document.getElementById("audienceChart");
            z &&
                new q.kL(z, {
                    type: "line",
                    options: {
                        scales: {
                            yAxisOne: {
                                display: "auto",
                                grid: { color: "#283E59" },
                                ticks: {
                                    callback: function (e) {
                                        return e + "k";
                                    },
                                },
                            },
                            yAxisTwo: {
                                display: "auto",
                                grid: { color: "#283E59" },
                                ticks: {
                                    callback: function (e) {
                                        return e + "%";
                                    },
                                },
                            },
                        },
                    },
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        datasets: [
                            {
                                label: "Customers",
                                data: [
                                    0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25,
                                    40,
                                ],
                                yAxisID: "yAxisOne",
                            },
                            {
                                label: "Sessions",
                                data: [
                                    50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87,
                                    45,
                                ],
                                yAxisID: "yAxisOne",
                                hidden: !0,
                            },
                            {
                                label: "Conversion",
                                data: [
                                    40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52,
                                    48,
                                ],
                                yAxisID: "yAxisTwo",
                                hidden: !0,
                            },
                        ],
                    },
                });
            const M = document.getElementById("conversionsChart");
            M &&
                new q.kL(M, {
                    type: "bar",
                    options: {
                        scales: {
                            y: {
                                ticks: {
                                    callback: function (e) {
                                        return e + "%";
                                    },
                                },
                            },
                        },
                    },
                    data: {
                        labels: [
                            "Oct 1",
                            "Oct 2",
                            "Oct 3",
                            "Oct 4",
                            "Oct 5",
                            "Oct 6",
                            "Oct 7",
                            "Oct 8",
                            "Oct 9",
                            "Oct 10",
                            "Oct 11",
                            "Oct 12",
                        ],
                        datasets: [
                            {
                                label: "2020",
                                data: [
                                    25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20,
                                    32,
                                ],
                            },
                            {
                                label: "2019",
                                data: [
                                    15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22,
                                ],
                                backgroundColor: "#d2ddec",
                                hidden: !0,
                            },
                        ],
                    },
                });
            const B = document.getElementById("trafficChart");
            B &&
                new q.kL(B, {
                    type: "doughnut",
                    options: {
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    afterLabel: function () {
                                        return "%";
                                    },
                                },
                            },
                        },
                    },
                    data: {
                        labels: ["Direct", "Organic", "Referral"],
                        datasets: [
                            {
                                data: [60, 25, 15],
                                backgroundColor: [
                                    "#2C7BE5",
                                    "#A6C5F7",
                                    "#D2DDEC",
                                ],
                            },
                            {
                                data: [15, 45, 20],
                                backgroundColor: [
                                    "#2C7BE5",
                                    "#A6C5F7",
                                    "#D2DDEC",
                                ],
                                hidden: !0,
                            },
                        ],
                    },
                });
            const $ = document.getElementById("trafficChartAlt");
            $ &&
                new q.kL($, {
                    type: "doughnut",
                    options: {
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    afterLabel: function () {
                                        return "%";
                                    },
                                },
                            },
                        },
                    },
                    data: {
                        labels: ["Direct", "Organic", "Referral"],
                        datasets: [
                            {
                                data: [60, 25, 15],
                                backgroundColor: [
                                    "#2C7BE5",
                                    "#A6C5F7",
                                    "#D2DDEC",
                                ],
                            },
                            {
                                data: [15, 45, 20],
                                backgroundColor: [
                                    "#2C7BE5",
                                    "#A6C5F7",
                                    "#D2DDEC",
                                ],
                                hidden: !0,
                            },
                        ],
                    },
                });
            // const Z = document.getElementById("salesChart");
            // Z &&
            //     new q.kL(Z, {
            //         type: "line",
            //         options: {
            //             scales: {
            //                 y: {
            //                     ticks: {
            //                         callback: function (e) {
            //                             return "$" + e + "k";
            //                         },
            //                     },
            //                 },
            //             },
            //         },
            //         data: {
            //             labels: [
            //                 "Oct 1",
            //                 "Oct 3",
            //                 "Oct 6",
            //                 "Oct 9",
            //                 "Oct 12",
            //                 "Oct 5",
            //                 "Oct 18",
            //                 "Oct 21",
            //                 "Oct 24",
            //                 "Oct 27",
            //                 "Oct 30",
            //             ],
            //             datasets: [
            //                 {
            //                     label: "All",
            //                     data: [
            //                         0, 0.6, 5, 15, 10, 20, 15, 25, 20, 30, 25,
            //                     ],
            //                 },
            //             ],
            //         },
            //     });
            const j = document.getElementById("ordersChart");
            j &&
                new q.kL(j, {
                    type: "bar",
                    options: {
                        scales: {
                            y: {
                                ticks: {
                                    callback: function (e) {
                                        return "$" + e + "k";
                                    },
                                },
                            },
                        },
                    },
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        datasets: [
                            {
                                label: "Sales",
                                data: [
                                    25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20,
                                    32,
                                ],
                            },
                            {
                                label: "Affiliate",
                                data: [
                                    15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22,
                                ],
                                backgroundColor: "#d2ddec",
                                hidden: !0,
                            },
                        ],
                    },
                });
            const F = document.getElementById("earningsChart");
            F &&
                new q.kL(F, {
                    type: "bar",
                    options: {
                        scales: {
                            yAxisOne: {
                                display: "auto",
                                ticks: {
                                    callback: function (e) {
                                        return "$" + e + "k";
                                    },
                                },
                            },
                            yAxisTwo: {
                                display: "auto",
                                ticks: {
                                    callback: function (e) {
                                        return e + "k";
                                    },
                                },
                            },
                            yAxisThree: {
                                display: "auto",
                                ticks: {
                                    callback: function (e) {
                                        return e + "%";
                                    },
                                },
                            },
                        },
                    },
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                        ],
                        datasets: [
                            {
                                label: "Earnings",
                                data: [
                                    18, 10, 5, 15, 10, 20, 15, 25, 20, 26, 25,
                                    29, 18, 10, 5, 15, 10, 20,
                                ],
                                yAxisID: "yAxisOne",
                            },
                            {
                                label: "Sessions",
                                data: [
                                    50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87,
                                    45, 50, 75, 35, 25, 55, 19,
                                ],
                                yAxisID: "yAxisTwo",
                                hidden: !0,
                            },
                            {
                                label: "Bounce",
                                data: [
                                    40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52,
                                    48, 40, 57, 25, 50, 57, 29,
                                ],
                                yAxisID: "yAxisThree",
                                hidden: !0,
                            },
                        ],
                    },
                });
            const W = document.getElementById("weeklyHoursChart");
            W &&
                new q.kL(W, {
                    type: "bar",
                    options: {
                        scales: {
                            y: {
                                ticks: {
                                    callback: function (e) {
                                        return e + "hrs";
                                    },
                                },
                            },
                        },
                    },
                    data: {
                        labels: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun",
                        ],
                        datasets: [{ data: [21, 12, 28, 15, 5, 12, 17, 2] }],
                    },
                });
            const U = document.getElementById("overviewChart");
            U &&
                new q.kL(U, {
                    type: "line",
                    options: {
                        scales: {
                            yAxisOne: {
                                display: "auto",
                                ticks: {
                                    callback: function (e) {
                                        return "$" + e + "k";
                                    },
                                },
                            },
                            yAxisTwo: {
                                display: "auto",
                                ticks: {
                                    callback: function (e) {
                                        return e + "hrs";
                                    },
                                },
                            },
                        },
                    },
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        datasets: [
                            {
                                label: "Earned",
                                data: [
                                    0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25,
                                    40,
                                ],
                                yAxisID: "yAxisOne",
                            },
                            {
                                label: "Hours Worked",
                                data: [
                                    7, 35, 12, 27, 34, 17, 19, 30, 28, 32, 24,
                                    39,
                                ],
                                yAxisID: "yAxisTwo",
                                hidden: !0,
                            },
                        ],
                    },
                });
            const H = document.getElementById("sparklineChart");
            H &&
                new q.kL(H, {
                    type: "line",
                    options: {
                        scales: { y: { display: !1 }, x: { display: !1 } },
                        elements: {
                            line: { borderWidth: 2 },
                            point: { hoverRadius: 0 },
                        },
                        plugins: { tooltip: { external: () => !1 } },
                    },
                    data: {
                        labels: new Array(12).fill("Label"),
                        datasets: [
                            {
                                data: [
                                    0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55,
                                    65,
                                ],
                            },
                        ],
                    },
                });
            const R = document.querySelectorAll(
                "#sparklineChartSocialOne, #sparklineChartSocialTwo, #sparklineChartSocialThree, #sparklineChartSocialFour"
            );
            R &&
                [].forEach.call(R, function (e) {
                    new q.kL(e, {
                        type: "line",
                        options: {
                            scales: {
                                y: { display: !1 },
                                x: { display: !1 },
                            },
                            elements: {
                                line: {
                                    borderWidth: 2,
                                    borderColor: "#D2DDEC",
                                },
                                point: { hoverRadius: 0 },
                            },
                            plugins: { tooltip: { external: () => !1 } },
                        },
                        data: {
                            labels: new Array(12).fill("Label"),
                            datasets: [
                                {
                                    data: [
                                        0, 15, 10, 25, 30, 15, 40, 50, 80, 60,
                                        55, 65,
                                    ],
                                },
                            ],
                        },
                    });
                });
            const V = document.getElementById("feedChart");
            V &&
                new q.kL(V, {
                    type: "bar",
                    options: {
                        scales: {
                            y: {
                                ticks: {
                                    callback: function (e) {
                                        return "$" + e + "k";
                                    },
                                },
                            },
                        },
                    },
                    data: {
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        datasets: [
                            {
                                label: "Sales",
                                data: [
                                    25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20,
                                    32,
                                ],
                            },
                            {
                                label: "Affiliate",
                                data: [
                                    15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22,
                                ],
                                backgroundColor: "#d2ddec",
                                hidden: !0,
                            },
                        ],
                    },
                });
        },
    },
    a = {};
function o(e) {
    var n = a[e];
    if (void 0 !== n) return n.exports;
    var l = (a[e] = { exports: {} });
    return t[e].call(l.exports, l, l.exports, o), l.exports;
}
(o.m = t),
    (e = []),
    (o.O = (t, a, n, l) => {
        if (!a) {
            var r = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [a, n, l] = e[d], s = !0, c = 0; c < a.length; c++)
                    (!1 & l || r >= l) &&
                    Object.keys(o.O).every((e) => o.O[e](a[c]))
                        ? a.splice(c--, 1)
                        : ((s = !1), l < r && (r = l));
                if (s) {
                    e.splice(d--, 1);
                    var i = n();
                    void 0 !== i && (t = i);
                }
            }
            return t;
        }
        l = l || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > l; d--) e[d] = e[d - 1];
        e[d] = [a, n, l];
    }),
    (o.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
        for (var a in t)
            o.o(t, a) &&
                !o.o(e, a) &&
                Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
        "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module",
            }),
            Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
        var e = { 505: 0 };
        o.O.j = (t) => 0 === e[t];
        var t = (t, a) => {
                var n,
                    l,
                    [r, s, c] = a,
                    i = 0;
                if (r.some((t) => 0 !== e[t])) {
                    for (n in s) o.o(s, n) && (o.m[n] = s[n]);
                    if (c) var d = c(o);
                }
                for (t && t(a); i < r.length; i++)
                    (l = r[i]), o.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
                return o.O(d);
            },
            a = (self.webpackChunkdashkit = self.webpackChunkdashkit || []);
        a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    o.O(void 0, [736], () => o(444)),
    o.O(void 0, [736], () => o(524));
var n = o.O(void 0, [736], () => o(250));
n = o.O(n);
// })();
//# sourceMappingURL=theme.bundle.js.map
