import { commentsArray } from "../comments";

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const comment = commentsArray.find(
        (c) => c.id === Number(id)
    );
    if (!comment) {
        return Response.json({ error: "Comment not found" }, { status: 404 });
    }
    return Response.json(comment);
}

export async function PATCH(request: Request,
    { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await request.json();
    const { comment } = body;
    const index = commentsArray.findIndex((c) => c.id === parseInt(id));

    commentsArray[index].comment = comment;

    return Response.json(commentsArray[index]);
}

export async function DELETE(request: Request,
    { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const index = commentsArray.findIndex((c) => c.id === parseInt(id));

    commentsArray.splice(index, 1);

    return Response.json({ "message": "Comment deleted" });
}