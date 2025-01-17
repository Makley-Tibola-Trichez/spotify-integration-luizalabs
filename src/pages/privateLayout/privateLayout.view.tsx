import { BottomBar } from "@/components/bottomBar";
import { InstallPWA } from "@/components/installPWA/installPWA";
import { SideBar } from "@/components/sideBar";
import { DiscIcon, HomeIcon, PlayIcon, UserIcon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import SpotifyLogo from "../../assets/spotify-logo.svg";

export function PrivateLayoutView() {
	return (
		<>
			<div className="grid min-h-screen w-full lg:grid-cols-[250px_1fr] md:grid-cols-[220px_1fr]">
				<div className="hidden bg-black md:block">
					<div className="flex h-full max-h-screen flex-col">
						<div className="flex-1">
							<div className="p-6 py-7">
								<Link to="/" className="flex items-center gap-2 font-semibold">
									<img src={SpotifyLogo} alt="Spotify" />
								</Link>
							</div>
							<SideBar.Root>
								<SideBar.Button to="/home">
									<HomeIcon size="24px" />
									Home
								</SideBar.Button>
								<SideBar.Button to="/artists">
									<DiscIcon size="24px" />
									Artistas
								</SideBar.Button>
								<SideBar.Button to="/playlists">
									<PlayIcon size="24px" />
									Playlists
								</SideBar.Button>
								<SideBar.Button to="/profile">
									<UserIcon size="24px" />
									Perfil
								</SideBar.Button>
							</SideBar.Root>
						</div>
						<div className="p-6">
							<InstallPWA />
						</div>
					</div>
				</div>
				<Outlet />
				<BottomBar.Root>
					<BottomBar.Button to="/home">
						<HomeIcon size="24px" />
						Home
					</BottomBar.Button>
					<BottomBar.Button to="/artists">
						<DiscIcon size="24px" />
						Artistas
					</BottomBar.Button>
					<BottomBar.Button to="/playlists">
						<PlayIcon size="24px" />
						Playlists
					</BottomBar.Button>
					<BottomBar.Button to="/profile">
						<UserIcon size="24px" />
						Perfil
					</BottomBar.Button>
				</BottomBar.Root>
			</div>
		</>
	);
}
