import Link from "next/link";
import styles from "./page.module.css";

interface TagProps {
  link: string;
  tag: string;
}

export default function Tag({ link, tag }: TagProps) {
  return (
    <div>
      {link === "none" ? (
        <div className={styles.tag}>#{tag}</div>
      ) : (
        <Link href={`${link}`}>
          <div className={styles.tag}>#{tag}</div>
        </Link>
      )}
    </div>
  );
}
