import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Logo = () => {
  return <StaticImage
      src="../../images/favicon.png"
      className="gatsby-image-wrapper"
      alt="sakura logo"
      placeholder="blurred"
      layout="fixed"
    />
}

export default Logo
