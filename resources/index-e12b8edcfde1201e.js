(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(9491);
        },
      ]);
    },
    9491: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return _;
          },
          default: function () {
            return A;
          },
        });
      var a = s(5893),
        o = s(7294),
        n = s(8287),
        i = s(7516),
        r = s(5043);
      let l = () => {
        let { t: e } = (0, n.$G)("common");
        return (0, a.jsxs)("section", {
          children: [
            (0, a.jsx)("h2", {
              className: "text-main text-2xl",
              children: e("howToUseTitle"),
            }),
            (0, a.jsxs)("p", {
              className: "mt-1 text-submain",
              children: [
                e("howToUseDescription"),
                " ",
                (0, a.jsx)("b", { children: "SpotifyDown" }),
                ":",
              ],
            }),
            (0, a.jsxs)("ul", {
              className: "text-submain",
              children: [
                (0, a.jsx)("li", { children: e("howToUseStep1") }),
                (0, a.jsx)("li", { children: e("howToUseStep2") }),
                (0, a.jsxs)("li", {
                  children: [
                    e("howToUseStep3"),
                    (0, a.jsx)("span", {
                      className: "inline-block ml-1",
                      children: (0, a.jsx)(i.Q81, {}),
                    }),
                  ],
                }),
                (0, a.jsx)("li", { children: e("howToUseStep4") }),
                (0, a.jsx)("li", { children: e("howToUseStep5") }),
                (0, a.jsx)("li", { children: e("howToUseStep6") }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mt-3",
              children: [
                (0, a.jsx)("p", {
                  className: "text-submain text-xl",
                  children: "PC:",
                }),
                (0, a.jsx)(r.Z, {
                  children: (0, a.jsx)("img", {
                    src: "/static/pc_album_copylink.png",
                  }),
                }),
                (0, a.jsx)(r.Z, {
                  children: (0, a.jsx)("img", {
                    src: "/static/pc_song_copylink.png",
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mt-3",
              children: [
                (0, a.jsx)("p", {
                  className: "text-submain text-xl",
                  children: "Android/iOS:",
                }),
                (0, a.jsx)(r.Z, {
                  children: (0, a.jsx)("img", {
                    src: "/static/phone_album_copylink1.jpg",
                  }),
                }),
                (0, a.jsx)(r.Z, {
                  children: (0, a.jsx)("img", {
                    src: "/static/phone_album_copylink2.jpg",
                  }),
                }),
                (0, a.jsx)(r.Z, {
                  children: (0, a.jsx)("img", {
                    src: "/static/phone_album_copylink3.jpg",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var c = s(9008),
        d = s.n(c),
        m = function () {
          let { t: e } = (0, n.$G)("common"),
            t = "".concat(e("SEOTitle")),
            s = e("SEODescription"),
            o = "https://spotifydown.com",
            i = "https://api.microlink.io/?url=".concat(
              encodeURIComponent(o),
              "&screenshot=true&meta=false&embed=screenshot.url&overlay.browser=dark&waitForTimeout=3000&overlay.background=linear-gradient(90deg%2C%20%23FF9A8B%200%25%2C%20%23FF6A88%2055%25%2C%20%23FF99AC%20100%25)"
            );
          return (0, a.jsxs)(d(), {
            children: [
              (0, a.jsx)("title", { children: t + " - Spotify Downloader" }),
              (0, a.jsx)("meta", {
                name: "title",
                content: t + " - Spotify Downloader",
              }),
              (0, a.jsx)("meta", { name: "description", content: s }),
              (0, a.jsx)("meta", { property: "og:type", content: "website" }),
              (0, a.jsx)("meta", { property: "og:url", content: o }),
              (0, a.jsx)("meta", {
                property: "og:title",
                content: t + " - Spotify Downloader",
              }),
              (0, a.jsx)("meta", { property: "og:description", content: s }),
              (0, a.jsx)("meta", { property: "og:image", content: i }),
              (0, a.jsx)("meta", {
                property: "twitter:card",
                content: "summary_large_image",
              }),
              (0, a.jsx)("meta", { property: "twitter:url", content: o }),
              (0, a.jsx)("meta", {
                property: "twitter:title",
                content: t + " - Spotify Downloader",
              }),
              (0, a.jsx)("meta", {
                property: "twitter:description",
                content: s,
              }),
              (0, a.jsx)("meta", { property: "twitter:image", content: i }),
              (0, a.jsx)("meta", {
                name: "viewport",
                content:
                  "width=device-width, initial-scale=1, shrink-to-fit=no",
              }),
            ],
          });
        },
        u = function () {
          return (0, a.jsxs)("div", {
            className: "mt-12",
            children: [
              (0, a.jsx)("hr", { className: "border-gray-700 w-full" }),
              (0, a.jsx)("a", {
                className: "text-blue-500 hover:text-blue-600",
                href: "https://snapredd.app",
                children: "Reddit Downloader",
              }),
              (0, a.jsx)("p", {
                className: "pt-2 text-xs text-submain mb-3 mt-1",
                children:
                  'This website is not affiliated with or endorsed by Spotify AB. Our use of the name "Spotify" is for context, not claiming any ownership. It remains the property of the copyright holder.',
              }),
              (0, a.jsx)("p", {
                className: "text-xs text-submain mb-3 mt-1",
                children:
                  "Spotifydown.com doesn't host any copyrighted material. We utilize third party services to accomplish our goals.",
              }),
              (0, a.jsxs)("p", {
                className: "text-submain mb-3 mt-1",
                children: [
                  "\xa9 ",
                  new Date().getFullYear(),
                  " SpotifyDown.com",
                ],
              }),
            ],
          });
        };
      let h = () =>
          (0, a.jsxs)("section", {
            className: "mt-6",
            children: [
              (0, a.jsx)("h1", {
                className: "text-main text-2xl",
                children:
                  "Spotify Downloader - Download songs, albums, and playlists from Spotify!",
              }),
              (0, a.jsxs)("p", {
                className: "mt-1 text-submain",
                children: [
                  "Looking for a way to download songs, albums, and playlists from Spotify? Look no further than our new ",
                  (0, a.jsx)("b", { children: "Spotify Downloader" }),
                  "!",
                ],
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "This online tool lets you quickly and easily download any song, album, or playlist from Spotify. Best of all, it's free and easy to use!",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "Enter the URL of the song, album, or playlist you want to download, and our Spotify Downloader will take care of the rest.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "You can then save the songs to your computer or mobile device for offline playback. Give it a try today, and enjoy your favorite music anytime and anywhere!",
              }),
              (0, a.jsx)("h2", {
                className: "text-main text-xl mt-3",
                children: "What is Spotify Downloader, and what does it do?",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "Whether you're a music lover who wants to build a personal collection or someone who likes to stream all their favorite songs online, our Spotify Downloader is the perfect tool for you.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "Spotifydown is an amazing application that quickly converts Spotify music to MP3 and other audio formats.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "All you have to do is copy and paste the Spotify link into Spotifydown's form, click the 'convert' button, and it's all good!",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "Not only does Spotifydown make conversion quick and easy, but it also keeps the original quality of your music intact and removes those pesky Spotify ads for good!",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "With Spotify Music Converter for Spotify, you can instantly convert any song to mp3 format.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "With its advanced settings, Spotify Music Converter supports multiple audio formats such as FLAC to MP3, WAV to MP3, AIFF to MP3, plus more, so downloading your favorite tracks has never been easier.",
              }),
              (0, a.jsx)(r.Z, {
                children: (0, a.jsx)("img", {
                  alt: "Blog Image 1",
                  src: "/static/blog/1.png",
                }),
              }),
              (0, a.jsx)("h2", {
                className: "text-main text-xl mt-3",
                children: "How to use the Spotify mp3 Downloader",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "SpotifyDown makes it super easy to download Spotify songs from the comfort of your own home!",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  'All you need to do is open your Spotify app, locate the song or album you want to download, click on the "3 dots" button located next to the title, press "Share," and then press the "Copy Link" button.',
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  'Then paste that link into SpotifyDown and press "Submit."',
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  'Spotifydown will quickly process your link, so all left for you is to hit the "Download" button, and voila - you\'re ready to enjoy your music offline for free!',
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "Spotifydown makes it such a simple process that anyone can get their hands on those classic tunes in no time. So what are you waiting for?",
              }),
              (0, a.jsx)("h2", {
                className: "text-main text-xl mt-3",
                children:
                  "What are some of the top features of the Spotify mp3 Downloader?",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children: "Some of the top features of SpotifyDown include:",
              }),
              (0, a.jsxs)("p", {
                className: "mt-1 text-submain",
                children: [
                  (0, a.jsx)("b", { children: "Quick and easy conversion:" }),
                  " With a simple one-click conversion, you can get all your favorite songs to any audio format in no time at all.",
                ],
              }),
              (0, a.jsxs)("p", {
                className: "mt-1 text-submain",
                children: [
                  (0, a.jsx)("b", { children: "Uninterrupted listening:" }),
                  " Our powerful ad-block feature allows you to enjoy your music free from those pesky and annoying Spotify ads!",
                ],
              }),
              (0, a.jsxs)("p", {
                className: "mt-1 text-submain",
                children: [
                  (0, a.jsx)("b", { children: "High-quality music:" }),
                  " The great thing about our tool is that it keeps the original quality of your music intact, so you get an amazing listening experience every time.",
                ],
              }),
              (0, a.jsxs)("p", {
                className: "mt-1 text-submain",
                children: [
                  (0, a.jsx)("b", { children: "Advanced settings support:" }),
                  " If you want to get more out of your music, our Spotify Downloader also supports a variety of advanced audio settings, such as FLAC to MP3 and WAV to MP3.",
                ],
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "So if you want an easy way to download songs, albums, and playlists from the popular streaming service, look no further than our Spotify Downloader!",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "Its fast and simple conversion process, ad-free listening, and high-quality output make it the perfect solution for all your music needs. Give it a try today!",
              }),
              (0, a.jsx)("h2", {
                className: "text-main text-xl mt-3",
                children: "Benefits of using the Spotify Downloader Online",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "There are many benefits to using Spotify Downloader online.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "To start with, it's completely free and easy to use. No technical knowledge or special software is required!",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "In addition, our advanced settings allow you to customize your music in a number of different ways so that you can download your music at the highest quality possible.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "And finally, our fast and reliable service means you never have to worry about waiting around for your songs - they'll be ready and waiting for you the second you need them!",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "So if you're an avid music fan who wants a simple way to easily download all their favorite tracks from one of the most popular streaming platforms, look no further than our Spotify Downloader online!",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "So why wait? Try it out today and discover the world of music downloading for yourself! And don't forget to tell your friends about all the amazing benefits of using our tool - we're sure they'll thank you for it!",
              }),
              (0, a.jsx)(r.Z, {
                children: (0, a.jsx)("img", {
                  alt: "Blog Image 2",
                  src: "/static/blog/2.png",
                }),
              }),
              (0, a.jsx)("h2", {
                className: "text-main text-xl mt-3",
                children:
                  "Why should I use SpotifyDown instead of other tools or services?",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "There are many reasons why SpotifyDown outperforms other similar tools or services.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "To start with, it's fast, easy to use, and accessible from anywhere - no downloads or special software required!",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "In addition, our advanced settings allow you to customize your music in a number of ways for the best possible listening experience.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "And finally, our reliable and secure technology means you never have to worry about downloading malware-infected files. So if you're looking for an all-in-one solution for all your Spotify downloading needs, look no further than our Spotify Downloader today!",
              }),
              (0, a.jsx)("h2", {
                className: "text-main text-xl mt-3",
                children: "FAQs over the Internet",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children: (0, a.jsx)("b", {
                  children: "1. Do you need Spotify premium to download songs?",
                }),
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "No. With SpotfiyDown, you can download songs from Spotify without a premium account. Our tool works with both free and premium accounts, so anyone can enjoy the benefits of downloading music for offline listening whenever they want.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children: (0, a.jsx)("b", {
                  children: "2. How fast is the Spotify Downloader?",
                }),
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "The Spotify mp3 downloader is extremely fast, allowing you to download songs in seconds. Our advanced technology ensures a seamless and smooth downloading process every time, so you never have to worry about waiting around for your music.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children: (0, a.jsx)("b", {
                  children: "3. Is SpotifyDown safe to use?",
                }),
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "Yes. The Spotify Downloader uses cutting-edge encryption technologies to protect your data and privacy completely. In addition, our tool is regularly updated to avoid potential security threats so that you can trust us with all your downloading needs.",
              }),
              (0, a.jsx)("h2", {
                className: "text-main text-xl mt-3",
                children: "Final thoughts on the Spotify Playlist Downloader",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "Although Spotify is a great music streaming service, there are still many reasons why you might want to download and convert your favorite tracks into MP3 files.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "The Spotify Music Downloader is a great tool for doing just that, offering high-speed conversions, batch processing, and the ability to burn songs to CD or share them via email.",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "Best of all, it can remove DRM protection from Spotify songs at 5x faster speed without losing quality – meaning you can enjoy your music offline however you want. So why not give it a try?",
              }),
              (0, a.jsx)("p", {
                className: "mt-1 text-submain",
                children:
                  "With the Spotify Music Converter for Spotify, you can easily download and convert your favorite tracks completely for free!",
              }),
            ],
          }),
        p = () =>
          (0, a.jsx)("nav", {
            className:
              "flex items-center justify-between bg-spotify-gray text-white h-16",
            children: (0, a.jsxs)("a", {
              className: "inline-block mt-1",
              href: "/",
              children: [
                (0, a.jsx)("img", {
                  src: "/static/favicon.png",
                  alt: "Logo",
                  className: "h-8 ml-4 inline-block",
                }),
                (0, a.jsx)("span", {
                  className:
                    "ml-1 text-xl font-bold inline-block hover:text-gray-200",
                  children: "SpotifyDown",
                }),
              ],
            }),
          });
      function x(e) {
        let { visible: t, handleCloseClick: s } = e;
        return (
          (0, o.useEffect)(() => {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }, []),
          (0, a.jsxs)("div", {
            className: "semi-transparent fixed inset-0 w-screen h-screen justify-center items-center ".concat(
              t ? "flex" : "hidden"
            ),
            children: [
              (0, a.jsx)(i.FfE, {
                size: 32,
                className:
                  "ml-auto mr-4 mt-4 fixed top-0 right-0 cursor-pointer",
                onClick: s,
              }),
              (0, a.jsxs)("div", {
                className: "bg-zinc-800 h-96 w-full max-w-4xl z-50 rounded-2xl",
                children: [
                  t
                    ? (0, a.jsx)("ins", {
                        className: "min-h-280px block adsbygoogle",
                        "data-ad-client": "ca-pub-3682308768080338",
                        "data-ad-slot": "7681645900",
                        "data-ad-format": "auto",
                        "data-full-width-responsive": "true",
                      })
                    : (0, a.jsx)(a.Fragment, {}),
                  (0, a.jsx)("div", {
                    onClick: s,
                    className:
                      "text-sm border-2 cursor-pointer text-zinc-600 border-zinc-600 hover:bg-zinc-500 hover:text-black w-1/4 md:w-1/8 rounded-full p-1 mx-auto my-8 text-center",
                    children: "Close",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var f = function (e) {
        let { fullWidth: t, format: s } = e;
        return (
          (0, o.useEffect)(() => {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }, []),
          (0, a.jsx)("div", {
            className: "ad-container",
            children: (0, a.jsx)("ins", {
              className: "".concat(
                t ? "min-h-280px" : "min-h-50px sm:min-h-90px",
                " block adsbygoogle"
              ),
              "data-ad-client": "ca-pub-3682308768080338",
              "data-ad-slot": t ? "6293108938" : "5861864098",
              "data-ad-format": s,
              "data-full-width-responsive": t ? "true" : "false",
            }),
          })
        );
      };
      let y = () =>
          (0, a.jsxs)("div", {
            className: "animate-pulse",
            children: [
              (0, a.jsx)("div", { className: "w-64 h-64 m-auto bg-gray-800" }),
              (0, a.jsx)("div", {
                className: "m-auto bg-gray-800 w-64 h-4 rounded-full mt-3",
              }),
              (0, a.jsx)("div", {
                className: "bg-gray-800 w-16 h-4 mt-3 m-auto rounded-full",
              }),
            ],
          }),
        g = () =>
          (0, a.jsxs)("div", {
            className: "grid grid-cols-3 gap-4 mb-6 animate-pulse",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center truncate col-span-2",
                children: [
                  (0, a.jsx)("div", {
                    className: "bg-gray-800 w-4 h-6 text-left sm:mr-5",
                  }),
                  (0, a.jsx)("div", {
                    className: "sm:grid hidden bg-gray-800 w-16 h-16",
                  }),
                  (0, a.jsxs)("div", {
                    className: "text-left flex flex-col mx-5",
                    children: [
                      (0, a.jsx)("div", {
                        className: "bg-gray-800 w-64 h-4 rounded-full",
                      }),
                      (0, a.jsx)("div", {
                        className: "bg-gray-800 mt-4 w-32 h-3 rounded-full",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex items-center justify-end",
                children: (0, a.jsx)("div", {
                  className: "bg-gray-800 w-32 h-9 rounded-full",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center truncate col-span-2",
                children: [
                  (0, a.jsx)("div", {
                    className: "bg-gray-800 w-4 h-6 text-left sm:mr-5",
                  }),
                  (0, a.jsx)("div", {
                    className: "sm:grid hidden bg-gray-800 w-16 h-16",
                  }),
                  (0, a.jsxs)("div", {
                    className: "text-left flex flex-col mx-5",
                    children: [
                      (0, a.jsx)("div", {
                        className: "bg-gray-800 w-64 h-4 rounded-full",
                      }),
                      (0, a.jsx)("div", {
                        className: "bg-gray-800 mt-4 w-32 h-3 rounded-full",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex items-center justify-end",
                children: (0, a.jsx)("div", {
                  className: "bg-gray-800 w-32 h-9 rounded-full",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center truncate col-span-2",
                children: [
                  (0, a.jsx)("div", {
                    className: "bg-gray-800 w-4 h-6 text-left sm:mr-5",
                  }),
                  (0, a.jsx)("div", {
                    className: "sm:grid hidden bg-gray-800 w-16 h-16",
                  }),
                  (0, a.jsxs)("div", {
                    className: "text-left flex flex-col mx-5",
                    children: [
                      (0, a.jsx)("div", {
                        className: "bg-gray-800 w-64 h-4 rounded-full",
                      }),
                      (0, a.jsx)("div", {
                        className: "bg-gray-800 mt-4 w-32 h-3 rounded-full",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex items-center justify-end",
                children: (0, a.jsx)("div", {
                  className: "bg-gray-800 w-32 h-9 rounded-full",
                }),
              }),
            ],
          }),
        w = (e) => {
          let { cover: t, title: s, artists: o, type: n } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("img", {
                alt: "Cover of ".concat(s, " by ").concat(o),
                className: "object-cover h-48 h-48 sm:w-64 sm:h-64 m-auto",
                src: t,
                onError: (e) => {
                  e.target.src =
                    "https://spotifydown.com/static/default_cover.png";
                },
              }),
              (0, a.jsx)("p", {
                className: "font-bold text-main mt-2",
                children: s,
              }),
              (0, a.jsx)("p", { className: "text-submain my-1", children: o }),
            ],
          });
        },
        b = (e) => {
          let { trackList: t, buttonHandler: s, status: o } = e,
            { t: i } = (0, n.$G)("common");
          return (0, a.jsx)(a.Fragment, {
            children:
              !o &&
              t.map((e, t) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: "grid grid-cols-3",
                    children: [
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "flex items-center truncate col-span-2",
                          children: [
                            (0, a.jsxs)("span", {
                              className: "text-gray-300 text-left sm:mr-5",
                              children: [t + 1 >= 1 && t < 9 ? "0" : "", t + 1],
                            }),
                            (0, a.jsxs)("div", {
                              className: "text-left flex flex-col mx-5",
                              children: [
                                (0, a.jsx)("p", {
                                  className: "text-spotify-green truncate w-64",
                                  children: e.title,
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-submain mt-1 truncate w-64",
                                  children: e.artists,
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      ),
                      (0, a.jsx)("div", {
                        className: "flex items-center justify-end",
                        children: (0, a.jsx)("button", {
                          onClick: () => s(t, e),
                          className:
                            "w-24 sm:w-32 mt-2 p-2 cursor-pointer bg-button rounded-full text-gray-100 hover:bg-button-active",
                          children: i("download"),
                        }),
                      }),
                    ],
                  },
                  t
                )
              ),
          });
        };
      var j = s(7421);
      let v = (e) => {
        let { stats: t } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className:
                "grid grid-cols-2 lg:grid-cols-4 gap-4 items-center text-neutral-400 my-6",
              children: [
                (0, a.jsx)("p", { children: "Tracks Downloaded" }),
                (0, a.jsxs)("p", {
                  className: "text-2xl text-center",
                  children: [t.rt, " / ", t.tt],
                }),
                (0, a.jsx)("p", { children: "Total Zip Size" }),
                (0, a.jsx)("p", {
                  className: "text-2xl text-center",
                  children: t.ts ? t.ts.toFixed(2) + " MB" : "...",
                }),
              ],
            }),
            (0, a.jsx)("div", { className: "h-1 w-full bg-zinc-700 my-12" }),
          ],
        });
      };
      function N(e) {
        let {
          trackList: t,
          multiProgress: s,
          albumDetails: n,
          visible: i,
          stats: r,
          onAccept: l,
          onClose: c,
          isZipping: d,
        } = e;
        if (d)
          return (0, a.jsx)("div", {
            className: "fixed inset-0 semi-transparent w-full z-[99] justify-center items-center ".concat(
              i ? "flex" : "hidden"
            ),
            children: (0, a.jsxs)("div", {
              className:
                "bg-spotify-gray max-h-[80%] w-11/12 rounded-lg p-8 text-left overflow-y-auto",
              children: [
                "All the downloaded files are being zipped. Please wait...",
                t.length > 50
                  ? "There are many tracks, may take a little longer."
                  : "",
              ],
            }),
          });
        let { cover: m, type: u, title: h } = n,
          [p, x] = (0, o.useState)(!1),
          { t: f } = (0, j.$G)("common"),
          y = t.length;
        return (0, a.jsx)("div", {
          className: "fixed inset-0 semi-transparent w-full z-[99] justify-center items-center ".concat(
            i ? "flex" : "hidden"
          ),
          children: (0, a.jsx)("div", {
            className:
              "bg-spotify-gray max-h-[80%] w-11/12 rounded-lg p-8 text-left overflow-y-auto",
            children: p
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "text-2xl font-bold",
                      children: [
                        (0, a.jsx)("b", {
                          className: "capitalize",
                          children: u,
                        }),
                        " Download Manager",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "mb-6 mt-3 text-red-500",
                      children: [
                        "Please keep this tab open while we download all the tracks in this ",
                        u,
                      ],
                    }),
                    (0, a.jsx)(v, { stats: r }),
                    t.map((e, t) => {
                      var o;
                      return (0, a.jsxs)(
                        "div",
                        {
                          className:
                            "grid grid-cols-6 lg:grid-cols-4 mb-4 w-full text-center",
                          children: [
                            (0, a.jsxs)("span", {
                              className: "text-gray-300 lg:col-span-1",
                              children: [t + 1 >= 1 && t < 9 ? "0" : "", t + 1],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-spotify-green w-full px-4 col-span-3 lg:col-span-2 text-left",
                              children: (0, a.jsx)("div", {
                                className: "truncate",
                                children: e.title,
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-span-2 lg:col-span-1",
                              children: (
                                null === (o = s[e.id]) || void 0 === o
                                  ? void 0
                                  : o.done
                              )
                                ? (0, a.jsx)("div", {
                                    className: "text-green-600",
                                    children: "Downloaded",
                                  })
                                : (0, a.jsx)("div", {
                                    children: s[e.id]
                                      ? "".concat(s[e.id].dlSize)
                                      : "...",
                                  }),
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("p", {
                      className: "text-xl",
                      children: [
                        "Would you like to download all the tracks from the ",
                        (0, a.jsx)("b", {
                          className: "font-bold text-green-600 mr-2",
                          children: h,
                        }),
                        "?",
                      ],
                    }),
                    (0, a.jsxs)("p", {
                      className: "text-zinc-500 my-2",
                      children: [
                        "This ",
                        u,
                        " has ",
                        (0, a.jsxs)("b", {
                          className: "text-spotify-green",
                          children: [y, " tracks"],
                        }),
                        ", hence will require approximately ",
                        (0, a.jsx)("b", {
                          className: "text-red-500",
                          children: "~ ".concat(
                            Math.ceil((8 * y) / 60),
                            " minutes"
                          ),
                        }),
                        " to complete downloading. All the tracks are downloaded and zipped in your browser.  Downloading many tracks may or may not cause a lag on your device",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-x-4 mt-4",
                      children: [
                        (0, a.jsx)("button", {
                          onClick: () => {
                            x(!0), l();
                          },
                          className:
                            "w-24 sm:w-32 mt-2 p-2 cursor-pointer bg-button rounded-full text-gray-100 hover:bg-button-active",
                          children: f("yes"),
                        }),
                        (0, a.jsx)("button", {
                          onClick: () => {
                            x(!1), c();
                          },
                          className:
                            "w-24 sm:w-32 mt-2 p-2 cursor-pointer border-zinc-600 border-2 rounded-full text-gray-100 hover:bg-zinc-600",
                          children: f("no"),
                        }),
                      ],
                    }),
                  ],
                }),
          }),
        });
      }
      var k = s(6653),
        S = s(3162),
        D = s.n(S);
      let C = s(4077),
        F = s(5524),
        { downloadAllTracks: T } = s(5208),
        E = (e) => {
          let { enableDownloadAll: t } = e,
            [s, r] = (0, o.useState)(!1),
            [c, d] = (0, o.useState)({}),
            [j, v] = (0, o.useState)(!1),
            [S, E] = (0, o.useState)(""),
            [_, A] = (0, o.useState)([]),
            [M, I] = (0, o.useState)(0),
            [L, P] = (0, o.useState)([]),
            [z, B] = (0, o.useState)(!1),
            [U, O] = (0, o.useState)(""),
            [R, W] = (0, o.useState)(""),
            [Z, q] = (0, o.useState)(null),
            [G, Y] = (0, o.useState)(""),
            [$, H] = (0, o.useState)(null),
            [Q, V] = (0, o.useState)(null),
            [X, K] = (0, o.useState)({ rt: 0, tt: 0, ts: 0 }),
            [J, ee] = (0, o.useState)({}),
            [et, es] = (0, o.useState)(!1),
            { t: ea } = (0, n.$G)("common"),
            eo = (e) => {
              gtag && gtag("event", e, { nonInteraction: 1 });
            },
            en = (e) => {
              d({}), Y(""), A([]), I(0), v(e), H(null), O("");
            },
            ei = async (e) => {
              try {
                en(!0);
                let t = await fetch(
                  "https://api.spotifydown.com/metadata/track/".concat(e),
                  {}
                ).then((e) => e.json());
                if (!t.success) return Y(ea("unexpectedError")), v(!1);
                return (
                  A([
                    {
                      i: 0,
                      id: e,
                      artists: t.artists,
                      releaseDate: t.releaseDate,
                      title: t.title,
                      cover: t.cover,
                      album: t.album || t.title,
                    },
                  ]),
                  d(t),
                  eo("Song Search (Track)"),
                  v(!1)
                );
              } catch (s) {
                return console.log(s), O(""), Y(ea("unexpectedError")), v(!1);
              }
            },
            er = async (e, t) => {
              try {
                en(!0);
                let s = await fetch(
                    "https://api.spotifydown.com/metadata/"
                      .concat(e, "/")
                      .concat(t),
                    {}
                  ).then((e) => e.json()),
                  a = await fetch(
                    "https://api.spotifydown.com/trackList/"
                      .concat(e, "/")
                      .concat(t),
                    {}
                  ).then((e) => e.json());
                if (!s.success || !a.success)
                  return Y(ea("unexpectedError")), v(!1);
                return (
                  d({
                    title: s.title,
                    artists: s.artists,
                    cover: s.cover,
                    releaseDate: s.releaseDate,
                    type: e,
                  }),
                  a.trackList.forEach((t, a) => {
                    t.cover || (t.cover = s.cover),
                      (t.album = "album" == e ? s.title : t.album),
                      (t.i = a);
                  }),
                  H(a.nextOffset),
                  A(a.trackList),
                  eo("Song Search (".concat(e, ")")),
                  v(!1)
                );
              } catch (o) {
                return (
                  console.error(
                    "An error has occured while searching: ".concat(o)
                  ),
                  Y(ea("unexpectedError")),
                  en(!1)
                );
              }
            },
            el = async () => {
              try {
                Y(""), I(0), v(!0), O("");
                let e = S.split("/")[3],
                  t = S.split("/".concat(e, "/"))[1].split("?")[0],
                  s = await fetch(
                    "https://api.spotifydown.com/trackList/"
                      .concat(e, "/")
                      .concat(t, "?offset=")
                      .concat($),
                    {}
                  ).then((e) => e.json());
                if (!s.success) return Y(ea("unexpectedError")), v(!1);
                return (
                  s.trackList.forEach((e, t) => {
                    e.i = t;
                  }),
                  H(s.nextOffset),
                  A(s.trackList),
                  v(!1)
                );
              } catch (a) {
                console.error(
                  "An error has occured while searching: ".concat(a)
                ),
                  Y(ea("unexpectedError")),
                  en(!1);
              }
            },
            ec = (e, t) =>
              (clearInterval(e), I(0), t)
                ? Y(ea("unexpectedError"))
                : O("done");
          var ed = 0;
          let em = async (e, t) => {
              let s = setInterval(() => {
                (ed += Math.floor(20 * Math.random()) + 1) >= 100 && (ed = 100),
                  I(ed);
              }, 1e3);
              try {
                v(!0), O("processing");
                let a = await C.getDataMain(e, W, ea);
                eo("Convert Success"),
                  eo("Convert Method (main)"),
                  clearInterval(s),
                  I(0);
                let o = await F(a.link, t, I);
                if (!o.success) return ec(s, !0);
                return ec(s, !1), q(o.blobUrl), v(!1);
              } catch (n) {
                return (
                  eo("Convert Fail"), console.log(n), v(!1), O(""), ec(s, !0)
                );
              }
            },
            eu = (e, t) => {
              Q != e &&
                (j ||
                  (q(null),
                  O(""),
                  V(e),
                  d({
                    id: t.id,
                    title: t.title,
                    artists: t.artists,
                    cover: t.cover,
                  }),
                  em(t.id, t)));
            },
            eh = () => {
              T(_, P, K, c.title).then((e) => {
                let { fileName: t, zipFile: s } = e;
                eo("Download Zip Completed"),
                  K({ rt: 0, tt: 0, ts: 0 }),
                  P([]),
                  ee({ zipFile: s, fileName: t }),
                  es(!0),
                  D().saveAs(s, t),
                  setTimeout(() => {
                    B(!1);
                  }, 3e3);
              });
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(m, {}),
              (0, a.jsx)(p, {}),
              (0, a.jsxs)("div", {
                className: "m-auto max-w-4xl px-3 mt-5",
                children: [
                  !c.title &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("h1", {
                          className:
                            "mb-5 text-3xl sm:text-4xl text-center text-main",
                          children: "Spotify Downloader",
                        }),
                        (0, a.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, a.jsx)("input", {
                              onKeyDown: (e) => {
                                var t;
                                if (
                                  "Enter" != e.key ||
                                  j ||
                                  S.length < 1 ||
                                  (S.includes("spotify.link/") &&
                                    (eo("Spotify.link Link"),
                                    (async function () {
                                      v(!0);
                                      let e = await fetch(
                                        "https://api.spotifydown.com/convertUrl/".concat(
                                          encodeURIComponent(S)
                                        )
                                      ).then((e) => e.json());
                                      e.success
                                        ? "track" == e.type
                                          ? ei(e.id)
                                          : ("album" == e.type ||
                                              "playlist" == e.type) &&
                                            er(e.type, e.id)
                                        : Y(ea("unexpectedError"));
                                    })()),
                                  !S.includes("spotify.com/"))
                                )
                                  return;
                                S.includes("/track/") && (t = "track"),
                                  S.includes("/playlist/") && (t = "playlist"),
                                  S.includes("/album/") && (t = "album");
                                let s = S.split("?")[0]
                                  .split("#")[0]
                                  .split("&")[0]
                                  .split("/".concat(t, "/"))[1];
                                "track" == t && ei(s),
                                  ("album" == t || "playlist" == t) && er(t, s);
                              },
                              onChange: (e) => E(e.target.value),
                              className:
                                "searchInput bg-spotify-gray bg-opacity-70 rounded-full p-3 px-5 w-full text-gray-300 placeholder:text-gray-500 inline-block",
                              placeholder: "https://open.spotify.com/..../....",
                              required: !0,
                              "aria-label": "Spotify Link",
                              autoComplete: "off",
                              autoCapitalize: "none",
                              value: S,
                            }),
                            (0, a.jsxs)("button", {
                              onClick: () => {
                                navigator.clipboard.readText().then((e) => {
                                  E(e), eo("Paste Button Click");
                                });
                              },
                              className:
                                "border border-gray-500 hover:bg-gray-900 hover:border-gray-700 transition flex items-center absolute right-4 top-1 p-2 bg-spotify-gray rounded-full",
                              children: [
                                (0, a.jsx)(i.ud1, {}),
                                (0, a.jsx)("span", {
                                  className: "ml-1",
                                  children: ea("paste"),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("button", {
                          type: "submit",
                          onClick: () => {
                            var e;
                            if (
                              j ||
                              S.length < 1 ||
                              (S.includes("spotify.link/") &&
                                (eo("Spotify.link Link"),
                                (async function () {
                                  v(!0);
                                  let e = await fetch(
                                    "https://api.spotifydown.com/convertUrl/".concat(
                                      encodeURIComponent(S)
                                    )
                                  ).then((e) => e.json());
                                  e.success
                                    ? "track" == e.type
                                      ? ei(e.id)
                                      : ("album" == e.type ||
                                          "playlist" == e.type) &&
                                        er(e.type, e.id)
                                    : Y(ea("unexpectedError"));
                                })()),
                              !S.includes("spotify.com/"))
                            )
                              return;
                            S.includes("/track/") && (e = "track"),
                              S.includes("/playlist/") && (e = "playlist"),
                              S.includes("/album/") && (e = "album");
                            let t = S.split("?")[0]
                              .split("#")[0]
                              .split("&")[0]
                              .split("/".concat(e, "/"))[1];
                            "track" == e && ei(t),
                              ("album" == e || "playlist" == e) && er(e, t);
                          },
                          className:
                            "transition mt-3 w-full m-auto text-gray-100 cursor-pointer p-2 rounded-full bg-button hover:bg-button-active",
                          children: ea("download"),
                        }),
                      ],
                    }),
                  !c.title &&
                    G &&
                    !j &&
                    (0, a.jsx)("div", {
                      className: "text-center my-5",
                      children: (0, a.jsx)("p", {
                        className: "text-red-500 text-xl font-bold",
                        children: G,
                      }),
                    }),
                  (0, a.jsx)("div", {
                    className: "".concat(c.title ? "" : "mt-5"),
                    children: (0, a.jsx)(f, { fullWidth: !0, format: "auto" }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-5 m-auto text-center",
                    children: [
                      j &&
                        !U &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(y, {}), (0, a.jsx)(g, {})],
                        }),
                      c.title &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(w, {
                              title: c.title,
                              artists: c.artists,
                              type: c.type,
                              cover: c.cover,
                            }),
                            (0, a.jsx)("hr", {
                              className: "border-spotify-gray my-3 w-64 m-auto",
                            }),
                            !j &&
                              _.length >= 1 &&
                              !U &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  _.length > 1
                                    ? (0, a.jsx)("div", {
                                        className:
                                          "flex items-center justify-center",
                                        children: (0, a.jsxs)("button", {
                                          onClick: () => {
                                            if (
                                              (eo("Download Zip Click"),
                                              J.zipFile)
                                            )
                                              return D().saveAs(
                                                J.zipFile,
                                                J.fileName
                                              );
                                            B(!0);
                                          },
                                          className:
                                            "w-full md:w-1/2 lg:w-1/4 flex justify-center items-center gap-x-3 my-4 p-2 cursor-pointer bg-transparent rounded-full hover:bg-white hover:text-black border-2 text-white",
                                          children: [
                                            ea("Download Zip"),
                                            (0, a.jsx)(k.I4q, { size: 18 }),
                                          ],
                                        }),
                                      })
                                    : null,
                                  (0, a.jsx)(N, {
                                    onClose: () => B(!1),
                                    onAccept: eh,
                                    trackList: _,
                                    albumDetails: c,
                                    visible: z,
                                    multiProgress: L,
                                    stats: X,
                                    isZipping: et,
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "mb-12 grid grid-cols-1 gap-3 m-auto",
                                    children: (0, a.jsx)(b, {
                                      trackList: _,
                                      buttonHandler: eu,
                                      status: U,
                                    }),
                                  }),
                                  $ &&
                                    (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)("button", {
                                          onClick: () => {
                                            el(), eo("Load More Button Click");
                                          },
                                          className:
                                            "w-full m-auto text-gray-100 cursor-pointer p-1 rounded-full bg-button hover:bg-button-active",
                                          children: ea("loadMore"),
                                        }),
                                        (0, a.jsx)("p", {
                                          className:
                                            "mt-3 text-xs text-gray-400",
                                          children: ea("loadMoreMessage"),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            !j &&
                              0 == _.length &&
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)("p", {
                                  className: "text-gray-400 pb-4",
                                  children: ea("noTracks"),
                                }),
                              }),
                            !j &&
                              G &&
                              (0, a.jsx)("div", {
                                className: "text-center",
                                children: (0, a.jsx)("p", {
                                  className:
                                    "text-red-500 text-xl font-bold ,b-4",
                                  children: G,
                                }),
                              }),
                            U &&
                              "processing" == U &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsxs)("p", {
                                    className: "mb-2 text-gray-100",
                                    children: [
                                      R,
                                      ", ",
                                      ea("pleaseWait"),
                                      "...",
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "mb-3 bg-spotify-gray rounded-full",
                                    children: (0, a.jsxs)("div", {
                                      className:
                                        "transition-width transition-slowest ease duration-500 bg-button text-xs font-medium text-gray-100 text-center p-1.5 leading-none rounded-full",
                                      style: { width: "".concat(M, "%") },
                                      children: [" ", M, "%"],
                                    }),
                                  }),
                                ],
                              }),
                            U &&
                              "done" == U &&
                              Z &&
                              (0, a.jsxs)("div", {
                                className:
                                  "my-5 grid sm:grid-cols-2 gap-4 sm:gap-2",
                                children: [
                                  (0, a.jsxs)("a", {
                                    download: "spotifydown.com - ".concat(
                                      c.title,
                                      ".mp3"
                                    ),
                                    href: Z,
                                    onClick: () => {
                                      r(!0), eo("Download MP3 Button Click");
                                    },
                                    className:
                                      "transition p-2 cursor-pointer bg-button hover:bg-button-active text-gray-100 rounded-full",
                                    children: [ea("download"), " MP3"],
                                  }),
                                  (0, a.jsx)("a", {
                                    href: "/",
                                    className:
                                      "transition p-2 cursor-pointer bg-button hover:bg-button-active text-gray-100 rounded-full",
                                    onClick: () => {
                                      eo("Download Another Button Click");
                                    },
                                    children: ea("downloadAnother"),
                                  }),
                                ],
                              }),
                            (0, a.jsx)("div", {
                              className: "my-5",
                              children: (0, a.jsx)(f, {
                                fullWidth: !0,
                                format: "auto",
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, a.jsx)(l, {}),
                  (0, a.jsx)(h, {}),
                  (0, a.jsx)(u, {}),
                ],
              }),
              s &&
                (0, a.jsx)(x, {
                  visible: s,
                  handleCloseClick: () => {
                    r((e) => !e);
                  },
                }),
            ],
          });
        };
      var _ = !0,
        A = E;
    },
    5208: function (e, t, s) {
      "use strict";
      let a, o;
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = s(2648).Z,
        i = n(s(3300)),
        r = s(2189),
        l = n(s(5733)),
        c = s(8861);
      (0, i.default)("https://spotifydown.com/static/default_cover.png")
        .then((e) => (a = e.arrayBuffer()))
        .catch((e) => null);
      let d = async (e) => {
          let t;
          try {
            t = await (0, i.default)(e).then((e) => e.arrayBuffer());
          } catch (s) {
            t = a;
          }
          return t;
        },
        m = async (e, t) => {
          try {
            let s = e.id,
              a = await (0,
              i.default)("https://api.spotifydown.com/download/".concat(s), {
                headers: {
                  Referer: "https://spotifydown.com/",
                  Origin: "https://spotifydown.com",
                },
              });
            if (!a.ok) throw Error("failed api download");
            let n = await a.json();
            if (!n.success) throw Error("failed api parsing");
            let l = await (0, i.default)(n.link),
              m = l.body.getReader(),
              u = 0,
              h = [],
              p = (0, r.throttle)(700, () => {
                let s = {};
                (o = u / 1048576),
                  (s[e.id] = { dlSize: o.toFixed(2) + " MB" }),
                  t((t) => (t[e.id] && t[e.id].done ? t : { ...t, ...s }));
              });
            for (;;) {
              let { done: x, value: f } = await m.read();
              if (x) {
                t((t) => ((t[e.id].done = !0), t));
                break;
              }
              h.push(f), (u += f.length), p();
            }
            let y = await new Blob(h).arrayBuffer();
            (e.artists = e.artists.split(", ")),
              (e.coverArrayBuffer = await d(e.cover));
            let { ok: g, blob: w } = c.writeSongMetadata(y, e);
            if (!g) throw Error("failed adding metedata");
            return { ok: !0, blob: w, title: e.title };
          } catch (b) {
            return console.log(b), { ok: !1 };
          }
        },
        u = async (e, t, s) =>
          new Promise((a, o) => {
            let n = e.file(t, s);
            n ? a() : o();
          }),
        h = async (e, t, s, a) => {
          if (!e || e.length < 1) return;
          let n = 1,
            i = 0;
          s({ rt: 0, tt: e.length, ts: 0 });
          let r = [],
            c = 0;
          console.time("st");
          let d = [];
          for (let h of e) {
            let p = await m(h, t);
            if (!p.ok || !p.blob) {
              d.push(h);
              continue;
            }
            r.push(p), c++, (i += o), s({ rt: c, tt: e.length, ts: i });
          }
          for (let x of d) {
            let f = await m(x, t);
            f.ok &&
              f.blob &&
              (r.push(f), c++, (i += o), s({ rt: c, tt: e.length, ts: i }));
          }
          console.timeEnd("st");
          let y = (0, l.default)(),
            g = [];
          for (let w of r) {
            if (!w.blob) continue;
            let b = await u(
              y,
              "".concat((null == w ? void 0 : w.title) || n++, ".mp3"),
              w.blob
            );
            g.push(b);
          }
          let j = await y.generateAsync({ type: "blob" }),
            v = URL.createObjectURL(j);
          return { zipFile: v, fileName: "".concat(a, "_SpotifyDown_com.zip") };
        };
      e.exports = { downloadAllTracks: h };
    },
    8861: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = s(2648).Z,
        o = a(s(4362)),
        n = "https://api.spotifydown.com";
      e.exports = class {
        static async getMetadata(e, t) {
          if (!["track", "album", "playlist"].includes(e))
            throw Error("invalid type");
          if (!t) throw Error("no id");
          try {
            let s = await fetch(
              "".concat(n, "/metadata/").concat(e, "/").concat(t),
              {}
            );
            if (!s.ok) throw Error("Fetch failed with status, " + s.status);
            let a = await s.json();
            if (!a.success) throw Error("API Response error, " + a);
            let {
              artists: o,
              releaseDate: i,
              title: r,
              cover: l,
              album: c,
            } = a;
            return {
              ok: !0,
              i: 0,
              id: t,
              artists: o,
              releaseDate: i,
              title: r,
              cover: l,
              album: c || r,
            };
          } catch (d) {
            return console.error(d), { ok: !1 };
          }
        }
        static async getTrackList(e, t) {
          let s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          if (!["album", "playlist"].includes(e)) throw Error("invalid type");
          if (!t) throw Error("no id");
          try {
            let a = await fetch(
              ""
                .concat(n, "/trackList/")
                .concat(e, "/")
                .concat(t)
                .concat(s ? "?offset=".concat(s) : ""),
              {}
            );
            if (!a.ok) throw Error("Fetch failed with status, " + a.status);
            let o = await a.json();
            if (!o.success) throw Error("API Response error, " + o);
            let { nextOffset: i, trackList: r } = o;
            return { ok: !0, nextOffset: i, trackList: r };
          } catch (l) {
            return console.error(l), { ok: !1 };
          }
        }
        static async convertSpotifyLink(e) {
          if (!e) throw Error("no link");
          try {
            let t = await fetch(
              "".concat(n, "/convertUrl/").concat(encodeURIComponent(e)),
              {}
            );
            if (!t.ok) throw Error("Fetch failed with status, " + t.status);
            let s = await t.json();
            if (!s.success) throw Error("API Response error, " + s);
            let { type: a, id: o } = s;
            return { ok: !0, type: a, id: o };
          } catch (i) {
            return console.error(i), { ok: !1 };
          }
        }
        static writeSongMetadata(e, t) {
          if (!e) return { ok: !1, emptySongBuffer: !0 };
          let {
              title: s,
              artists: a,
              album: n,
              releaseDate: i,
              coverArrayBuffer: r,
            } = t,
            l = new o.default(e);
          l
            .setFrame("TIT2", s)
            .setFrame("TPE1", a)
            .setFrame("TALB", n || s)
            .setFrame("TYER", i ? i.split("-")[0] : "1970")
            .setFrame("COMM", {
              description: "n",
              text: "Converted by https://spotifydown.com",
              language: "eng",
            })
            .setFrame("APIC", {
              type: 3,
              data: r,
              description: "Cover of ".concat(s, " by ").concat(a),
            }),
            l.addTag();
          let c = l.getBlob();
          return { ok: !0, blob: c };
        }
      };
    },
    5524: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = s(2648).Z,
        o = a(s(4362)),
        n = a(s(3300));
      e.exports = async (e, t, s, a) => {
        try {
          var i;
          let r = await (0, n.default)(e),
            l = r.body.getReader(),
            c = +r.headers.get("Content-Length") || 10811245,
            d = 0,
            m = [],
            u = setInterval(() => {
              let e = Math.floor((d / c) * 100);
              s(e);
            }, 1e3);
          for (;;) {
            let { done: h, value: p } = await l.read();
            if (h) {
              clearInterval(u);
              break;
            }
            m.push(p), (d += p.length);
          }
          if (!r.ok) {
            let x = await (0, n.default)(
                "https://dl-test.spotifydown.com/download/".concat(a)
              ),
              f = await x.blob(),
              y = URL.createObjectURL(f);
            return { success: !0, blobUrl: y };
          }
          let g = await new Blob(m).arrayBuffer();
          try {
            i = await (0, n.default)(t.cover).then((e) => e.arrayBuffer());
          } catch (w) {
            i = await (0, n.default)(
              "https://spotifydown.com/static/default_cover.png"
            ).then((e) => e.arrayBuffer());
          }
          let b = [];
          t.artists.split(", ").forEach((e) => {
            b.push(e);
          });
          let j = new o.default(g);
          j
            .setFrame("TIT2", t.title)
            .setFrame("TPE1", b)
            .setFrame("TALB", t.album || t.title)
            .setFrame(
              "TYER",
              t.releaseDate ? t.releaseDate.split("-")[0] : "1970"
            )
            .setFrame("COMM", {
              description: "n",
              text: "Converted by https://spotifydown.com",
              language: "eng",
            })
            .setFrame("APIC", {
              type: 3,
              data: i,
              description: "Cover of "
                .concat(t.title, " by ")
                .concat(t.artists),
            }),
            j.addTag();
          let v = j.getBlob(),
            N = URL.createObjectURL(v);
          return { success: !0, blobUrl: N };
        } catch (k) {
          return console.log(k), { success: !1 };
        }
      };
    },
    4077: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = s(2648).Z,
        o = a(s(3300)),
        n = async (e, t, s) => {
          try {
            t(s("converting"));
            let a = await (0, o.default)(
              "https://api.spotifydown.com/download/".concat(e),
              {}
            ).then((e) => e.json());
            if (!a.success) return { success: !1 };
            return (
              t(s("downloading")), { success: !0, link: a.link, method: 1 }
            );
          } catch (n) {
            return console.log(n), i(e, t, s);
          }
        },
        i = async (e, t, s) => {
          try {
            t(s("converting"));
            let a = await (0, o.default)(
                "https://api.spotifydown.com/getId/".concat(e),
                {}
              ).then((e) => e.json()),
              n = await (0, o.default)("https://co.wuk.sh/api/json", {
                headers: {
                  accept: "application/json",
                  "content-type": "application/json",
                },
                body: '{"url":"https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D'.concat(
                  a.id,
                  '","aFormat":"mp3","dubLang":false,"isAudioOnly":true,"isNoTTWatermark":true}'
                ),
                method: "POST",
              }).then((e) => e.json());
            if (!n.url) return { success: !1 };
            return t(s("downloading")), { success: !0, link: n.url };
          } catch (i) {
            return console.log(i), { success: !1 };
          }
        };
      e.exports = { getDataMain: n, getDataBackup: i };
    },
  },
  function (e) {
    e.O(0, [874, 107, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
