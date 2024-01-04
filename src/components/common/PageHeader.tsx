import Head from "next/head";
import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  description,
  title,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default PageHeader;
