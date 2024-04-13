(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5286: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 6408));
    },
    6408: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return f;
          },
        });
      var n = i(3827),
        a = i(5368),
        s = i.n(a),
        r = i(8792),
        l = i(703),
        c = {
          src: "/main/media/glow-top.87feda76.svg",
          height: 518,
          width: 1091,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = i(1280),
        o = i(9166),
        m = i(4059),
        x = i(7876),
        h = () => {
          let e = [
            {
              icon: d.Z,
              name: "Unmatched Script Performance",
              description:
                "Experience the zenith of script execution, providing an edge in gameplay and creativity",
            },
            {
              icon: o.Z,
              name: "Regular Updates",
              description:
                "Our dedicated team ensures RAICU evolves continuously, maintaining performance",
            },
            {
              icon: m.Z,
              name: "Community-Driven",
              description:
                "At the heart of RAICU is a vibrant community of avid gamers and developers, collaborating to create and share innovative scripts and ideas",
            },
            {
              icon: x.Z,
              name: "Meticulous Script Hub",
              description:
                "Conveniently use our scripts, without a worry of loggers",
            },
          ];
          return (0, n.jsx)("section", {
            children: (0, n.jsxs)("div", {
              className: "relative max-w-6xl px-4 mx-auto sm:px-6",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden",
                  "aria-hidden": "true",
                  children: (0, n.jsx)("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 -z-10",
                    children: (0, n.jsx)(l.default, {
                      src: c,
                      className: "max-w-none",
                      width: 1404,
                      height: 658,
                      alt: "Features Illustration",
                    }),
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "pt-16 pb-12 md:pt-52 md:pb-20",
                  children: (0, n.jsx)("div", {
                    children: (0, n.jsxs)("div", {
                      className:
                        "flex flex-col max-w-xl mx-auto md:max-w-none md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "order-1 md:w-7/12 lg:w-1/2 md:order-none max-md:text-center",
                          "data-aos": "fade-down",
                          children: [
                            (0, n.jsx)("h3", {
                              className:
                                "pb-3 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60",
                              children: "Powered by Sky & Contrail",
                            }),
                            (0, n.jsx)("p", {
                              className: "mb-8 text-lg text-zinc-400",
                              children: "",
                            }),
                            (0, n.jsx)("dl", {
                              className:
                                "max-w-xl grid grid-cols-1 gap-4 lg:max-w-none",
                              children: e.map((e) =>
                                (0, n.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "px-2 py-1 rounded group hover:bg-zinc-100 duration-500",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className:
                                          "flex items-center mb-1 space-x-2 ",
                                        children: [
                                          (0, n.jsx)(e.icon, {
                                            className:
                                              "w-4 h-4 shrink-0 text-zinc-300 group-hover:text-zinc-950 duration-500",
                                          }),
                                          (0, n.jsx)("h4", {
                                            className:
                                              "font-medium text-zinc-50 group-hover:text-zinc-950 duration-500",
                                            children: e.name,
                                          }),
                                        ],
                                      }),
                                      (0, n.jsx)("p", {
                                        className:
                                          "text-sm text-left text-zinc-400 group-hover:text-zinc-950 duration-500",
                                        children: e.description,
                                      }),
                                    ],
                                  },
                                  e.name
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        p = i(6314),
        u = i(4090);
      class g extends u.Component {
        render() {
          return (0, n.jsx)(p.E.div, {
            ...this.props,
            children: this.props.children,
          });
        }
      }
      function f() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            className: "flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24",
            children: (0, n.jsxs)(g, {
              className: "RAICUWrapper",
              variants: {
                initial: {
                  opacity: 0,
                  scale: 0.95,
                },
                final: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              },
              custom: 300,
              initial: "initial",
              animate: "final",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center max-w-3xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0",
                  children: [
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("h1", {
                          className: "".concat(
                            s().className,
                            " RAICUHeading py-4 text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white"
                          ),
                          children: "RAICU",
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "mt-6 text-sm md:text-base lg:text-lg leading-5 font-medium text-zinc-600 text-center",
                          children:
                            "RAICU is a private organization that aims to provide the best server-side experience.",
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex flex-col justify-center gap-4 mx-auto mt-8 sm:flex-row sm:max-w-lg ",
                          children: [
                            (0, n.jsxs)(r.default, {
                              href: "https://discord.gg/heTNDwXupK",
                              className:
                                "sm:w-1/2 sm:text-center inline-block transition-all space-x-2 rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800 bg-zinc-50 ring-1 ring-transparent hover:text-zinc-100 hover:ring-zinc-600/80 hover:bg-zinc-900/20 duration-150 hover:drop-shadow-cta",
                              children: [
                                (0, n.jsx)("span", {
                                  children: "Join our community",
                                }),
                                (0, n.jsx)("span", {
                                  "aria-hidden": "true",
                                  children: "→",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(h, {}),
              ],
            }),
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [792, 416, 971, 69, 744], function () {
      return e((e.s = 5286));
    }),
      (_N_E = e.O());
  },
]);
