import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const App = () => (
	<BrowserRouter>
		<Box sx={{ backgroundColor: "#000" }}>
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Feed />} />
				<Route path="/video/:id" eement={<VideoDetail />} />
				<Route path="/channel/:id" eement={<ChannelDetail />} />
				<Route path="/search/:searchTerm" eement={<SearchFeed />} />
			</Routes>
		</Box>
	</BrowserRouter>
);

export default App;
