import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        memos: [
            { id: 1, body: "サンプルのメモです"}
        ]
    },
    mutations: {
        save(state, memo){
            var max = state.memos[state.memos.length - 1].id;
            memo.id = max + 1;

            state.memos.push(memo);
        },
        update(state, data){
            let x = state.memos.find(memo => memo.id == data.id);
            x.body = data.body;
        }

    }
})