import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Going Global`;
    }, [title])
};

export default useTitle;