import Head from "next/head";

export default function Home() {
  return (
    <div className="m-0 h-full grid place-items-center bg-black no-underline">
      <Head>
        {/* OG meta tags start */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DEPLOYED_URL} />
        <meta
          property="og:title"
          content={
            process.env.NEXT_PUBLIC_TITLE || process.env.NEXT_PUBLIC_USERNAME
          }
        />
        <meta
          property="og:description"
          content={
            process.env.NEXT_PUBLIC_DESCRIPTION ||
            process.env.NEXT_PUBLIC_USERNAME
          }
        />
        <meta 
          property="og:image"
          content={process.env.NEXT_PUBLIC_IMAGE}
        />
        {/* OG meta tags end */}
        <meta
          name="description"
          content={
            process.env.NEXT_PUBLIC_DESCRIPTION
              ? process.env.NEXT_PUBLIC_DESCRIPTION
              : process.env.NEXT_PUBLIC_USERNAME
          }
        />
        <meta
          name="msvalidate.01"
          content={process.env.NEXT_PUBLIC_BING_WEBMASTER || ""}
        />
        <meta
          name="monetization"
          content={process.env.NEXT_PUBLIC_PAYMENT_POINTER || ""}
        />
        <title>
          {process.env.NEXT_PUBLIC_DOMAIN
            ? NEXT_PUBLIC_DOMAIN.env.DOMAIN
            : process.env.NEXT_PUBLIC_TITLE || process.env.NEXT_PUBLIC_USERNAME}
        </title>
        <link rel="icon" href={process.env.NEXT_PUBLIC_ICON || process.env.NEXT_PUBLIC_IM} />
      </Head>
      <div className="grid place-items-center text-center">
        <div>
          <h1 className="font-sans text-7xl text-white tracking-tighter">
            Hi, I'm {process.env.NEXT_PUBLIC_USERNAME}
          </h1>
          <p className="font-comfortaa text-indigo-600 text-2xl my-1.5">
            Blogger <span className="text-white">|</span> Developer
          </p>
        </div>
      </div>
    </div>
  );
}
