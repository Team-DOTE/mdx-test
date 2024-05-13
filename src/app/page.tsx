import Image from "next/image";
import styles from "./page.module.css";
import allContents from "@/utils/getContents";
import Link from "next/link";
import { tags } from "@/utils/getTags";
import Tag from "@/components/Tag/page";
import Content from "@/components/Content/page";

export default function Home() {
  return (
    <div>
      <div className={styles.search}>
        <Image src="/search.svg" alt="검색 이미지" width={20} height={20} />
        <input className={styles.input} placeholder="검색할 상황을 입력해주세요."  />
      </div>
      
      <div>
        <div style={{ display: "flex" }}>
          {tags.map((tag, index) => (
            <div key={index} style={{ margin: "5px" }}>
              <Tag link={`tags/${tag.link}`} tag={tag.tag} />
            </div>
          ))}
        </div>
        <div style={{ height: 20 }} />
        {allContents.map((content, index) => (
          <div key={index}>
            <Content
              link={`/contents/${content.slug}`}
              title={content.meta.title}
              tag={content.meta.tag}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
