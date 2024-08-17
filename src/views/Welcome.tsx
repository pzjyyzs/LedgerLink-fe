import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss';
import bg1 from '../assets/icons/bg1.png';
import bg2 from '../assets/icons/bg2.png';
export const Welcome = defineComponent({
    setup: (props, context) => {
    return () => (
        <div class={s.wrapper}>
            <header>
                <img src={bg2} alt="" />
                <img src={bg1} alt="" />
            </header>
            <main>
                <RouterView />
            </main>
        </div>
        )
    }
})