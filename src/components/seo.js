import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, image, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            summary
            description
            image
            social {
              twitter
            }
         }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
//  const image =
//    metaImage && metaImage.src
//      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
//      : null
  const theImageSrc = image || site.siteMetadata.image
  const theImage = site.siteMetadata.siteUrl + theImageSrc
//  const image = site.siteMetadata.siteUrl + site.siteMetadata.image
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
	        property: `image`,
	        content: theImage,
	    },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `article`,
        },
        {
	      property: `og:url`,
	      content: canonical,
	    },
        {
	      property: `og:site_name`,
	      content: site.siteMetadata.title,
	    },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          theImage
            ? [
                {
                 property: "og:image",
                  content: theImage,
                },
                {
                 property: "og:image:secure_url",
                  content: theImage,
                },
//                {
//                  property: "og:image:width",
//                  content: metaImage.width,
//                },
//                {
//                  property: "og:image:height",
//                  content: metaImage.height,
//                },
				{
				  name: `twitter:image`,
				  content: theImage,
				},
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
//  image: PropTypes.shape({
//    src: PropTypes.string.isRequired,
//    height: PropTypes.number.isRequired,
//    width: PropTypes.number.isRequired,
//  }),
  pathname: PropTypes.string,
}

export default SEO