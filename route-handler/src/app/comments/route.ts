import { commentsArray } from "./comments";

export async function GET() {
    return Response.json(commentsArray);
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: commentsArray.length + 1,
        comment: comment.comment
    }
    commentsArray.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: { "Content-Type": "application/json" },
        status: 201
    });
}