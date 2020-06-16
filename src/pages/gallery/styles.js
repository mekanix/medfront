export default (resolution) => {
  const count = Math.ceil(resolution.width / 350)
  return {
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },

    content: {
      display: "grid",
      gridTemplateColumns: `repeat(${count}, auto)`,
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      icon: {
        height: 140,
        width: 140,
        color: 'gray',
      },
    },

    title: {
      flex: 1,
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: `repeat(${count}, auto)`,
      gridGap: 10,
    },

    image: {
      height: 200,
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    },

    add: {
      position: 'fixed',
      bottom: 20,
      right: 20,
      zIndex: 10,
    },

    picture: {
      width: 1.6,
      height: 1,
    },
  }
}
