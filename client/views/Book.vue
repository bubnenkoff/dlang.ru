<template lang="pug">
    .container
        .gh-btns
            gh-btns-watch(slug="bubnenkoff/dlang.ru", show-count)
            gh-btns-star(slug="bubnenkoff/dlang.ru", show-count)
            gh-btns-fork(slug="bubnenkoff/dlang.ru", show-count)
        div(v-html="this.book_content")
</template>

<script>
    import Showdown from 'showdown';
    import hljs from 'highlight.js/lib/highlight';
    import d from 'highlight.js/lib/languages/d';
    hljs.registerLanguage('d', d);
    import 'highlight.js/styles/monokai-sublime.css';

    export default {
        name: 'Book',
        data () {
            return {
                book_content: ''
            }
        },
        created()
        {
            this.$axios.get("/book.md")
                .then(response => {
                    let converter = new Showdown.Converter();
                    converter.setOption('customizedHeaderId', true);
                    let res = converter.makeHtml(response.data);
                    res = res.replace(
                        /(<pre><code.+?class=".*?language-d.*?)(">)(.*?)(<\/code><\/pre>)/gs,
                        (m, p1, p2, p3, p4) => {
                            // fix issue #1
                            let hl = hljs.highlight("d", p3).value;
                            hl = hl.replace(/&amp;((?:gt|lt|amp);)/g, '&$1');
                            return p1 + " hljs" + p2 + hl + p4;
                        }
                    );
                    this.book_content = res;
                })
               .catch((error) => {
                   console.log("Can't fetch book content from server: /book.md");
                   console.log(error);
               })
        }

    }
</script>

<style>

</style>