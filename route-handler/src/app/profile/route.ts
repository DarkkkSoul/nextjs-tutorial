import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

    const reqHeaders = new Headers(req.headers);
    console.log("------Using headers object------")
    console.log(reqHeaders)
    console.log(reqHeaders.get("Authorization"));
    const theme = req.cookies.get("theme");
    console.log(theme);


    const headersList = await headers();
    console.log("------Using headers function------")
    console.log(headersList.get("Authorization"))
    const cookiesList = await cookies();
    cookiesList.set("hello", "world");
    console.log(cookiesList.get("hello"));

    return new Response("<h1>John Doe</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}