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
}
