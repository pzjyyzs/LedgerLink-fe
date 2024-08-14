import { Welcome } from '../views/Welcome'
import { Third } from '../components/welcome/Third'
import { Second } from '../components/welcome/Second'
import { First } from '../components/welcome/First'

export const routes = [
    { path: '/', redirect: '/welcome' },
    {
        path: '/welcome',
        component: Welcome,
        redirect: '/welcome/1',
        children: [
            { path: '1', component: First },
            { path: '2', component: Second },
            { path: '3', component: Third },
        ]
    }
]