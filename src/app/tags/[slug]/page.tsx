import allContents from "@/utils/getContents";
import { tags } from "@/utils/getTags";
import Link from "next/link";
import { unescape } from "querystring";
import styles from "./page.module.css";
import Tag from "@/components/Tag/page";
import Content from "@/components/Content/page";

export default function Tags({ params }: { params: { slug: string } }) {
  const filterTags = tags.filter((tag) => tag.link == unescape(params.slug));

  const filterContents = allContents.filter(
    (content) => content.meta.tag == unescape(filterTags[0].tag)
  );
  return (
    <div>
      <div style={{ display: "flex" }}>
        {tags.map((tag, index) => (
          <div key={index} style={{margin:"10px"}}>
            <Tag link={tag.link} tag={tag.tag} />
          </div>
        ))}
      </div>
      <Link href="../">
        <div style={{ color: "gray", margin: "10px" }}>돌아가기</div>
      </Link>
      <div style={{ height: 20 }} />
      <div style={{margin: "10px", fontSize:"20px"}}>{filterTags[0].count}</div>
      <div style={{ height: 20 }} />
      {filterContents.map((content, index) => (
        <div key={index}>
          <Content
            link={`/contents/${content.slug}`}
            title={content.meta.title}
            tag={content.meta.tag}
          />
        </div>
      ))}
    </div>
  );
}
