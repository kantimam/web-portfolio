import React, {lazy, Suspense} from 'react'
import Loading from './components/Loading'
const App=lazy(()=>import('./App'))


const AppSuspense = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <App/>
        </Suspense>
    )
}

export default AppSuspense
