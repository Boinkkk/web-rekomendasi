import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("wisata","routes/wisata.tsx"),
    route("wisata/:id","routes/WisataDetail.tsx"),
    route("map","routes/MapPage.tsx"),
    route("login","routes/LoginPage.tsx"),
    route("preferences","routes/UserPreferences.tsx"),
    route("landing","routes/Landing.tsx"),

] satisfies RouteConfig;
