export default async function Product({params}:{
    params:Promise<{productId:string}>
}){
    console.log(params)
    const productId = (await params).productId
    return <h2>Product {productId} details</h2>
}