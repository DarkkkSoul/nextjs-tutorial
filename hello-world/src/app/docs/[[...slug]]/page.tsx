export default async function Docs({params}:{
    params:Promise<{slug:string[]}>
}) {
    const {slug} = await params;
    console.log(params)
    if(slug?.length === 2){
        return <h1>Docs for Feature:{slug[0]} and Concept:{slug[1]}</h1>
    }
    if(slug?.length === 1){
        return <h1>Docs for Feature:{slug[0]}</h1>
    }
    return <h1>Docs page</h1>
}