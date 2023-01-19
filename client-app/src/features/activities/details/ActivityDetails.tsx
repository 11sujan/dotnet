import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/loadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityDetailInfo from "./ActivitiyDetailedInfo";
import ActivityDetailChat from "./ActivityDetailedChat";
import ActivityDetailHeader from "./ActivityDetailedHeader";
import ActivityDetailSidebar from "./ActivityDetailedSidebar";



export default observer ( function ActivityDetail() {
	const {activityStore} = useStore();
	const {selectedActivity: activity, loadActivity} = activityStore;
	const {id} = useParams();

	useEffect(() => {
		if(id) loadActivity(id);
	},[id, loadActivity])

	if(!activity || !activity ) return < LoadingComponent/>;
  return (
    <Grid>
		<Grid.Column width={10}>
			<ActivityDetailHeader activity={activity}/>
			<ActivityDetailInfo activity={activity}/>
			<ActivityDetailChat />
		</Grid.Column>
		<Grid.Column width={6}>
			<ActivityDetailSidebar />
		</Grid.Column>
	</Grid>
  );
})
