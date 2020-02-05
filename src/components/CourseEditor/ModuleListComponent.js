import React from "react";

import ModuleItemComponent from "./ModuleItemComponent";


const ModuleListComponent = ({modules}) =>{
    return(
        <div>
            {
                modules.map(function (module, index) {
                    return <ModuleItemComponent
                        module={module}
                    />
                })
            }
        </div>
    )
}

export default ModuleListComponent