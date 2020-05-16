import createDataContext from './createDataContext'
import { FakeData } from '../fakeData/FakeData'
const FavoriteReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const existingIndex = state.fovariteArr.findIndex(
                item => item.id === action.payload
            );
            if (existingIndex >= 0) {
                const updateFavMeals = [...state.fovariteArr];
                updateFavMeals.splice(existingIndex, 1);
                return { ...state, fovariteArr: updateFavMeals };
            } else {
                const Categories = state.lessons.find(item => item.id === action.payload)
                return { ...state, fovariteArr: state.fovariteArr.concat(Categories) };
            }
        default:
            return state;
    }
}

const toggle_favorite = dispatch => (id) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: id })
}

export const { Context, Provider } = createDataContext(
    FavoriteReducer,
    { toggle_favorite },
    { lessons: FakeData, fovariteArr: [] }
)