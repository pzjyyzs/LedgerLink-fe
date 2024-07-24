import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
    setup() {
        
        return () => <>
        <div>
            <ul>
                <li>
                    <router-link to='/'>Foo</router-link>
                </li>
                <li>
                    <router-link to='/about'>Bar</router-link>
                </li>
            </ul>
        </div>
        <div>
            <RouterView />
        </div>
        <div>页脚</div>
    </>
    }
})