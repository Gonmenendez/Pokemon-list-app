// React router
import { Route, Routes } from "react-router-dom"

// Routes
import { PUBLIC_ROUTES } from "../../utils/ResourceRoutes"

// Components
import PokeFinder from "../../components/pokeFinder/PokeFinder"

// Styles
import styles from './style.module.css'

const Body = () => {
    return (
        <section className={styles.bodySection}>
            <PokeFinder/>
            <Routes>
                {PUBLIC_ROUTES.map(route => {
                    return (
                    <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element/>}
                    />
                    )
                })}
            </Routes>
        </section>
    )
}

export default Body
