const getAppScope = () => {
    if (window.location.href.includes("adminconsole"))
        return "/adminconsole"
    if (window.location.href.includes("launcher"))
        return '/launcher'
    if (window.location.href.includes("starter"))
        return '/starter'
    if (window.location.href.includes("community"))
        return '/community'

    return ""
}

export default getAppScope