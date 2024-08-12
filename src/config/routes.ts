import { Foo } from '../views/Foo'
import { Bar } from '../views/Bar'
import { Welcome } from '../views/Welcome'
import { Third } from '../components/welcome/third'
import { Second } from '../components/welcome/second'
import { First } from '../components/welcome/first'

export const routes = [
    { path: '/', component: Foo },
    { path: '/about', component: Bar },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            { path: '1', component: First },
            { path: '2', component: Second },
            { path: '3', component: Third },
        ]
    }
]