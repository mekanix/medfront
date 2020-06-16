export default {
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },

  content: {
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    columnGap: 10,
    rowGap: 10,
    marginTop: 20,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
  },

  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },

  album: {
    height: 140,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },

  title: {
    flex: 1,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gridGap: 10,
  },

  image: {
    height: 200,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },

  add: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  picture: {
    width: 1.6,
    height: 1,
  },
}
