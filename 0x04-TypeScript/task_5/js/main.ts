// Define a nominal/brand for major credits
export interface MajorCredits {
	credits: number;
	// brand uniquely identifies this interface (nominal typing)
	brand: 'major';
}

// Define a nominal/brand for minor credits
export interface MinorCredits {
	credits: number;
	// brand uniquely identifies this interface (nominal typing)
	brand: 'minor';
}

// Sum two subjects' credits and return a MajorCredits value
export function sumMajorCredits(
	subject1: { credits: number },
	subject2: { credits: number }
): MajorCredits {
	return { credits: subject1.credits + subject2.credits, brand: 'major' };
}

// Sum two subjects' credits and return a MinorCredits value
export function sumMinorCredits(
	subject1: { credits: number },
	subject2: { credits: number }
): MinorCredits {
	return { credits: subject1.credits + subject2.credits, brand: 'minor' };
}

