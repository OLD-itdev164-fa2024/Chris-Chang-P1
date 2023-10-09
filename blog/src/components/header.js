import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

const Outer = styled.header`
  background: ${props => props.theme.header.backgroundColor};
  margin-bottom: 1.45rem;
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const H1 = styled.h1`
  margin: 0px;
  padding-bottom: 2em;
`

const StyledLink = styled(Link)`
  color: #00a88f;
  text-decoration: none;
  &:hover {
    color: lightgray;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <H1>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
      <div>
        <FontAwesomeIcon class="iconFA" icon={faFacebookSquare}></FontAwesomeIcon>
        <FontAwesomeIcon class="iconFA" icon={faLinkedin}></FontAwesomeIcon>
        <FontAwesomeIcon class="iconFA" icon={faTwitterSquare}></FontAwesomeIcon>
      </div>
    </H1>

        
      
    
  </Outer>
)

Header.propTypes ={
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
