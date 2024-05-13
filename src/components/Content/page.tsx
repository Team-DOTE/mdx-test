import Link from "next/link";
import styles from "./page.module.css";
import Tag from "../Tag/page";

interface ContentProps {
  link: string;
  title: string;
  tag: string;
}

export default function Content({ link, title, tag }: ContentProps) {
  return (
    <div>
      
        <Link href={link}>
        <div className={styles.content}>
          <div>{title}</div>
        
        <div className={styles.tag}>
          <Tag link={"none"} tag={tag} />
        </div>
        </div>
        </Link>
        
      </div>
    
  );
}
