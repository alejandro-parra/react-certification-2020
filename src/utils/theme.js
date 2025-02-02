const Theme = {
  dark: {
    general: {
      background: '#1c1c1c',
      color: '#fefefe',
    },
    header: {
      background: '#3f3f3fcc',
    },
    dropdown: {
      imageBackground: 'white',
      menuItem: {
        color: 'white',
        backgroundColor: 'black',
        borderBottomColor: 'white',
        hoverBackground: 'red',
      },
    },
    searchBar: {
      background: 'black',
      borderColor: 'rgba(255, 255, 255, 0.25)',
      boxShadow: 'rgba(18, 45, 69, 0.1)',
      inputPlaceholder: 'rgba(255, 255, 255, 0.6)',
    },
    videoCard: {
      background: '#3c3c3ccc',
      borderColor: 'none',
      boxShadow: 'rgba(18, 45, 69, 0.2)',
      title: 'white',
      subtitle: 'rgba(255, 255, 255, 0.6)',
    },
    videoPlayer: {
      background: '#3c3c3ccc',
      subtitle: '#ffffff99',
      descriptionBorder: 'white',
    },
  },
  light: {
    general: {
      background: '#ececec',
      color: 'black',
    },
    header: {
      background: '#f3f3f3cc',
    },
    dropdown: {
      imageBackground: 'black',
      menuItem: {
        color: 'black',
        backgroundColor: 'white',
        borderBottomColor: 'black',
        hoverBackground: 'gray',
      },
    },
    searchBar: {
      background: 'rgba(255, 255, 255, 0.7)',
      borderColor: 'rgba(255, 255, 255, 0.25)',
      boxShadow: 'rgba(18, 45, 69, 0.1)',
      inputPlaceholder: 'rgba(0, 0, 0, 0.6)',
    },
    videoCard: {
      background: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.25)',
      boxShadow: 'rgba(18, 45, 69, 0.2)',
      title: 'black',
      subtitle: 'rgba(0, 0, 0, 0.6)',
    },
    videoPlayer: {
      background: 'white',
      subtitle: '#00000099',
      descriptionBorder: 'black',
    },
  },
};

export default Theme;
