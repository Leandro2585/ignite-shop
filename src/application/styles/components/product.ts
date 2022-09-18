import { styled } from '../stitches-config';

export const Product = styled('a', {
  background: '$backgroundGradient',
  borderRadius: 8,
  padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'center',
  img: {
    objectFit: 'cover',
    marginBottom: '3rem'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#202024AA',
    height: '$80',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
    strong: {
      fontSize: '$lg'
    },
    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    }
  },
  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})