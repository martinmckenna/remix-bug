import type { FC } from "react";
import styles from "../about.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

interface TProps {}

export const About: FC<TProps> = () => {
  return (
    <div>
      <article>about page article</article>
      <aside>about page aside</aside>
    </div>
  );
};

export default About;
