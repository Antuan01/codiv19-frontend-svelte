<script>
    import {
        beforeUpdate,
        onDestroy,
        onMount,
        setContext as baseSetContext,
        SvelteComponent,
    } from "svelte";
    import {fade} from "svelte/transition";

    export let key = "simple-modal";
    export let closeButton = true;
    export let closeOnEsc = true;
    export let closeOnOuterClick = true;
    export let styleBg = {top: 0, left: 0};
    export let styleWindow = {};
    export let styleContent = {};
    export let styleCloseButton = {};
    export let setContext = baseSetContext;
    export let transitionBg = fade;
    export let transitionBgProps = {duration: 250};
    export let transitionWindow = transitionBg;
    export let transitionWindowProps = transitionBgProps;

    const isIos = /iP(hone|od|ad)/i.test(window.navigator.platform);

    const defaultState = {
        closeButton,
        closeOnEsc,
        closeOnOuterClick,
        styleBg,
        styleWindow,
        styleContent,
        styleCloseButton,
        transitionBg,
        transitionBgProps,
        transitionWindow,
        transitionWindowProps,
    };
    let state = {...defaultState};

    let Component = null;
    let props = null;

    let background;
    let wrap;
    let modalWindow;
    let mutationObserver;
    //lifecicles

    beforeUpdate(() => {
        if (props && props.opened) {
            setCenteredModal();
            document.body.classList.add("modal-opened");
        }
    });

    const setCenteredModal = (type = null) => {
        if (modalWindow && isContentBiggerThanWindow(modalWindow)) {
            document.documentElement.style.setProperty("--modal-display", "block");
            if (!type && mutationObserver) mutationObserver.disconnect();
        }
    };
    const isContentBiggerThanWindow = contentRef => {
        return (
            contentRef.offsetHeight >=
            window.innerHeight - Math.ceil(parseFloat(getComputedStyle(contentRef).marginTop) * 2)
        );
    };
    const setMutationObserver = () => {
        mutationObserver = new MutationObserver(this.mutationObserverCallback);
        mutationObserver.observe(modalWindow, {childList: true, subtree: true});
    };

    const camelCaseToDash = str => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();

    const toCssString = props =>
        Object.keys(props).reduce(
            (str, key) => `${str}; ${camelCaseToDash(key)}: ${props[key]}`,
            ""
        );

    const isSvelteComponent = component => SvelteComponent.isPrototypeOf(component);

    $: cssBg = toCssString(state.styleBg);
    $: cssWindow = toCssString(state.styleWindow);
    $: cssContent = toCssString(state.styleContent);
    $: cssCloseButton = toCssString(state.styleCloseButton);
    $: currentTransitionBg = state.transitionBg;
    $: currentTransitionWindow = state.transitionWindow;

    const toVoid = () => {};
    let onOpen = toVoid;
    let onClose = toVoid;
    let onOpened = toVoid;
    let onClosed = toVoid;

    //open-close
    const open = (NewComponent, newProps = {}, options = {}, callback = {}) => {
        console.log(newProps);
        Component = NewComponent;
        props = {...newProps, opened: true};
        state = {...defaultState, ...options};
        onOpen = callback.onOpen || toVoid;
        onClose = callback.onClose || toVoid;
        onOpened = callback.onOpened || toVoid;
        onClosed = callback.onClosed || toVoid;
    };

    const close = (callback = {}) => {
        document.body.classList.remove("modal-opened");
        onClose = callback.onClose || onClose;
        onClosed = callback.onClosed || onClosed;
        Component = null;
        props = null;
    };
    //key handlers
    const handleKeydown = event => {
        if (state.closeOnEsc && Component && event.key === "Escape") {
            event.preventDefault();
            close();
        }

        if (Component && event.key === "Tab") {
            // trap focus
            const nodes = modalWindow.querySelectorAll("*");
            const tabbable = Array.from(nodes).filter(node => node.tabIndex >= 0);

            let index = tabbable.indexOf(document.activeElement);
            if (index === -1 && event.shiftKey) index = 0;

            index += tabbable.length + (event.shiftKey ? -1 : 1);
            index %= tabbable.length;

            tabbable[index].focus();
            event.preventDefault();
        }
    };

    const handleOuterClick = event => {
        if (state.closeOnOuterClick && (event.target === background || event.target === wrap)) {
            event.preventDefault();
            close();
        }
    };

    //context
    setContext(key, {open, close});
</script>

<style>
    :root {
        --modal-display: flex;
    }

    .bg {
        position: fixed;
        z-index: 1000;
        min-height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.66);
        width: 100%;
        overflow: auto;
        height: 100%;
    }
    .modal-position {
        display: var(--modal-display);
        align-items: center;
    }
    .window-wrap {
        margin: 5% auto;
    }

    .window {
        /* width: 40rem; */
        /* border-radius: 0.5rem; */
        background: #252b43;
    }

    .close {
        display: block;
        box-sizing: border-box;
        position: absolute;
        z-index: 1000;
        top: 1rem;
        right: 1rem;
        margin: 0;
        padding: 0;
        width: 1.5rem;
        height: 1.5rem;
        border: 0;
        color: white;
        border-radius: 1.5rem;
        background: black;
        box-shadow: 0 0 0 1px black;
        transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
            background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
        -webkit-appearance: none;
    }

    .close:before,
    .close:after {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        width: 1rem;
        height: 1px;
        background: black;
        transform-origin: center;
        transition: height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
            background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
    }

    .close:before {
        background: white;
        -webkit-transform: translate(0, -50%) rotate(45deg);
        -moz-transform: translate(0, -50%) rotate(45deg);
        transform: translate(0, -50%) rotate(45deg);
        left: 0.25rem;
    }

    .close:after {
        background: white;
        -webkit-transform: translate(0, -50%) rotate(-45deg);
        -moz-transform: translate(0, -50%) rotate(-45deg);
        transform: translate(0, -50%) rotate(-45deg);
        left: 0.25rem;
    }

    .close:focus {
        border-color: #3399ff;
        box-shadow: 0 0 0 2px #3399ff;
    }

    .close:active {
        transform: scale(0.9);
    }

    .close:hover,
    .close:focus,
    .close:active {
        outline: none;
    }
</style>

<svelte:window on:keydown={handleKeydown} />

{#if Component}
    <div
        class="bg modal-position"
        on:click={handleOuterClick}
        bind:this={background}
        transition:currentTransitionBg={state.transitionBgProps}
        style={cssBg}>
        <div
            class={`m-0 md:my-5% md:mx-auto relative ${(props && props.contentClass) || ''}`}
            bind:this={wrap}>
            <div
                class="window rounded-none md:rounded-lg md:min-h-0 min-h-screen"
                role="dialog"
                aria-modal="true"
                bind:this={modalWindow}
                transition:currentTransitionWindow={state.transitionWindowProps}
                on:introstart={onOpen}
                on:outrostart={onClose}
                on:introend={onOpened}
                on:outroend={onClosed}
                style={cssWindow}>
                {#if state.closeButton}
                    {#if isSvelteComponent(state.closeButton)}
                        <svelte:component this={state.closeButton} onClose={close} />
                    {:else}<button on:click={close} class="close" style={cssCloseButton} />{/if}
                {/if}
                <div class="p-2 md:p-4" style={cssContent}>
                    <svelte:component this={Component} {...props} />
                </div>
            </div>
        </div>
    </div>
{/if}
<slot />
