<template lang="pug">
    a(:href="this.to", :class="this.class", :target="this.target") {{this.name}}
</template>

<script>
    export default {
        name: 'Btn',
        props: {
            to: {
                type: String,
                default: '/'
            },
            name: {
                type: String,
                default: 'Ссылка'
            },
            class: {
                type: String,
                default: 'btn'
            },
            target: {
                type: String,
                default: '_self'
            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    .btn {
        display: inline-block;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        background-color: #E9E9E9;
        color: #333;
        border: none;
        box-shadow: 1px 1px 0 rgba(0,0,0,0.2);
        transition: 0.5s;
        font-weight: bold;

        &:hover {
            background-color: #dfdfdf;;
        }
    }
    .btn + .btn {
        margin-left: 1rem;
    }
</style>