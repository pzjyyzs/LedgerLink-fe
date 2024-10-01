import { defineComponent, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import s from './Welcome.module.scss';
import bg1 from '../assets/icons/bg1.png';
import bg2 from '../assets/icons/bg2.png';
export const Welcome = defineComponent({
    setup: (props, context) => {
    type Y = { Component: VNode, route: RouteLocationNormalizedLoaded }
    return () => (
        <div class={s.wrapper}>
            <header>
                <img src={bg2} alt="" />
                <img src={bg1} alt="" />
            </header>
            <main>  
                <RouterView name="main">
                    { 
                        ({ Component: Content, route: R }: Y) => 
                            <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
                                leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
                                {Content}
                            </Transition>
                    }
                </RouterView>
            </main>
            <footer>
                <RouterView name="footer"></RouterView>
            </footer>
        </div>
        )
    }
})