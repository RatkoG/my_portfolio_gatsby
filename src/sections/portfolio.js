import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Heading from "../components/UI/heading"
import PortfolioItem from "../template/card"
import {
  Contained,
  StyledSection,
  Wrapper,
} from "../components/layout/elements"

const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Portfolio = () => {
  const { allFile: items } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { eq: "md" }
          sourceInstanceName: { eq: "content" }
          relativePath: { regex: "/portfolio/" }
        }
      ) {
        edges {
          node {
            name
            childMarkdownRemark {
              id
              frontmatter {
                title
                live
                source
                stack
                image {
                  childImageSharp {
                    id
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    }
  `)
  return (
    <StyledSection id="portfolio">
      <Contained>
        <Wrapper>
          <Heading
            title="Portfolio"
            subtitle="Sneak peak what I've been doing lately"
          />
          <PortfolioWrapper>
            {items.edges.map(item => (
              <PortfolioItem
                key={item.node.id}
                portfolio={item.node.childMarkdownRemark}
              />
            ))}
          </PortfolioWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  )
}

export default Portfolio
