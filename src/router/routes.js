import LoginPage from "@/Pages/LoginPage.vue";
import TasksPage from "@/Pages/TasksPage.vue";
import Register from "@/Pages/Register.vue";
import SummaryPage from "@/Pages/SummaryPage.vue";
import NotFoundErrorPage from "@/Pages/errors/NotFoundErrorPage.vue";

const routes = [
    {
        path: "/tasks",
        component: TasksPage,
        name: "tasks",
        meta: {
            auth: true
        }
    },
     {
        path: "/summary",
        component: SummaryPage,
        name: "summary",
        meta: {
            auth: true
        }
    },
    {
        path: "/login",
        component: LoginPage,
        name: "login",
    },
    {
        path: "/register",
        component: Register,
        name: "register",
    },
    {
        path: "/:notFound(.*)",
        name: 'error.404',
        component: NotFoundErrorPage,

    },
];

export default routes;