import Head from "next/head";

// importing types
import { MetaProps } from "./../types";

const Meta = (props:MetaProps) => {
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

      <title>{props.title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Chords and Co.",
  keywords: "chords and co, chords, manipal, music, performance, musical night, open mic, committee, music community",
  description: "Chords & Co., the official music club of Manipal Institute of Technology, caters to students' musical interests from various colleges in Manipal."
}

export default Meta