import { FC, useState } from "react";
import styles from "./HeaderNav.module.scss";
import { Paths, TypedLink } from "@/routes";
import { Container } from "./Container";
import { CSSTransition } from "react-transition-group";
import { AiOutlineMenu } from "react-icons/ai";

const SideMenu: FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <CSSTransition
      in={isVisible}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        enterDone: styles.enterDone,
        exit: styles.exit,
        exitActive: styles.exitActive,
        exitDone: styles.exitDone,
      }}
      timeout={{ appear: 0, exit: 0 }}
    >
      <ul id={styles.sideMenu}>
        <li className="border-b border-secondary py-2">
          <TypedLink
            path={Paths.about}
            className="text-white text-xl font-bold rounded p-2 ml-2 block"
          >
            About
          </TypedLink>
        </li>
        <li className="border-b border-secondary py-2">
          <TypedLink
            path={Paths.tags}
            className="text-white text-xl font-bold rounded p-2 ml-2 block"
          >
            Tags
          </TypedLink>
        </li>
      </ul>
    </CSSTransition>
  );
};

export const HeaderNav: FC = () => {
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState(false);
  return (
    <nav className="bg-primary border-b border-white">
      <Container className="flex items-center justify-between py-2 ">
        <div className="text-2xl font-bold text-white">
          <TypedLink path={Paths.posts} className="p-2">
            naroBlog
          </TypedLink>
        </div>
        <div className="flex-row hidden md:flex">
          <TypedLink
            path={Paths.about}
            className="text-white text-xl font-bold rounded p-2 ml-2"
          >
            About
          </TypedLink>
          <TypedLink
            path={Paths.tags}
            className="text-white text-xl font-bold rounded p-2 ml-2"
          >
            Tags
          </TypedLink>
        </div>
        <button
          className="md:hidden"
          onClick={() => {
            setSideMenuIsVisible((prev) => !prev);
          }}
        >
          <AiOutlineMenu className="text-white" />
        </button>
      </Container>
      <SideMenu isVisible={sideMenuIsVisible} />
    </nav>
  );
};
