import type { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { PrivateLayout } from "./pages/privateLayout";
import { Artist } from "./pages/privateLayout/artist";
import { ArtistAlbums } from "./pages/privateLayout/artist/artistAlbums";
import { Artists } from "./pages/privateLayout/artists";
import { Home } from "./pages/privateLayout/home";
import { Playlists } from "./pages/privateLayout/playlists";
import { Profile } from "./pages/privateLayout/profile";

export const threeRoutes = (queryClient: QueryClient) =>
	createBrowserRouter([
		{
			path: "/",
			// loader: Login.loader,
			Component: Login.ViewModel,
		},
		{
			// loader: PrivateLayout.loader,
			Component: PrivateLayout.ViewModel,
			children: [
				{
					path: "home",
					Component: Home.ViewModel,
				},
				{
					path: "playlists",
					loader: Playlists.loader(queryClient),
					Component: Playlists.ViewModel,
				},
				{
					path: "artists",
					children: [
						{
							index: true,
							Component: Artists.ViewModel,
							loader: Artists.loader(queryClient),
						},
						{
							path: ":artistId",
							Component: Artist.ViewModel,
							loader: Artist.loader(queryClient),
							children: [
								{
									path: "albums",
									Component: ArtistAlbums.ViewModel,
									loader: ArtistAlbums.loader(queryClient),
								},
							],
						},
					],
				},
				{
					path: "profile",
					Component: Profile.ViewModel,
					loader: Profile.loader(queryClient),
				},
			],
		},
	]);
