import styled from 'styled-components'

const ImgStyled = styled.img`
  clip-path: url(#myClip);
  width: 7.6875rem;
  height: 8.9375rem;

  @media (min-width: 48rem) {
    height: 9.375rem;
    width: 10.8125rem;
  }
`

const SupplierProfilePhoto = ({ imageURL = 'https://res.cloudinary.com/drc41imav/image/upload/v1686146558/profile_picture/ctwczniwf52skwusfbtb.jpg' }) => {
  return (
    <>
      <ImgStyled src={imageURL} />
      <svg width='0' height='0'>
        <clipPath id='myClip' clipPathUnits='objectBoundingBox'>
          <polygon
            points='.41,.02 .59,.02
                          .91,.16 1,.33
                          1,.66 .91,.83
                          .59,.98 .41,.98
                          .09,.83 0,.66
                          0,.33 .09,.16
                          '
          />
          <circle cx='.5' cy='.2' r='.2' />
          <circle cx='.5' cy='.8' r='.2' />
          <circle cx='.8' cy='.33' r='.2' />
          <circle cx='.8' cy='.66' r='.2' />
          <circle cx='.2' cy='.33' r='.2' />
          <circle cx='.2' cy='.66' r='.2' />
        </clipPath>
      </svg>
    </>
  )
}

export { SupplierProfilePhoto }
