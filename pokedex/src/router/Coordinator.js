export const goToHomePage = (history) => {
  history.push("/");
};

export const goToDetailsPage = (history, pokemon) => {
  history.push(`/detalhes/${pokemon}`);
};

export const goToPokeDexPage = (history) => {
  history.push("/pokedex");
};

export const goBack = (history) => {
    history.goBack();
  };

