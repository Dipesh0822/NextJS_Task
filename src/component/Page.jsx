import { Box } from "@mui/material";
import React from "react";
import Head from "next/head";

const Page = (props) => {
  const { title, meta, children } = props;

  const pageTitle = () => {
    if (!title || title === "Login") {
      return "SocioSquares";
    }

    return `${title} | SocioSquares `;
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
        <title>{pageTitle()}</title>
        {meta}
      </Head>
      <Box>{children}</Box>
    </>
  );
};

export default Page;
