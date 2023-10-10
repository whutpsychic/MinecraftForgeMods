import { createStore } from 'vuex';

// store.state
class GlobalState {
    // 当前主题样式
    style: string;
    // 当前选择的模组名称
    modeName: string;
    constructor() {
        this.style = "";
        this.modeName = "";
    }
}

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            style: "light",
            modeName: "",
        }
    },
    mutations: {
        // 样式黑白切换
        toggleStyle(state: GlobalState) {
            const { style } = state;
            if (style === "light") {
                state.style = "dark"
            } else {
                state.style = "light"
            }
        },
        // 预留的用于切换其他样式风格的方法
        setStyle(state: GlobalState, style: string) {
            state.style = style;
        },
        // 设置模组名
        setModeName(state: GlobalState, name: string) {
            state.modeName = name;
        },
    }
})

export default store;
