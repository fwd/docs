window.load = function() {

    $('.primary-menu ul.navbar-nav li.dropdown, .login-signup ul.navbar-nav li.dropdown').on("mouseover", function() {
        if ($(window).width() > 991) {
            $(this).find('> .dropdown-menu').stop().slideDown('fast');
            $(this).bind('mouseleave', function() {
            $(this).find('> .dropdown-menu').stop().css('display', 'none'); 
            });
        }
    });

    $('.primary-menu ul.navbar-nav .dropdown-menu').each(function() {
        var menu = $('#header .container-fluid').offset();
        var dropdown = $(this).parent().offset();

        var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#header .container-fluid').outerWidth());

        if (i > 0) {
            $(this).css('margin-left', '-' + (i + 5) + 'px');
        }
    });

    $('.primary-menu ul.navbar-nav').find('a.dropdown-toggle').append($('<i />').addClass('arrow'));

    $('.primary-menu .navbar-nav .dropdown-toggle[href="#"], .primary-menu .dropdown-toggle[href!="#"] .arrow').on('click', function(e) {
        if ($(window).width() < 991) {
            e.preventDefault();
            var $parentli = $(this).closest('li');
            $parentli.siblings('li').find('.dropdown-menu:visible').slideUp();
            $parentli.find('> .dropdown-menu').stop().slideToggle();
            $parentli.siblings('li').find('a .arrow.show').toggleClass('show');
            $parentli.find('> a .arrow').toggleClass('show');
        }
    });

    $('.popup-img').each(function() {
        $(this).magnificPopup({
            type: "image",
            tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
            closeOnContentClick: !0,
            mainClass: "mfp-fade",
            
        });
    });

    $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

    $(function () {
        $(window).on('scroll', function(){
            if ($(this).scrollTop() > 400) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
        });

    $('#back-to-top').on("click", function() {
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

}

Vue.use(VueMarkdown);

var app = new Vue({
    el: '#main-wrapper',
    data: {
        loaded: false,
        href: false,
        show: false,
        message: '<%- message %>',
        darkMode: false,
        menu: false,
        active: false,
        config: {}
    },
    computed: {
        logoIsImage() {
            if (!this.config || !this.config.logo) return
            return this.config && this.config.logo && this.config.logo.toLowerCase().includes('.png') || this.config.logo.toLowerCase().includes('.jpg') || this.config.logo.toLowerCase().includes('.gif') || this.config.logo.toLowerCase().includes('.jpeg')
        }
    },
    mounted() {

        var self = this

        if (localStorage.getItem('darkMode') == 'true' || localStorage.getItem('darkMode') !== 'false' && (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            localStorage.setItem('darkMode', true)
        }

        this.reload()

        this.loaded = true

    },
    methods: {
        pushtag(item) {
            history.pushState({}, '', `#${item}`);
        },
        pushstate(item) {
            // var new_path = (window.location.origin + window.location.pathname)
            history.pushState({}, '', `${item.replace('/', '')}`)
        },
        closeNav() {
            this.menu = false
        },
        scrollTop(i, href) {
            $('html,body').animate({
                scrollTop: 0
            }, 50);
        },
        scrollTo(i, href) {
            var self = this
            href = href || i.href
            $('html,body').animate({
                scrollTop: $('#' + href).offset() ? $('#' + href).offset().top - 100 : 0
            }, 50, function() {
                if (href) self.pushtag(href)
            });
            this.href = href
        },
        reload() {
            var self = this
            this.load((data) => {

                document.title = data.title || 'Docs'

                window.load()

                hljs.initHighlighting.called = false;
                hljs.initHighlighting();

                $('.lds-ellipsis').fadeOut(); 
                $('.preloader').delay(333).fadeOut('slow');
                $('body').delay(333);
                
                var hash = window.location.pathname.split('/').pop() ? '/' + window.location.pathname.split('/').pop() : window.location.hash
                    // hash = window.location.pathname !== '/' ? window.location.pathname : window.location.hash

                if (hash == '/faq') {
                    this.show = 'faq'
                    return 
                }

                if (hash == '/changelog') return this.show = 'changelog'; this.active = true; 

                this.section(data.sections[0])

                var found = data.sections.find(a => {
                    var url = a.file || a.url
                    return ('#' + self.slug(a.title).toLowerCase()) === hash.replace('/', '#') || url.includes(`pages/${hash.replace('/', '').replace('.md', '') + '.md'}`)
                })

                if (found) {
                    setTimeout(() => {
                        this.section(found)
                    }, 100)
                    return
                }

                if (hash && self.config.redirect) {
                    for (var i of this.config.redirect) {
                        if (i.path === hash.replace('#', '').replace('/', '')) {
                            this.section({ title: '', file: i.file })
                        }
                    }
                }

                if (hash && !self.config.redirect) {
                    setTimeout(() => {
                        self.redirect(hash)
                    }, 500)
                }

            })
        },
        redirect(hash) {
            window.location.hash = '#' + hash.replace('#', '').replace('/', '')
            return 
        },
        toggleDarkMode() {
            if (localStorage.getItem('darkMode') == 'true') {
                // this.darkMode = false
                localStorage.setItem('darkMode', false)
                document.documentElement.classList.remove('dark-mode');
            } else {
                // this.darkMode = true
                // document.documentElement.classList.remove('dark-mode');
                document.documentElement.className += ' dark-mode'
                localStorage.setItem('darkMode', true)
            }
            // window.location.reload()
        },
        generateLinkMarkup($contentElement) {
          const headings = [...$contentElement.querySelectorAll('h1, h2')]
          const parsedHeadings = headings.map(heading => {
            return {
              title: heading.innerText,
              depth: heading.nodeName.replace(/\D/g,''),
              id: heading.getAttribute('id')
            }
          })
          return parsedHeadings
        },
        parseMarkdown(markdownText) {
            var converter = new showdown.Converter({ tasklists: true, rawHeaderId: true, })
            return converter.makeHtml(markdownText);
        },
        title(text) {
            return text.trim().replace(/[^\.\w\s-]/g, '')
        },
        slug(text) {
            return text.toLowerCase().trim().replace(/[^\w\s-]/g, '').trim().replace(/[\s_-]+/g, '-')
        },
        section(i) {
            var self = this
            if (!i) return
            i.slug = this.slug(i.title)
            var url = i.file || i.url
            if (url) {
                var path = url
                // if (!url.includes('://')) {
                //     url = window.location.origin + ((window.location.pathname.split('/')[1] ? '/' + window.location.pathname.split('/')[1] : '') + '/') + url
                // }
                axios.get(url.replace('.md', '') + '.md').then((res) => {
                    i.template = res.data
                    this.active = i
                    setTimeout(() => {
                        hljs.initHighlighting.called = false;
                        hljs.initHighlighting();
                        var titles = i.template.match(/^## (.*$)/gim)
                            titles = titles ? titles.map(a => {
                                return {
                                    title: self.title(a),
                                    href: self.slug(a)
                                }
                            }) : titles
                        self.active.titles = titles
                        self.$forceUpdate()
                        if (self.loaded) self.pushstate('/' + i.slug + (window.location.hash ? window.location.hash : ''))
                        if (window.location.hash) {
                            setTimeout(() => {
                                self.scrollTo(null, window.location.hash.replace('#', ''))
                            }, 500)
                        }
                        document.title = i.title  + ' - ' + self.config.title;
                    }, 100)
                })
                return
            }
            // console.log("a")
            this.active = i
            if (i.text || i.markdown) i.template = i.text || i.markdown
            setTimeout(() => {
                hljs.initHighlighting.called = false;
                hljs.initHighlighting();
                var titles = i.template.match(/^## (.*$)/gim)
                    titles = titles ? titles.map(a => {
                        return {
                            title: self.title(a),
                            href: self.slug(a.title)
                        }
                    }) : titles
                self.active.titles = titles
                self.show = false
                // console.log( i.slug )
                // history.pushState({}, '', '#' + self.slug(i.title));
                self.$forceUpdate()
            }, 100)
        // console.log( "SDfdf" )
        },
        load(cb) {
            axios.get('./config.json').then((res) => {
                this.config = res.data
                if (cb) cb(res.data)
            }).catch((e) => {
                if (e.message.includes('properties of')) {
                    alert('The config JSON has bad syntax. Fix it, please. Use a "JSON Linter" to find issue easily.')
                } else {
                    alert("Error:", e.message)
                }
            })
        }
    }
})
