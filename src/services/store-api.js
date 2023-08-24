const StoreApi={
    fetchAllProducts: async ()=>{
        const res =  await fetch("https://fakestoreapi.com/products")
        const result = res.json()
        return result;
    },

    fetchProductById: async (productId)=>{
        const dummy = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const final = dummy.json()
        return final;
    },

    fetchProductByQuery: async (query)=>{
        const ans= await fetch("https://fakestoreapi.com/products")
        const answer = ans.json()
        return answer.filter((product)=> product.title.toLowerCase().includes(query))
    },
}

export default StoreApi;