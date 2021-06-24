<template lang="pug">
    div.main-page
        div.top

            .free_bel
                img(src="@/assets/img/free_bel.png" alt="")
                div За свободу и за уважение воли беларусского народа!
            .container
                h1 Dlang
                p D — это мультипарадигмальный компилируемый  язык программирования общего назначения со  статической типизацией и Си-подобным  синтаксисом.
                img(src="@/assets/img/notebook.png" alt="")
        section.props
            .container
                .wrap
                    h2 D является кульминацией десятилетий опыта разработки компиляторов для разнообразных языков и содержит множество уникальных особенностей:
                    ul
                        li высокоуровневые конструкции для мощного моделирования;
                        li высокая производительность, компилируемый язык;
                        li статическая типизация;
                        li прямой доступ к API операционной системы и железу;
                        li невероятно высокая скорость компиляции;
                        li позволяет программировать с безопасным доступом к памяти (SafeD);
                        li поддерживаемый, лёгкий для понимания код;
                        li короткая кривая обучения (C-подобный синтаксис, сходный с Java и другими языками);
                        li совместим с C ABI (Application Binary Interface; можно компоновать напрямую с библиотеками, написанными на языке C);
                        li ограниченно совместим с C++ ABI;
                        li мультипарадигменный (императивное, структурное, объектно-ориентированное, обобщённое, чисто функциональное и даже ассемблерное программирование);
                        li встроенная профилактика ошибок (контракты, юнит-тесты);
                        li
                            | и множество других&#32;
                            a(href="http://dlang.org/overview.html" target="_blank") особенностей
                            span.en
                            |.

        section.tiles
            .mark-block-l
            .container
                h2 Скачать
                .tiles-images
                    .tiles-images__dmd: img(src="@/assets/img/dmd.png" alt="DMD")
                    .tiles-images__ldc: img(src="@/assets/img/ldc.png" alt="LDC")
                    .tiles-images__gdc: img(src="@/assets/img/gdc.png" alt="GDC")
                .tiles-items
                    .tiles-items__item
                        h3 DMD
                        ul
                            li официальный референсный компилятор;
                            li наиболее полно реализует стандарт языка;
                            li простая установка;
                            li высокая скорость компиляции.
                    .tiles-items__item
                        h3 LDC
                        ul
                            li фронтэнд для LLVM;
                            li генерирует хорошо оптимизированный код;
                            li поддерживает множество платформ и архитектур.
                    .tiles-items__item
                        h3 GDC
                        ul
                            li фронтэнд для компилятора GCC;
                            li генерирует хорошо оптимизированный код;
                            li отличная поддержка GDB.

                .tiles-os
                    .tiles-os__item
                        div: img(src="@/assets/img/os/windows.svg" alt="" title="Windows")
                        div: img(src="@/assets/img/os/linux.png" alt="" title="Linux")
                        div: img(src="@/assets/img/os/xos.png" alt="" title="X OS")
                        div: img(src="@/assets/img/os/freebsd.png" alt="" title="FreeBSD")
                    .tiles-os__item
                        div: img(src="@/assets/img/os/windows.svg" alt="" title="Windows")
                        div: img(src="@/assets/img/os/linux.png" alt="" title="Linux")
                        div: img(src="@/assets/img/os/xos.png" alt="" title="X OS")
                        div: img(src="@/assets/img/os/freebsd.png" alt="" title="FreeBSD")
                        div: img(src="@/assets/img/os/opensolaris.png" alt="" title="OpenSolaris")
                        div: img(src="@/assets/img/os/android.png" alt="" title="Android")
                        div
                            img(src="@/assets/img/os/ios.png" alt="" title="iOS")
                            div untested
                    .tiles-os__item
                        div
                            img(src="@/assets/img/os/windows.svg" alt="" title="Windows")
                            div alpha
                        div: img(src="@/assets/img/os/linux.png" alt="" title="Linux")
                        div
                            img(src="@/assets/img/os/xos.png" alt="" title="X OS")
                            div untested
                        div
                            img(src="@/assets/img/os/freebsd.png" alt="" title="FreeBSD")
                            div untested
                .tiles-btns
                    .tiles-btns__item
                        Btn(name="Скачать", target="_blank", to="https://dlang.org/tiles.html#dmd")
                        Btn(name="Wiki",    target="_blank", to="https://wiki.dlang.org/DMD")
                    .tiles-btns__item
                        Btn(name="Скачать", target="_blank", to="https://github.com/ldc-developers/ldc#installation")
                        Btn(name="Wiki",    target="_blank", to="https://wiki.dlang.org/LDC")
                    .tiles-btns__item
                        Btn(name="Скачать", target="_blank", to="https://gcc.gnu.org/")
                        Btn(name="Wiki",    target="_blank", to="https://wiki.dlang.org/GDC")
        section.tiles
            .mark-block-r
            .container
                h2 Редакторы и IDE для языка программирования D
                .tiles-images
                    div: img(src="@/assets/img/vscode.png" alt="Visual Studio Code")
                    div: img(src="@/assets/img/visual-d.png" alt="Visual-D")
                    div: img(src="@/assets/img/idea.png" alt="Плагин IntelliJ")
                .tiles-items
                    .tiles-items__item
                        h3 Visual Studio Code
                        div
                            p Редактор исходного кода, разработанный Microsoft для Windows, Linux и macOS.
                            ul
                                li подсветка синтаксиса;
                                li автодополнение кода;
                                li навигация по коду;
                                li форматирование;
                                li сборка.

                    .tiles-items__item
                        h3 Visual-D
                        div
                            p Плагин для Visual Studio, добавляющий поддрежку языка D, и предоставляющий возможность управления проектом.
                            ul
                                li подсветка синтаксиса;
                                li подсветка синтаксических ошибок;
                                li автодополнение кода;
                                li навигация по коду;
                                li форматирование;
                                li сборка.

                    .tiles-items__item
                        h3 Плагин IntelliJ
                        div
                            p Плагин для популярной интегрированной среды разработки IntelliJ IDEA компании JetBrains.
                            ul
                                li поддержка проектов DUB;
                                li подсветка синтаксиса;
                                li автодополнение кода;
                                li навигация по коду;
                                li форматирование;
                                li рефакторинг.
                .tiles-btns
                    .tiles-btns__item
                        Btn(name="Перейти", target="_blank", to="https://code.visualstudio.com/")
                    .tiles-btns__item
                        Btn(name="Перейти", target="_blank", to="https://rainers.github.io/visuald/visuald/StartPage.html")
                    .tiles-btns__item
                        Btn(name="Перейти", target="_blank", to="https://github.com/intellij-dlanguage/intellij-dlanguage")
                p.tiles__info
                    | Полный список <a href="https://wiki.dlang.org/IDEs" target="_blank">IDE</a>,
                    | <a href="https://wiki.dlang.org/Editors" target="_blank">редакторов</a> с поддержкой D

        div.quote
            .container
                img(src="@/assets/img/andrey.png" alt="")
                .quote-block
                    p.quote-block__text D – это язык программирования, цель которого – помочь программистам справиться с непростыми современными проблемами разработки программного обеспечения. Он создает все условия для организации взаимодействия модулей через точные интерфейсы, поддерживает целую федерацию тесно взаимосвязанных парадигм программирования (императивное, объектно-ориентированное, функциональное и метапрограммирование), обеспечивает изоляцию потоков, модульную безопасность типов, предоставляет рациональную модель памяти и многое другое.
                    div.quote-block__author Андрей Александреску

        section.company
            .container
                h2 Язык программирования D используют
                div.company-items
                    a(target="_blank" href="https://medium.com/@NetflixTechBlog/introducing-vectorflow-fe10d7f126b8")
                        img(src="@/assets/img/companies/netflix.png" alt="Netflix")
                    a(target="_blank" href="https://dlang.org/blog/2017/05/24/faster-command-line-tools-in-d/")
                        img(src="@/assets/img/companies/ebay.jpg" alt="Ebay")
                    a(target="_blank" href="https://dconf.org/2017/talks/watson.html")
                        img(src="@/assets/img/companies/remedy.png" alt="Remedy")
                    a(target="_blank" href="https://dconf.org/2016/talks/lucarella.html")
                        img(src="@/assets/img/companies/sociomantic.png" alt="Sociomantic")
                    a(target="_blank" href="http://tech.adroll.com/blog/data/2014/11/17/d-is-for-data-science.html")
                        img(src="@/assets/img/companies/ad_roll.png" alt="AdRoll")
                    a(target="_blank" href="https://dconf.org/2016/talks/zvibel.html")
                        img(src="@/assets/img/companies/weka.png" alt="Weka.IO")
</template>

<script>
    import Btn from "../components/Btn.vue";

    export default {
        name: 'Main',
        components: { Btn },
    }
</script>
