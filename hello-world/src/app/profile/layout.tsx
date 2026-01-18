import {Metadata} from 'next'


export const metadata:Metadata ={
    title:{
      absolute:'profile page'
    }
}
export default function ProfileLayout({children}:{children:React.ReactNode}){
    return (
    <>
<h1>Your profile looks coooollll</h1>
        {children}
    </>
    )
}