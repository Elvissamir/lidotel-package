const useRouteLayoutSelector = () => { 
    const routeHasDefaultLayout = (simpleLayoutRouteList: string[], currentPathName: string) => {
        if (!simpleLayoutRouteList.includes(currentPathName))
            return true
    
        return false
    }

    return {
        routeHasDefaultLayout
    }
}

export default useRouteLayoutSelector