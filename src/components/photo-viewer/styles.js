export default (resolution) => {
  return {
    img: {
      display: 'block',
      maxWidth: '100vw',
      maxHeight: 'calc(100vh - 150px)',
    },

    dialog: {
      maxHeight: 'calc(100vh - 150px)',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },

    close: {
      position: 'absolute',
      zIndex: 1,
    },

    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: resolution.height - 150,
    },
  }
}
