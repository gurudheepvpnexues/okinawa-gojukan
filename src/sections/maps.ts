/**
 * Map pin data for the 3D India map on the About page.
 *
 * Positions come from `india-geo.ts` (real latitude / longitude projected into
 * the map space); this file only carries the presentation of each pin.
 */

export type MapPin = {
	id: string;
	label: string;
	/** line under the name inside the map label */
	sub?: string;
	/** state / place shown in the legend under the panel */
	place: string;
	/** second line in the legend, when it differs from the state */
	legend?: string;
	/** which side of the pin the label sits on */
	side: "left" | "right";
	/** vertical nudge in px, so labels in a cluster do not collide */
	dy: number;
	head?: boolean;
	/** swap the label to the other side on small screens */
	flip?: boolean;
};

/* ------------------------------------------------------------ INDIA MAP */

export const indiaPins: MapPin[] = [
	{
		id: "udhampur",
		label: "Udhampur",
		sub: "Jammu & Kashmir",
		place: "Jammu & Kashmir",
		side: "left",
		dy: 0,
	},
	{
		id: "durga",
		label: "Durga",
		sub: "Delhi",
		place: "Delhi",
		side: "right",
		dy: 0,
	},
	{
		id: "maharashtra",
		label: "Maharashtra",
		place: "Maharashtra",
		legend: "State network",
		side: "left",
		dy: 0,
	},
	{
		id: "goa",
		label: "Goa",
		place: "Goa",
		legend: "State network",
		side: "left",
		dy: -26,
	},
	{
		id: "andhra",
		label: "Andhra Pradesh",
		place: "Andhra Pradesh",
		legend: "State network",
		side: "right",
		dy: 0,
		flip: true,
	},
	{
		id: "bangalore",
		label: "Bangalore",
		sub: "Karnataka",
		place: "Karnataka",
		side: "left",
		dy: 0,
		head: true,
	},
	{
		id: "chennai",
		label: "Chennai",
		sub: "Tamil Nadu",
		place: "Tamil Nadu",
		side: "right",
		dy: 0,
	},
];
