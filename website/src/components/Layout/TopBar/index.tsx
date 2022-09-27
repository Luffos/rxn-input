import Link from "next/link";
import React, { memo } from "react";
import { ContentWrapper, Wrapper } from "./styles";
import Logo from "../../../assets/Logo.svg";

const TopBar = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Link href={"/"}>
          <a className={"logoWrapper"}>
            <Logo viewBox="0 0 247 54" />
          </a>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
};

export default TopBar;
