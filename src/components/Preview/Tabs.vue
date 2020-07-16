<template>
    <div>
        <header class="tab-buttons">
            <ul>
                <li v-for="(tab, index) in tabs" :key="index">
                    <button
                        class="tab-button supr-btn supr-btn--xs supr-btn--block"
                        :class="{ 'is-active': tab.isActive }"
                        @click="selectTab(tab)"
                    >
                        {{ tab.name }}
                    </button>
                </li>
            </ul>
        </header>
        <section>
            <slot></slot>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: []
        };
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = tab.name === selectedTab.name;
            });
        }
    },
    created() {
        this.tabs = this.$children;
    }
};
</script>

<style lang="scss" scoped>
.tab-buttons {
    overflow: hidden;
    position: fixed;
    top: 30px;
}

ul {
    display: flex;
    padding: 0;
    list-style: none;

    .tab-button {
        margin-right: 60px;
        background-color: grey;
        width: auto !important;

        &.is-active {
            background-color: #2983fb;
        }
    }
}
</style>
