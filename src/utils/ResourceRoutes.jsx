// Elements
import Homepage from "../components/homepage/Homepage";
import CapturedPokemons from "../components/capturedPokemons/CapturedPokemons";
import WildPokemons from "../components/wildPokemons/WildPokemons";

export const PUBLIC_ROUTES = [
    {name: "home", path: '/', element: Homepage},
    {name: 'captured', path:'/captured', element: CapturedPokemons},
    {name: 'wild', path:'/wild', element: WildPokemons}
]

export const ROUTES = new Proxy(PUBLIC_ROUTES, {
        get: function (obj, prop) {
        const routeFound = obj.find((ruta) => ruta.name === prop);
        return routeFound ? routeFound.path : undefined;
        },
    });
