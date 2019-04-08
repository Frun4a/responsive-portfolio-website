import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import {StaticQuery, graphql } from "gatsby";
 

class PortfolioGallery extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const imagesList = this.props.imagesArray.edges.map( item => 
      ({src: item.node.childImageSharp.fixed.src,
        height: item.node.childImageSharp.fixed.height,
        width: item.node.childImageSharp.fixed.width,
        srcSet: item.node.childImageSharp.fixed.srcSet
    }) )
    
    return (
      <div>
        <Gallery photos={imagesList}
          onClick={this.openLightbox}
          margin={7}
          direction="row"
        />
        <Lightbox images={imagesList}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          backdropClosesModal={true}
        />
      </div>
    )
  } 
}

export default () => (
  <StaticQuery
  query={graphql`
  query {
    images: allFile(filter: {
      relativeDirectory: {
        regex: "/(portfolio)/"
      }}) {
      edges {
        node {
          name
          relativePath
          relativeDirectory
          absolutePath
          extension
          childImageSharp{
            fixed (width: 945) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`} render={(data) => (<PortfolioGallery imagesArray={data.images} />)}
/>)
