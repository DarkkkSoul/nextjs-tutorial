export default async function Reviews({params}:{
    params:Promise<{productId:string}>
}){
    const productId = (await params).productId;
    return (
        <div>
            <h1>Product {productId} Reviews</h1>
            <ul>
                <li>product {productId} is very good</li>
                <li>product {productId} has some good purpose in real life</li>
                <li>we love this product {productId}</li>
            </ul>
        </div>
    )
}