import { HIDE_PHONE_DETAILS } from "../constants/action-types.js";


const defaultState = {
  // hideDetails: true,
  showDetails: true
};

export function hidePhoneDetails(state = defaultState, action) {
  switch (action.type) {
    case HIDE_PHONE_DETAILS:
      return Object.assign({}, state, { hideDetails: true });
    default:
      return state;
  }
}


const initialState = [
  { showDetails: true, id: 2, title: 'Miristica', tec: "Wordpress-Woocommerce", descricao: "Ustedes pueden aceptar mi negocio o aceptar las consequências. ¿Plata o plomo? Compremos una lavadora más grande, pues. Los políticos se espantan fácil. Una pistola y ya. La cárcel em Estados Unidos es peor que la muerte. El castillo, la torre yo soy. La espada que guarda el caudal. Tu el aire que respiro yo. Y la luz de la luna en el mar. La garganta que ansio mojar. Que temo ahogar de amor. Y cuales deseos me vas a dar? Dices tu: mi tesoro basta con mirarlo. Y tuyo será, y tuyo será", img: 'http://feiraalternativa.pt/wp-content/uploads/2016/04/Miristica-Bio-Cosm%C3%A9tica.png' },
]


export default function (state = initialState, action) {
  switch (action.type) {
    case 'HIDE_DETAILS':
      return state.map(function (item) {
        if (item.id == action.id) {
          return Object.assign({}, item, { showDetails: false })
        }
        return item;
      });
    default:
      return state;
  }
}