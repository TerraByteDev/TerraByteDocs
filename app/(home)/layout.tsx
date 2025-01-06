import { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import Head from 'next/head';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <>
      <Head>
        {/* Website Title */}
        <title>TerraByteDev Documentation</title>

        {/* Basic Meta Tags */}
        <meta name="description" content="An extensive documentation site for TerraByteDev and SkyFactionsReborn." />
        <meta name="keywords" content="TerraByteDev, wiki, documentation, docs, plugin, minecraft" />
        <meta name="author" content="Skullians" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="TerraByteDev Documentation" />
        <meta property="og:description" content="An extensive documentation site for TerraByteDev and SkyFactionsReborn." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://docs.terrabytedev.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TerraByteDev Documentation" />
        <meta name="twitter:description" content="An extensive documentation site for TerraByteDev and SkyFactionsReborn." />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout {...baseOptions}>{children}</HomeLayout>
    </>
  );
}