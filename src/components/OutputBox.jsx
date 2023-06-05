import "./OutputBox.css"

function OutputBox(props) {
    return (
        <div className="output" id="text-output">
        "ShowUserRoles": true, <br/>
        "ShowAPIUsers": true, <br/>
        "ShowBasicConfigurations": true, <br/>
        "ShowAdvancedConfigurations": true, <br/>
        "ShowDataCollectionSettings": true, <br/>
        "ShowAdminSettings": true, <br/>
        "ShowInsights": true, <br/>
        "ShowActivities": true, <br/>
        "ShowWebTasks": true, <br/>
        "ShowSocialTasks": true, <br/>
        "ShowMobileTasks": true, <br/>
        "ShowEmailTasks": true, <br/>
        "ShowDirectTasks": true, <br/>
        "ShowExternalTasks": true, <br/>
        "ShowMessages": true, <br/>
        "ShowCreatives": true, <br/>
        "ShowSegments": true, <br/>
        "ShowEvents": true, <br/>
        "ShowAssets": true, <br/>
        "ShowSpots": true, <br/>
        "ShowDataViews": true, <br/>
        "ShowEmailReview": true, <br/>
      </div>
    );
}

export default OutputBox;