import Link from "next/link"
import React from "react"

function FirstPost() {
  return (
    <div>
      <h1>FirstPost</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  )
}

export default FirstPost
