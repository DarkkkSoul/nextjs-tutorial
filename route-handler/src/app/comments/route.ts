import { commentsArray } from "./comments";

export async function GET() {
    return Response.json(commentsArray);
}