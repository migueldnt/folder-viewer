<template>
    <div class="folder-viewer-toolbar">
        <div class="title">
            <span class="nav-item">Title</span>
            <span class="icon fv-angle-right"></span>
            <span class="nav-item">del contenedor</span>
        </div>
        <div class="buttons">
            <button title="Vista de cuadricula">
                <span class="icon fv-thumbnails"></span>
            </button>
            <button title="Vista de lista">
                <span class="icon fv-list"></span>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss">
    .folder-viewer-toolbar{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        min-height: 2.5em;
        background-color: var(--fv-secondary-bg-color);
        color: var(--fv-secondary-text-color);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        .buttons{
            flex-grow: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-right: .5em;

            button{
                margin-left: 0.25em;
                height: 1.8em;
                width: 1.8em;
                border: none;
                background-color: #1565c0;
                color: white;
                font-size: 1.2em;
                padding: .25em;
                border-radius: 3px;
                cursor: pointer;
                &:hover{
                    background-color: #0288d1;
                }
            }
        }
        .title{
            flex-grow: 9;
            display: flex;
            align-items: center;
            padding-left: .5em;
            span.icon{
                line-height: 1;
            }
            span.nav-item{
                cursor: pointer;
                padding: 0 3px 0 3px;
                margin: 0 -3px 0 -3px;
                &:hover{
                    background-color: var(--fv-hover-bg-color);
                    border-radius: 3px;
                }
            }
        }
    }
</style>