import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children, categories, seoData }) => {
  return (
    <>
      <Nav categories={categories} logo={seoData.shareImage} />
      {children}
      <Footer logo={seoData.shareImage} />
    </>
  )
}

export default Layout
