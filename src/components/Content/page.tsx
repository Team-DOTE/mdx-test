import Link from "next/link";
import styles from "./page.module.css";
import Tag from "../Tag/page";

interface ContentProps {
  link: string;
  title: string;
  tag: string;
}

export default function Content({ link, title, tag }: ContentProps) {
  console.log(tag);
  return (
    <div>
      <Link href={link}>
        <div className={styles.content}>
          {title}
          <div className={styles.tag}>
            <Tag link={`#`} tag={tag} />
          </div>
        </div>
      </Link>
    </div>
  );
}
