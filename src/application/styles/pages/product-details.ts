import { styled } from '../stitches-config';

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'center',
  justifyContent: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto'
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: 656,
  maxWidth: 576,
  background: '$backgroundGradient',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    objectFit: 'cover'
  }
})

export const ProductDetailsSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  h1: {
    fontSize: '$xxl',
    color: '$gray100'
  },
  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$xxl',
    color: '$green300'
  },
  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300'
  },
  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    '&:hover': {
      backgroundColor: '$green300'
    }
  }
})