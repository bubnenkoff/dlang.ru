<template lang="pug">
    div
        fixed-header
            header
                .container
                    router-link.logo(to="/"): img(src="@/assets/dlogo.svg", alt="Dlang.ru")
                    nav.header-link
                        router-link(to="/") Главная
                        router-link(to="/faq") FAQ
                        router-link(to="/links") Ссылки
                        router-link(to="/book") Online-учебник
                        a.header-link__telegram(href="https://t.me/dlangru" target="_blank")
                            img(src="@/assets/img/telegram.svg", alt="Telegram")
                        a.header-link__github(href="https://github.com/DarkRiDDeR/dlang.ru" target="_blank")
                            img(src="@/assets/img/github.svg", alt="GitHub")
        .header-substrate
        router-view
        back-to-top(text="", bottom="25px", right="13px")
</template>

<script>
import FixedHeader from 'vue-fixed-header';
import BackToTop from 'vue-backtotop'

export default {
    name: 'App',
    components: {
        FixedHeader,
        BackToTop
    }
}
</script>

