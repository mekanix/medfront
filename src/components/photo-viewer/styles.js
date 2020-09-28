export default (resolution) => {
  return {
    img: {
      display: 'block',
      maxWidth: '100vw',
      maxHeight: 'calc(100vh - 150px)',
    },

    dialog: {
      height: 'calc(100vh - 150px)',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },

    close: {
      position: 'absolute',
      zIndex: 1,
      fontSize: '48px',
      color: '#aaa',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      top: 0,
      left: 0,
    },

    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: resolution.height - 150,
    },
  }
}
