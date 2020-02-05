import React from "react";
import TopicItemComponent from "./TopicItemComponent";


const TopicPillsComponent = ({topics}) =>{
    return(
        <div>
            <ul className="nav nav-pills wbdv-topic-pill-list">
                {
                    topics.map(function (topic, index) {
                        return <TopicItemComponent
                            topic={topic}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default TopicPillsComponent