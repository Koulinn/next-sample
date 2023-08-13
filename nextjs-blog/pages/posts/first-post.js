import Link from "next/link"
import Image from "next/image"
import React from "react"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/Layout/Layout"

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <div>
        <h1>FirstPost</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        <div>
          <Image src={"/images/dog.png"} width={144} height={144} />
        </div>
      </div>
    </Layout>
  )
}

export default FirstPost
