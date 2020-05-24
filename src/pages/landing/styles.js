export default {
  root: {
    minHeight: 'calc(100vh - 40px - 60px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20,
    backgroundImage: 'url("https://as2.ftcdn.net/jpg/01/40/91/57/500_F_140915723_DPQA5uFOB4K23w0ljgcE8P0e4jSVIt1M.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },

  title: {
    flex: 1,
  },

  message: {
    main: {
      fontSize: 48,
      marginBottom: 20,
    },
    sub: {
      color: "#333",
      fontSize: 24,
      marginBottom: 20,
    },
  },

  order: {
    height: 60,
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#372b2b',
  },

  section: {
    padding: 20,
    paddingTop: 70,
    minHeight: 'calc(100vh - 90px)',
  },

  products: {
    fontSize: 48,
    textAlign: 'center',
  },

  cards: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  card: {
    width: '30%',
  },

  media: {
    height: 120,
  },

  subtitle: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 24,
    color: '#555',
    marginBottom: 50,
  },

  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    padding: 20,
    title: {
      fontSize: 48,
      textAlign: 'center',
      marginBottom: 50,
    },
  },

  about: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    title: {
      fontSize: 48,
      textAlign: 'center',
      marginBottom: 20,
    },
    info: {
      display: 'grid',
      gridTemplateColumns: '120px auto',
      gridColumnGap: 10,
      gridRowGap: 10,
      marginBottom: 20,
    },
  },

  footer: {
    color: '#aaa',
    padding: 10,
    textAlign: 'center',
  },
}
