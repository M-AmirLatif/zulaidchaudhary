import { NextRequest, NextResponse } from "next/server";
import { getArticles, addArticle, updateArticle } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";
import { getSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const articles = getArticles();
    return NextResponse.json({ success: true, articles });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, titleUr, slug, category, author, excerpt, content, readTime, tags, status, featuredImage } = body;

    if (!title || !slug || !category || !content) {
      return NextResponse.json({ error: "Title, slug, category, and content are required." }, { status: 400 });
    }

    const newArticle = addArticle({
      title,
      titleUr: titleUr || "",
      slug: slug.toLowerCase().replace(/\s+/g, "-"),
      category,
      author: author || "Zulaid Chaudhary (Founder)",
      excerpt: excerpt || title,
      content,
      readTime: readTime || "5 min read",
      tags: Array.isArray(tags) ? tags : ["Humanity", "ZCF"],
      status: status || "PUBLISHED",
      featuredImage: featuredImage || "/images/5th.jpg",
    });

    await logAuditAction({
      userId: session.id,
      userName: session.name,
      userRole: session.role,
      action: "CREATE",
      entity: "ArticleRecord",
      entityId: newArticle.id,
      details: `Published article / column "${newArticle.title}" in ${newArticle.category}`,
      newData: {
        title: newArticle.title,
        slug: newArticle.slug,
        category: newArticle.category,
        author: newArticle.author,
        status: newArticle.status,
      },
    });

    return NextResponse.json({ success: true, article: newArticle });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to publish article";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Article ID is required." }, { status: 400 });
    }

    const updated = updateArticle(id, updates);
    if (!updated) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    await logAuditAction({
      userId: session.id,
      userName: session.name,
      userRole: session.role,
      action: "UPDATE",
      entity: "ArticleRecord",
      entityId: id,
      details: `Updated article "${updated.title}"`,
      newData: updates,
    });

    return NextResponse.json({ success: true, article: updated });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Update failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
