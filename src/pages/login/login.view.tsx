import { Button } from "@/components/ui/button";

import { SpotifyService } from "@/api/spotifyService";
import SpotifyLogo from "@/assets/spotify-logo.svg";

export default function LoginView() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
			<img src={SpotifyLogo} alt="ss" />
			<span className="font-bold">Entra com sua conta Spotify clicando no botão abaixo</span>
			<Button onClick={SpotifyService.getUserAuthorization}>Entrar</Button>
		</div>
	);
}
