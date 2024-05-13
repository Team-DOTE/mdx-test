import allContents from "@/utils/getContents";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import styles from "./page.module.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import Tag from "@/components/Tag/page";
import { tags } from "@/utils/getTags";
import Link from "next/link";

const options: any = {
  mdxOptions: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      rehypeSlug,
      rehypeHighlight,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
    ],
  },
};

export default function Post({ params }: any) {
  const props = allContents.filter((content) => content.slug == params.slug)[0];
  const link = tags.filter((tag) => tag.tag == props.meta.tag);
  return (
    <article>
      <div style={{ display: "flex", margin:"10px" }}>
        <Tag link={`../tags/${link[0].link}`} tag={props.meta.tag} />
      </div>

      <Link href="../">
        <div style={{ color: "gray", margin:"10px"}}>돌아가기</div>
      </Link>
      <div className={styles.content}>
        <h1>{props.meta.title}</h1>
        <p>{props.meta.description}</p>

        <MDXRemote source={props.content} options={options} />
      </div>
    </article>
  );
}
