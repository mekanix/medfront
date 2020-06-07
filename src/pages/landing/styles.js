const center = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}


export default (resolution) => {
  return {
    root: {
      ...center,
      minHeight: 'calc(100vh - 40px - 60px)',
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
      ...center,
      height: 60,
      width: 150,
      textTransform: 'uppercase',
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#372b2b',
    },

    section: {
      padding: 20,
      paddingTop: 70,
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
      ...center,
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
      content: {
        ...center,
        flexDirection: resolution.width < 900
          ? 'column'
          : 'row',
      },
      title: {
        fontSize: 48,
        textAlign: 'center',
        marginBottom: 20,
      },
      info: {
        display: 'grid',
        gridTemplateColumns: resolution.width < 900
          ? 'auto auto'
          : 'auto 350px',
        gridColumnGap: 10,
        gridRowGap: 10,
        marginBottom: 20,
        width: resolution.width < 900
          ? '100%'
          : '50%',
        marginRight: resolution.width < 900
          ? 0
          : 20,
        marginLeft: resolution.width < 900
          ? 0
          : 20,
      },
      map: {
        width: resolution.width < 900
          ? '100%'
          : '50%',
        height: 400,
        padding: 10,
      },
      right: {
        textAlign: 'right',
        marginRight: 50,
      },
    },

    footer: {
      color: '#aaa',
      padding: 10,
      textAlign: 'center',
    },

    boro: {
      marginBottom: 20,
      title: {
        textAlign: 'center',
        fontSize: 48,
        marginBottom: 20,
      },
      content: {
        ...center,
        flexDirection: resolution.width < 700
          ? 'column'
          : 'row',
        padding: 20,
      },
      avatar: {
        maxHeight: 300,
        maxWidth: 300,
        height: '100%',
        width: '100%',
        marginRight: 50,
      },
    },
  }
}
