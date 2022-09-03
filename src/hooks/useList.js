// all hooks start with use, if it doesn't start as use it doesn't work like a hook

import { useState } from "react";

function useList(init){

    const [list, setList] = useState(init);

    return {
        list, 
        removeItem(item) {
            const filteredList = list.filter(v => v.name !== item);
            setList(filteredList);
        },
        saveItem(index, newVal) {
            const copyList = {...list}
            // console.log(copyList);
            // console.log(copyList[index]);
            // console.log(newVal);
            copyList[index].name = newVal;
            // console.log(copyList)
            setList(copyList);
        }
    }

}

export default useList;