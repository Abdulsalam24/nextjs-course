import Head from "next/head"


const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keyboards" content={keywords} charset="UTF-8" />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "Next crash course",
    keywords: "Next crash course",
    description: "Next crash course"

}

export default Meta