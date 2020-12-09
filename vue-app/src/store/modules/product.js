import {post,get} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        products:[],
        // productById:[]
    },
    getters: {
        productCustomerFilter(state){
            return(categoryId)=>{
                return state.products.filter(item=>{
                    return item.categoryId === categoryId
                })
            }
        }
    },
    mutations :{
        refreshProducts(state,products){
            state.products = products
        },
        // refreshProductById(state,productById){
        //     state.productById = productById
        // }
    },
    actions :{
        // 查找所有商品分类信息
        async QueryProducts({commit},params) {
            let response = await post('/product/query',params)
            // 为产品添加number属性
            response.data.list.forEach(item=>{
                item.number = 0;
            })
            response.data.list.categoryId = params.categoryId
            // console.log('response',response)
            // console.log(response.data.list)
            commit('refreshProducts',response.data.list)
        },
    }
 }