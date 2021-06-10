import React from 'react'
import MealsSummary from './MelasSummary'
import AvailableMeals from './AvailableMeals'
const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </React.Fragment>
    )
}

export default Meals
