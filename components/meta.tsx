import Head from "next/head";

// importing types
import { MetaProps } from "./../types";

const Meta = (props: MetaProps) => {
  return (
    <Head>
      <meta
        name="description"
        content={props.description}
      />
      <meta
        name="keywords"
        content={props.keywords.concat(", ").concat(props.extraKeywords)}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="msapplication-TileColor" content="#163F65" />
      <meta name="theme-color" content="#163F65" />
      <meta name="url" content="https://wearemist.in" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://wearemist.in" />
      <meta name="reply-to" content="sudo@wearemist.in" />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="Manipal Information Security Team | The cybersecurity club from MIT, Manipal"
      />
      <meta
        property="og:description"
        content={props?.description}
      />
      <meta property="og:image" content="/images/mist_og.png" />
      <meta property="og:url" content="https://wearemist.in/" />
      <meta
        property="og:site_name"
        content="Manipal Information Security Team"
      />
      <meta
        name="twitter:title"
        content={`${props?.title} | Manipal Information Security Team`}
      />
      <meta
        name="twitter:description"
        content={props?.description}
      />
      <meta name="twitter:image" content="/images/mist_og.png" />
      <meta name="twitter:site" content="@sudo_mist" />
      <meta name="twitter:creator" content="@sudo_mist" />
      
      <title>{props.title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Manipal Information Security Team",
  keywords: "wearemist, mist, cybersecurity, information security, manipal, mit, clubs",
  description: "Manipal Information Security Team is the official cybersecurity club from MIT, Manipal"
}

export default Meta