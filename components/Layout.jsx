import { CssBaseline } from '@material-ui/core';
import NavBar from './NavBar/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-1000',
  },
  body: {
    position: 'relative',
    zIndex: '1',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: '-1000',
        }}
      >
        <Image src='/backgroundImage.jpg' layout='fill' objectFit={'cover'} />
      </div>
      <div style={{ position: 'relative', zIndez: '1' }}>
        <NavBar />
        <CssBaseline />

        {children}
      </div>
    </>
  );
};

export default Layout;
