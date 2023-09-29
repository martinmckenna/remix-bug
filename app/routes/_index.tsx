import type { FC } from "react";
import styles from "../index.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

interface TProps {}

export const Index: FC<TProps> = () => {
  return (
    <div>
      <article>Index page article</article>
      <aside>Index page aside</aside>
    </div>
  );
};

export default Index;
