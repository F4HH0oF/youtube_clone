import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
	const { id } = useParams();
	const [videos, setVideos] = useState([]);
	const [channelDetail, setChannelDetail] = useState(null);

	console.log(channelDetail);

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetail(data?.items[0])
		);

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => setVideos(data?.items)
		);
	}, [id]);

	return (
		<Box minHeight="95vh">
			<Box>
				<div
					style={{
						background: `linear-gradient(90deg, rgba(62,3,208,1) 0%, rgba(130,0,255,1) 33%, rgba(166,123,255,1) 84%)`,
						zIndex: 10,
						height: "300px",
					}}
				>
					<ChannelCard channelDetail={channelDetail} />
				</div>
			</Box>
			<Box display="flex" p="2">
				<Box sx={{ mr: { sm: "100px", md: "183px" } }} />
				<Videos videos={videos} marginTop="-110px" />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
