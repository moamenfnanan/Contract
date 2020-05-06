import { FakeData } from '../../fakeData/FakeData';
import { TOGGLE_FAVORITE } from '../actions/favor'

const initialState = {
    fake: FakeData,
    filterModels: FakeData,
    fovariteArr: []
}
const CategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.fovariteArr.findIndex(
                item => item.id === action.ItemId
            );
            if (existingIndex >= 0) {
                const updateFavMeals = [...state.fovariteArr];
                updateFavMeals.splice(existingIndex, 1);
                return { ...state, fovariteArr: updateFavMeals };
            } else {
                const Categories = state.fake.find(item => item.id === action.ItemId)
                return { ...state, fovariteArr: state.fovariteArr.concat(Categories) };
            }
        default:
            return state;
    }
};

export default CategoriesReducer;