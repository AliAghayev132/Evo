const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: {
        file: "/pages/404.html",
    },
    "/": {
        file: "src/pages/home.html",
        css: "./src/css/index.css",
    },
    "/education": {
        file: "src/pages/education.html",
        css: "./src/css/education.css",
    },
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path].file || routes[404].file;
    const html = await fetch(route).then((data) => data.text());
    document.querySelector('link').setAttribute(
        'href',
        routes[path].css || routes[404].css
    )

    document.querySelector("main").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
