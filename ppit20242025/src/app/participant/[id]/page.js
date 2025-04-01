export default async function ParticipantPage({ params }) {
	const participantId = params.id;

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SCRIPT_URL}?id=${participantId}`
		);

		if (!response.ok) {
			throw new Error(`Failed to fetch data: ${response.statusText}`);
		}

		const data = await response.json();

		if (data.error) {
			return (
				<div>
					<h1>Tournament Schedule</h1>
					<p>{data.error}</p>
				</div>
			);
		}

		return (
			<div>
				<h1>Tournament Schedule</h1>
				<div>
					<p>Name: {data.name}</p>
					<p>Next Match: {data.nextMatch}</p>
					<p>Bracket Status: {data.bracketStatus}</p>
					<p>Cabang: {data.cabang}</p>
				</div>
			</div>
		);
	} catch (error) {
		return (
			<div>
				<h1>Tournament Schedule</h1>
				<p>
					An error occurred while loading the schedule. Please try again later.
				</p>
				<p>Error: {error.message}</p>
			</div>
		);
	}
}
