import { styled } from '../stitches-config';

export const Container = styled('main', {
  display: 'flex',
  gap: '1rem',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  marginLeft: 'auto',
  marginRight: '2rem',
  flexDirection: 'column',
  minHeight: 664,
  h2: {
    margin: '1rem 0'
  }
})
