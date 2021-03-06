import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ToDoList from "../views/Todo.vue";

export default [
{
    path: "/",
    name: "Home",
    component: Home
},
{
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
},
{
    path: "/todo",
    name: "Todo",
    component: ToDoList
}
]