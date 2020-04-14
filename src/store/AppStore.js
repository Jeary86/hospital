export default {
    state: {
        loaderName: "loading",
        homeStyle : true,
        seepIndex : 0,
        pageIndex : 0,
        isPraise : false,
        isShare : false
    },
    mutations: {
        SET_LOADER_NAME: (state, payload) => {
            state.loaderName = payload
        },
        SET_HOME_STYLE: (state, payload) => {
            state.homeStyle = payload
        },
        SET_SEEP_INDEX: (state, payload) => {
            state.seepIndex = payload
        },
        SET_PAGE_INDEX: (state, payload) => {
            state.pageIndex = payload
        },
        SET_IS_PRAISE: (state, payload) => {
            state.isPraise = payload
        },
        SET_IS_SHARE: (state, payload) => {
            state.isShare = payload
        },
    },
    actions: {
        setLoaderName: ({commit, state}, payload) => {
            return commit('SET_LOADER_NAME', payload)
        },
        setHomeStyle: ({commit, state}, payload) => {
            return commit('SET_HOME_STYLE', payload)
        },
        setSeepIndex: ({commit, state}, payload) => {
            return commit('SET_SEEP_INDEX', payload)
        },
        setPageIndex: ({commit, state}, payload) => {
            return commit('SET_PAGE_INDEX', payload)
        },
        setIsPraise: ({commit, state}, payload) => {
            return commit('SET_IS_PRAISE', payload)
        },
        setIsShare: ({commit, state}, payload) => {
            return commit('SET_IS_SHARE', payload)
        },
    },
    getters: {
        loaderName: state => state.loaderName,
        homeStyle: state => state.homeStyle,
        seepIndex: state => state.seepIndex,
        pageIndex: state => state.pageIndex,
        isPraise: state => state.isPraise,
        isShare: state => state.isShare,
    }
}
