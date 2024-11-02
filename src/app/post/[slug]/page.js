import PostDetails from "@/src/components/Post/PostDetails";
import RenderMdx from "@/src/components/Post/RenderMdx";
import siteMetadata from "@/src/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if(!blog){
    notFound()
  }


  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": blog.title,
    "description": blog.description,
    "image": imageList,
    "datePublished": new Date(blog.publishedAt).toISOString(),
    "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    "author": [{
        "@type": "Person",
        "name": blog?.author ? [blog.author] : siteMetadata.author,
        "url": siteMetadata.twitter,
      }]
  }

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
       <article>
      <div className="mb-8 text-center relative w-full h-[30vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1
            className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
          >
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      <PostDetails blog={blog} slug={params.slug} />
      <div className="gap-y-3 lg:gap-12 sxl:gap-16 mt-8 px-10 xl:px-80 md:px-28 lg:px-40 xs:px-5s">
        <RenderMdx blog={blog} />
      </div>
    </article>
    </>
   
  );
}
