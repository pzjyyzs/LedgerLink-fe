import { Welcome } from '../views/Welcome'
import { Third } from '../components/welcome/Third'
import { Second } from '../components/welcome/Second'
import { First } from '../components/welcome/First'
import { FirstAction } from '../components/welcome/FirstAction'
import { ThirdAction } from '../components/welcome/ThirdAction'
import { SecondAction } from '../components/welcome/SecondAction'

export const routes = [
    { path: '/', redirect: '/welcome' },
    {
        path: '/welcome',
        component: Welcome,
        redirect: '/welcome/1',
        children: [
            { path: '1', components: { main: First, footer: FirstAction } },
            { path: '2', components: { main: Second, footer: SecondAction } },
            { path: '3', components: { main: Third, footer: ThirdAction } },
        ]
    }
]