import styled from '@emotion/styled'

const Markdown = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  td,
  th {
    border-bottom: 1px solid #d1d1d1;
  }

  strong {
    font-weight: 600;
  }

  a,
  p {
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: #0066cc !important;
    * {
      color: #0066cc !important;
    }
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  & > *:first-child {
    margin-top: 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.31951rem;
    line-height: 1.3;
  }

  h4,
  h5,
  h6 {
  }

  ul,
  ol {
  }

  li > ul,
  li > ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: 0;
  }

  li > ol,
  li > ul {
  }

  li {
  }

  p,
  li,
  blockquote {
    font-size: 1.0625rem;
  }

  p {
    line-height: 1.68;
    text-align: left;
    margin-bottom: 24px;
  }

  hr {
    margin: 40px 0;
    background: #d1d1d1;
  }

  blockquote {
    border-left: 0.25rem solid #e0e0e0;
    padding-left: 16px;
    margin: 24px 0;
    * {
      color: #696969;
    }
  }

  img {
    display: block;
  }
`

export default Markdown
