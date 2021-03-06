import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

import PageBanner from '../components/PageBanner/PageBanner'
import StayInspiredForm from '../components/Forms/Form'
import FeaturedOn from '../components/FeaturedOn/FeaturedOn'
import FeaturedEpisodes from '../components/FeaturedEpisodes/FeaturedEpisodes'

import bannerImg from '../img/BannerImg.png'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div className="home-page-container page-container">
    <PageBanner
      title=""
      description=""
      background={bannerImg}
    >
      <h1 className="tfp-title">
        <p>are you a</p>
        <p><span className="imp-words">business</span> or <span className="imp-words">Thought</span></p>
        <p><span className="vimp-words">leader</span> that has </p>
        <p>a <span className="imp-words">story</span> to <span className="imp-words">share</span>?</p> 
      </h1>
      <StayInspiredForm FormName="stay-inspired" title="Stay Inspired"/>
    </PageBanner>

    <FeaturedEpisodes />
    
    <FeaturedOn/>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
