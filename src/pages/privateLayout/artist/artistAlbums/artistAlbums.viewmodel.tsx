import { useTypedLoaderData } from "@/hooks/useTypedLoaderData";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import { ArtistAlbumsSkeleton } from "./artistAlbums.skeleton";
import type { ArtistAlbumsLoader } from "./artistAlbums.types";
import { ArtistAlbumsView } from "./artustAlbumns.view";

export function ArtistAlbumnsViewModel() {
	const { artistAlbumsQuery } = useTypedLoaderData<ArtistAlbumsLoader>();

	return (
		<Suspense fallback={<ArtistAlbumsSkeleton />}>
			<Await resolve={artistAlbumsQuery}>
				{(artistAlbumsQueryResolved) => <ArtistAlbumsView artistAlbumsQuery={artistAlbumsQueryResolved} />}
			</Await>
		</Suspense>
	);
}
