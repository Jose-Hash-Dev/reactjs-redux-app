import * as actionTypes from "./Types";
import book1 from "../../assets/Images/book1.jpg";
import book2 from "../../assets/Images/book2.jpg";
import book3 from "../../assets/Images/book3.jpg";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      image: book1,
      price: "15$",
      title: "The Da Vinci Code",
      description:
        "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols.",
      alt: "The Da Vinci Code: A Novel (Robert Langdon Book 5) - Kindle edition by Brown, Dan.",
    },
    {
      id: 2,
      image: book2,
      price: "15$",
      title: "Inferno",
      description:
        "This book 'Inferno' follows his usual writing style, format, and layout. His stories are always well-written and clearly, a lot of research goes into them. This book certainly raises some complex and difficult issues around mankind's growing population and the earth's limited resources, and all of this get's entwined in religion, symbols, Italian history, and the works of Dante.",
      alt: "Inferno (Robert Langdon) (9780307474278): Brown, Dan:  Books",
    },
    {
      id: 3,
      image: book3,
      price: "29.50$",
      title: "The Lost Symbol",
      description:
        "The Lost Symbol is a masterstroke of storytelling--a deadly race through a real-world labyrinth of codes, secrets, and unseen truths . . . all under the watchful eye of Brown’s most terrifying villain to date. Set within the hidden chambers, tunnels, and temples of Washington, D.C.,",
      alt: "A Complete List of Dan Brown Books and Novels Rated From Best To Worst",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_DO_CART: {
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) => item.id === action.payload.id);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: +item.quantity + +action.payload.quantity,
                  }
                : item
            )
          : [
              ...state.cart,
              {
                ...item,
                quantity: +action.payload.quantity,
              },
            ],
      };
    }
    case actionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    case actionTypes.ADJUST_QUANTITY: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: +action.payload.quantity }
            : item
        ),
      };
    }
    case actionTypes.LOAD_CURRENT_ITEM: {
      return {
        ...state,
        currentItem: action.payload,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
