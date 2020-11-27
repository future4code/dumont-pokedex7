
export const goToHomePage = (history) => {
  history.push("/");
};

export const goToDetailsPage = (history) => {
  history.push("/detalhes");
};

export const goToPokeDexPage = (history) => {
  history.push("/pokedex");
};

export const goBack = (history) => {
    history.goBack();
  };


