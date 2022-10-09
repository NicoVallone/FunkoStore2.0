const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
};


export const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
    },
    logo: {
        marginLeft: 5,
        marginTop: 5,
    },
    nav: {
        display: "flex",
        flexDirection: "row",
        listStyle: "none",
        alignItems: "flex-end",
        marginRight: 20,
        gap: 20,
    },
    navItem:{
        textDecoration: "none",
        color: "black"
    },
    line:{
        width: "100vw",
        height: 2.5,
    },
};

