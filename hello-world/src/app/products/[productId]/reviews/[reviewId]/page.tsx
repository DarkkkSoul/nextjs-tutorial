export default async function Review({params}:{
    params:Promise<{reviewId:string, productId:string}>
}) {
    const {productId, reviewId} = await params;
    console.log(params);

    return <div>Review: {reviewId} for product: {productId}</div>
}