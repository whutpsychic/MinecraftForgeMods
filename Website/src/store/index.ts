import { createStore } from 'vuex';

// store.state
class GlobalState {
    style: string;
    constructor() {
        this.style = "";
    }
}

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            // 当前样式主题风格
            style: "light"
        }
    },
    mutations: {
        toggleStyle(state: GlobalState) {
            const { style } = state;
            if (style === "light") {
                state.style = "dark"
            } else {
                state.style = "light"
            }
        },
        setStyle(state: GlobalState, style: string) {
            state.style = style;
        },
    }
})

export default store;
